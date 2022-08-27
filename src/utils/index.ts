import {Options} from '@jsdevtools/npm-publish'
import path from 'path'
import fs from 'fs'
import fastGlob from 'fast-glob'
export const parseInputFiles = (files: string): string[] => {
  return files.split(/\r?\n/).reduce<string[]>(
    (acc, line) =>
      acc
        .concat(line.split(','))
        .filter(pat => pat)
        .map(pat => pat.trim()),
    []
  )
}

export type fieldIdType = 'checkVersion' | 'quiet' | 'dryRun'
export const getBoolenValue = (
  options: Options,
  type: fieldIdType,
  value?: string | boolean
): Options => {
  if (typeof value === 'string' && value) {
    if (value === 'true') {
      options[type] = true
    } else {
      options[type] = false
    }
  } else if (typeof value === 'boolean') {
    options[type] = value
  }
  return options
}

export interface OptionsProps
  extends Omit<Options, 'checkVersion' | 'dryRun' | 'quiet'> {
  checkVersion?: boolean | string
  dryRun?: boolean | string
  quiet?: boolean | string
}
export const getOptions = (props: OptionsProps) => {
  const {token, registry, tag, checkVersion, dryRun, quiet} = props
  let options: Options = {
    token,
    registry: registry || 'https://registry.npmjs.org'
  }

  if (tag) {
    options.tag = tag
  }

  if (props.package) {
    options.package = props.package
  }

  // 当 package 不存在值的时候
  if (!options.package) {
    const pg = path.join(process.cwd(), 'package.json')
    if (fs.existsSync(pg)) {
      const result = getVersion(pg)
      if (result) {
        options.package = pg
        options.tag = options.tag || result.tag
      }
    }
  }
  options = getBoolenValue(options, 'checkVersion', checkVersion)
  options = getBoolenValue(options, 'dryRun', dryRun)
  options = getBoolenValue(options, 'quiet', quiet)

  return options
}

/** 读取版本信息 **/
export const getVersion = (packageUrl: string) => {
  const json = fs.readFileSync(path.join(process.cwd(), packageUrl), {
    encoding: 'utf-8'
  })
  try {
    if (json) {
      const data = JSON.parse(json)
      const version = data.version
      const name = data.name
      const priv = data.private
      if (version && !priv && name) {
        const bate = /(-|\.)bate(-|\.\w|$)/.test(version)
        const alpha = /(-|\.)alpha(-|\.\w|$)/.test(version)
        const rc = /(-|\.)rc(-|\.\w|$)/.test(version)
        let tag = 'latest'
        if (alpha) {
          tag = 'alpha'
        } else if (bate) {
          tag = 'bate'
        } else if (rc) {
          tag = 'rc'
        }
        return {
          package: packageUrl,
          tag
        }
      }
    }
  } catch (err) {
    throw err
  }
}

/** 获取 需要发布的包**/
export const getPackages = async (workspaces: string | string[]) => {
  try {
    /** 获取文件 */
    const dirs = (
      typeof workspaces === 'string' ? parseInputFiles(workspaces) : workspaces
    ).map(k => k + '/package.json')

    console.log(`workspaces package.json:${JSON.stringify(dirs, null, 2)}`)

    const resultArr = await fastGlob(
      dirs.concat(['!**/node_modules/**', '!node_modules/**'])
    )

    console.log(`RegExp packages:${JSON.stringify(resultArr, null, 2)}`)

    let packages: {package: string; tag: string}[] = []

    resultArr.forEach(packageUrl => {
      const result = getVersion(packageUrl)
      if (result) packages.push(result)
    })

    return packages
  } catch (err) {
    throw err
  }
}

import {Options} from '@jsdevtools/npm-publish'
import path from 'path'
import fs from 'fs'
import micromatch from 'micromatch'

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

export interface GetEntriesProps {
  cwd?: string
  package?: string
  file?: string | string[]
}
/**
 * @description: 获取输入文件地址
 */
export const getEntries = (props: GetEntriesProps) => {
  const newCwd = props.cwd || process.cwd()
  let input_files: string[] = []
  if (props.file && !props.package) {
    if (Array.isArray(props.file)) {
      input_files = props.file
    } else {
      input_files = parseInputFiles(props.file)
    }
  }
  console.log(`input_files:${JSON.stringify(input_files, null, 2)}`)

  let entries: string[] = []
  if (props.cwd && !props.package) {
    entries = fs.readdirSync(path.join(process.cwd(), props.cwd))
  }

  console.log(`readdir:${JSON.stringify(entries, null, 2)}`)

  if (input_files.length) {
    entries = micromatch(entries, input_files)
  }

  console.log(`entries:${JSON.stringify(entries, null, 2)}`)

  const newEntries: {tag: string; package: string}[] = []
  // 判断 package.json文件是否存在存在则进行，不存在则不进行
  if (entries.length) {
    entries.forEach(key => {
      const filePath = path.join(process.cwd(), newCwd, key)
      const packageJson = path.join(filePath, 'package.json')
      // 判断 package.json 是否存在
      if (fs.existsSync(packageJson)) {
        const result = getVersion(packageJson)
        if (result) newEntries.push(result)
      }
    })
  }
  return newEntries
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
export const getVersion = (paths: string) => {
  const json = fs.readFileSync(paths, {encoding: 'utf-8'})
  try {
    if (json) {
      const data = JSON.parse(json)
      const version = data.version
      const priv = data.private
      if (version && !priv) {
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
          package: paths,
          tag
        }
      }
    }
  } catch (err) {
    console.log(err)
  }
}

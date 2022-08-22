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
): void => {
  if (typeof value === 'string' && value) {
    if (value === 'true') {
      options[type] = true
    } else {
      options[type] = false
    }
  } else if (typeof value === 'boolean') {
    options[type] = value
  }
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

  let entries: string[] = []
  if (props.cwd && !props.package) {
    entries = fs.readdirSync(path.join(process.cwd(), props.cwd))
  }

  if (input_files.length) {
    entries = micromatch(input_files, entries)
  }

  const newEntries: string[] = []
  // 判断 package.json文件是否存在存在则进行，不存在则不进行
  if (entries.length) {
    entries.forEach(key => {
      const filePath = path.join(process.cwd(), newCwd, key)
      const packageJson = path.join(filePath, 'package.json')
      // 判断 package.json 是否存在
      if (fs.existsSync(packageJson)) {
        newEntries.push(packageJson)
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
  const options: Options = {
    token,
    registry: registry || 'https://registry.npmjs.org',
    tag: tag || 'latest',
    package: props.package
  }
  // 当 package 不存在值的时候
  if (!options.package) {
    const pg = path.join(process.cwd(), 'package.json')
    if (fs.existsSync(pg)) {
      options.package = './package.json'
    }
  }

  getBoolenValue(options, 'checkVersion', checkVersion)
  getBoolenValue(options, 'dryRun', dryRun)
  getBoolenValue(options, 'quiet', quiet)

  return options
}

import npmPublish, {Options} from '@jsdevtools/npm-publish'
import * as core from '@actions/core'
import FG from 'fast-glob'
import fs from 'fs'
import path from 'path'
const parseInputFiles = (files: string): string[] => {
  return files.split(/\r?\n/).reduce<string[]>(
    (acc, line) =>
      acc
        .concat(line.split(','))
        .filter(pat => pat)
        .map(pat => pat.trim()),
    []
  )
}

type fieldIdType = 'checkVersion' | 'quiet' | 'dryRun'
const getBoolenValue = (
  type: fieldIdType,
  value: string,
  options: Options
): void => {
  if (value) {
    if (value === 'true') {
      options[type] = true
    } else {
      options.dryRun = false
    }
  }
}

async function run(): Promise<void> {
  try {
    // 文件正则
    const file = core.getInput('files')
    // 包目录
    const cwd = core.getInput('cwd')
    // token
    const token = core.getInput('token')
    const registry = core.getInput('registry')
    const packages = core.getInput('package')
    const tag = core.getInput('tag')
    const dryRun = core.getInput('dryRun')
    const checkVersion = core.getInput('checkVersion')
    const quiet = core.getInput('quiet')

    if (!token) {
      throw new Error('token is empty')
    }
    const newCwd = cwd || process.cwd()

    let input_files: string[] = []
    if (file && !packages) {
      input_files = parseInputFiles(file)
    } else if (!packages) {
      input_files = fs.readdirSync(path.join(__dirname, newCwd), 'utf-8')
    }

    const options: Options = {
      registry,
      package: packages,
      tag
    }

    getBoolenValue('checkVersion', checkVersion, options)
    getBoolenValue('dryRun', dryRun, options)
    getBoolenValue('quiet', quiet, options)

    if (input_files.length && !packages) {
      const entries = await FG(input_files, {cwd: newCwd})
      // eslint-disable-next-line no-console
      console.log(`entries---->${JSON.stringify(entries, null, 2)}`)
      core.info(`entries---->${JSON.stringify(entries, null, 2)}`)
      const assets = await Promise.all(
        entries.map(async pathUrls => {
          const json = await npmPublish({
            ...options,
            package: `${pathUrls}/package.json`
          })
          return json
        })
        // eslint-disable-next-line github/no-then
      ).catch(error => {
        throw error
      })
      core.setOutput('assets', assets)
      // eslint-disable-next-line no-console
      console.log(`'assets--->${JSON.stringify(assets, null, 2)}`)
      core.info(`assets: ${JSON.stringify(assets, null, 2)}`)
    } else if (packages) {
      const json = await npmPublish({
        ...options
      })
      core.setOutput('assets', json)
      // eslint-disable-next-line no-console
      console.log(`'assets--->${JSON.stringify(json, null, 2)}`)
      core.info(`assets: ${JSON.stringify(json, null, 2)}`)
    } else {
      throw new Error('package is empty')
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  return
}

run()

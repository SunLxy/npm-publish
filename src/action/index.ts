import {Options} from '@jsdevtools/npm-publish'
import * as core from '@actions/core'
import {getOptions, getPackages} from '../utils'
import {request} from './../utils/request'
import {EntriesType} from '../utils/interface'

async function mainNpmPublish(): Promise<void> {
  try {
    // 包目录
    const workspaces = core.getInput('workspaces')
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
    core.info(`input packages---->${packages}`)
    // 获取包文件夹
    let newEntries: EntriesType[] = []
    if (!packages) {
      newEntries = await getPackages(workspaces)
    }
    const options: Options = getOptions({
      token,
      registry,
      package: packages,
      tag,
      dryRun,
      checkVersion,
      quiet
    })
    core.info(`newEntries---->${JSON.stringify(newEntries, null, 2)}`)
    core.info(`options---->${JSON.stringify(options, null, 2)}`)
    const result = await request(options, tag, newEntries)
    core.setOutput('assets', result)
    core.info(`assets: ${JSON.stringify(result, null, 2)}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  return
}
mainNpmPublish()

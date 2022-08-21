import {Options} from '@jsdevtools/npm-publish'
import * as core from '@actions/core'
import {getEntries, getOptions} from '../utils'
import {request} from './../utils/request'
async function mainNpmPublish(): Promise<void> {
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
    const options: Options = getOptions({
      token,
      registry,
      package: packages,
      tag,
      dryRun,
      checkVersion,
      quiet
    })
    // 获取包文件夹
    const newEntries: string[] = getEntries({cwd, package: packages, file})
    core.info(`newEntries---->${JSON.stringify(newEntries, null, 2)}`)
    core.info(`options---->${JSON.stringify(options, null, 2)}`)
    const result = await request(options, newEntries)
    core.setOutput('assets', result)
    core.info(`assets: ${JSON.stringify(result, null, 2)}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
  return
}
export default mainNpmPublish

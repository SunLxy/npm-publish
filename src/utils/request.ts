import type { Options } from '@jsdevtools/npm-publish'
import { npmPublish } from '@jsdevtools/npm-publish'
import type { EntriesType, Results } from './interface.js'
import { checkVersion } from './checkVersion.js'

export const request = async (
  options: Options,
  tag?: string,
  newEntries?: EntriesType[]
): Promise<Results | Results[]> => {
  if (Array.isArray(newEntries) && newEntries.length) {
    const lg = newEntries.length
    try {
      const resultArr: Results[] = []
      for (let index = 0; index < lg; index++) {
        const item = newEntries[index]
        const isPublish = await checkVersion(item.name, item.version)
        if (isPublish) {
          const json = await npmPublish({
            ...options,
            tag: tag || item.tag,
            package: item.package
          })
          resultArr.push(json)
        } else {
          console.log(`- ${item.name}@${item.version} 版本已存在`)
        }
      }
      return resultArr
    } catch (err) {
      throw err
    }
  } else if (options.package) {
    const json = await npmPublish({
      ...options
    })
    return json
  } else {
    throw 'package is empty'
  }
}

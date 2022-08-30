import npmPublish, {Options} from '@jsdevtools/npm-publish'

export interface Results {
  package?: string
  type?: string
  version?: string
  oldVersion?: string
  tag?: string
  access?: string
  dryRun?: boolean
}

export const request = async (
  options: Options,
  tag?: string,
  newEntries?: {tag: string; package: string}[]
): Promise<Results | Results[]> => {
  if (Array.isArray(newEntries) && newEntries.length) {
    const lg = newEntries.length
    try {
      const resultArr: Results[] = []
      for (let index = 0; index < lg; index++) {
        const item = newEntries[index]
        const json = await npmPublish({
          ...options,
          tag: tag || item.tag,
          package: item.package
        })
        resultArr.push(json)
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

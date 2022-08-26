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
    const assets = await Promise.all(
      newEntries.map(async item => {
        const json = await npmPublish({
          ...options,
          tag: tag || item.tag,
          package: item.package
        })
        return json
      })
    ).catch(error => {
      throw error
    })
    return assets
  } else if (options.package) {
    const json = await npmPublish({
      ...options
    })
    return json
  } else {
    throw 'package is empty'
  }
}

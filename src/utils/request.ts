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
  newEntries?: string[]
): Promise<Results | Results[]> => {
  if (Array.isArray(newEntries) && newEntries.length) {
    const assets = await Promise.all(
      newEntries.map(async pathUrls => {
        const json = await npmPublish({
          ...options,
          package: pathUrls
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

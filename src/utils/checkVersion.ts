/**
 * 检测版本是否存在
 */
import {packument} from 'pacote'
export const checkVersion = async (packageName: string, version: string) => {
  try {
    const pckmnt = await packument(packageName, {
      fullMetadata: true,
      preferOnline: true,
      silent: true
    })
    return !pckmnt.versions[version]
  } catch (err) {
    const statusCode = (err as any).statusCode
    //当前包不存在，可以发布
    if (statusCode === 404) {
      return true
    }
  }
  // 包不能进行发布
  return false
}

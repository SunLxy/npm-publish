import {getEntries, getOptions, OptionsProps} from './utils'
import {request, Results} from './utils/request'

export interface MainNpmPublishProps extends OptionsProps {
  cwd?: string
  file?: string | string[]
}
async function mainNpmPublish(
  props: MainNpmPublishProps
): Promise<Results | Results[]> {
  const {cwd, file, ...rest} = props
  try {
    const newOptions = getOptions(rest)
    if (!newOptions.token) {
      throw new Error('token is empty')
    }
    const newEntries = getEntries({cwd, file, package: props.package})
    return await request(newOptions, newEntries)
  } catch (err) {
    console.log(err)
  }
  return []
}
export default mainNpmPublish

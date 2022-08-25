import {getEntries, getOptions, OptionsProps} from './utils'
import {request, Results} from './utils/request'

export interface MainNpmPublishProps extends OptionsProps {
  cwd?: string
  file?: string | string[]
}
async function mainNpmPublish(
  props: MainNpmPublishProps
): Promise<Results | Results[] | undefined> {
  const {cwd, file, ...rest} = props
  try {
    if (!props.token) {
      throw new Error('token is empty')
    }
    const newEntries = getEntries({cwd, file, package: props.package})
    const newOptions = getOptions(rest)
    return await request(newOptions, newEntries)
  } catch (err) {
    console.log(err)
  }
}
export default mainNpmPublish

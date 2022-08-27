import {getOptions, OptionsProps, getPackages} from './utils'
import {request, Results} from './utils/request'

export interface MainNpmPublishProps extends OptionsProps {
  workspaces?: string | string[]
  file?: string | string[]
}
async function mainNpmPublish(
  props: MainNpmPublishProps
): Promise<Results | Results[] | undefined> {
  const {workspaces, file, ...rest} = props
  try {
    if (!props.token) {
      throw new Error('token is empty')
    }
    let newEntries: {package: string; tag: string}[] = []
    if (workspaces) {
      newEntries = await getPackages(workspaces, file)
    }
    const newOptions = getOptions(rest)
    return await request(newOptions, props.tag, newEntries)
  } catch (err) {
    console.log(err)
  }
}
export default mainNpmPublish

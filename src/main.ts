import {getOptions, OptionsProps, getPackages} from './utils'
import {request} from './utils/request'
import {Results, EntriesType} from './utils/interface'

export interface MainNpmPublishProps extends OptionsProps {
  workspaces?: string | string[]
}
async function mainNpmPublish(
  props: MainNpmPublishProps
): Promise<Results | Results[] | undefined> {
  const {workspaces, ...rest} = props
  try {
    if (!props.token) {
      throw new Error('token is empty')
    }
    let newEntries: EntriesType[] = []
    if (workspaces) {
      newEntries = await getPackages(workspaces)
    }
    const newOptions = getOptions(rest)
    return await request(newOptions, props.tag, newEntries)
  } catch (err) {
    console.log(err)
  }
}
export default mainNpmPublish

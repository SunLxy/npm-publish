export interface EntriesType {
  name: string
  tag: string
  package: string
  version: string
  isPublish?: boolean
}
export interface Results {
  package?: string
  type?: string
  version?: string
  oldVersion?: string
  tag?: string
  access?: string
  dryRun?: boolean
}

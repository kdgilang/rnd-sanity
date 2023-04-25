import { BasePropsType } from "./BasePropsType"

export type SettingsPropsType = BasePropsType & {
  siteName: string
  siteDescription: string
  siteLogo: any[]
  socialNetworks: any[]
}
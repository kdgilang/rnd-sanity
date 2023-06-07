import { BasePropsType } from "./BasePropsType"

export type SettingsPropsType = BasePropsType & {
  site_name: string
  site_description: string
  site_logo: any[]
  social_networks: any[],
  menus: any[],
  home_page: any
}
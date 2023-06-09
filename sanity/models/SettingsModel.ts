import RouteSettingModel from "./RouteSettingModel";
import SisteSettingModel from "./SiteSettingModel";
import { SocailMediaSettingModel } from "./SocialMediaSettingModel";

class SettingsModel {
  siteSetting: SisteSettingModel
  socialMediaSetting: SocailMediaSettingModel
  routeSetting: RouteSettingModel

  constructor() {
    this.siteSetting = new SisteSettingModel()
    this.socialMediaSetting = new SocailMediaSettingModel()
    this.routeSetting = new RouteSettingModel()
  }
}

export default SettingsModel
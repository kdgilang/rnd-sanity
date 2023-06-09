import SisteSettingModel from "./SiteSettingModel";
import { SocailMediaSettingModel } from "./SocialMediaSettingModel";

class SettingsModel {
  site: SisteSettingModel
  socialMedia: SocailMediaSettingModel

  constructor() {
    this.site = new SisteSettingModel()
    this.socialMedia = new SocailMediaSettingModel()
  }
}

export default SettingsModel
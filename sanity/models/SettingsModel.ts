import RouteSettingModel from "./RouteSettingModel";
import SisteSettingModel from "./SiteSettingModel";
import { NetworkSettingModel } from "./NetworkSettingModel";

class SettingsModel {
  siteSetting: SisteSettingModel
  networkSetting: NetworkSettingModel
  routeSetting: RouteSettingModel

  constructor() {
    this.siteSetting = new SisteSettingModel()
    this.networkSetting = new NetworkSettingModel()
    this.routeSetting = new RouteSettingModel()
  }
}

export default SettingsModel
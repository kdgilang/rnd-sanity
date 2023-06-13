import LinkModel from "./LinkModel";
import MenuModel from "./MenuModel";

class RouteSettingModel {
  menu: LinkModel[]
  homePage: MenuModel

  constructor() {
    this.menu = new Array<LinkModel>()
    this.homePage = new MenuModel()
  }
}

export default RouteSettingModel
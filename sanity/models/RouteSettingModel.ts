import MenuModel from "./MenuModel";

class RouteSettingModel {
  menu: MenuModel[]
  homePage: MenuModel

  constructor() {
    this.menu = new Array<MenuModel>()
    this.homePage = new MenuModel()
  }
}

export default RouteSettingModel
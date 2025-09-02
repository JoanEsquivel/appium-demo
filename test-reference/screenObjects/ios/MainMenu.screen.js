class MainMenuScreen {
    get loginMenuOption() {
      return $('//XCUIElementTypeOther[@name="menu item log in"]');
    }
  }
  
  module.exports = new MainMenuScreen();
  
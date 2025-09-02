class LeftSideMenuScreen {
  get expandMenuButton() {
    return $("~open menu");
  }

  get loginMenuOption() {
    return $('//*[@text="Log In"]');
  }
}

module.exports = new LeftSideMenuScreen();

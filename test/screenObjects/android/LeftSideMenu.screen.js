class LeftSideMenuScreen {
  get expandMenuButton() {
    return $("~View menu");
  }

  get loginMenuOption() {
    return $('//*[@text="Log In"]');
  }
}

module.exports = new LeftSideMenuScreen();

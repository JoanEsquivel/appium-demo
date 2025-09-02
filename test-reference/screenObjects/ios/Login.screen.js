class LoginScreen {
  get inputUsername() {
    return $('-ios class chain:**/XCUIElementTypeTextField[`name == "Username input field"`]');
  }

  get inputPassword() {
    return $('-ios predicate string:name == "Password input field"');
  }

  get btnLogin() {
    return $(
      '//*[@name="Login button"]'
    );
  }

  get errorMessageText() {
    return $(
      '~Provided credentials do not match any user in this service.'
    );
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }
}

module.exports = new LoginScreen();

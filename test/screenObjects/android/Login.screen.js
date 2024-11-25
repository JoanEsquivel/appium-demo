class LoginScreen {
  get inputUsername() {
    return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]');
  }

  get inputPassword() {
    return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]');
  }

  get btnLogin() {
    return $(
      '//android.widget.Button[@content-desc="Tap to login with given credentials"]'
    );
  }

  get errorMessageText() {
    return $(
      '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV"]'
    );
  }
  //errorUsernameMessague
  //xpath: //android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/nameErrorTV"]
 //text: Username is required

 //errorPasswordMessague
 //xpath: //android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV"]
 //text: Enter Password


 
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

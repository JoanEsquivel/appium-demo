const CatalogScreen = require("../../screenObjects/android/Catalog.screen");
const LoginScreen = require("../../screenObjects/android/Login.screen");
const LeftSideMenuScreen = require("../../screenObjects/android/LeftSideMenu.screen")

describe("My Login Demo", () => {
  beforeEach(async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await LeftSideMenuScreen.loginMenuOption.click();
  });
  //Test case 1
  it("should not login with blocked user credentials", async () => {
    LoginScreen.login("alice@example.com", "10203040");
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Sorry this user has been locked out."
    );
  });
  //Test case 2
  it("should login with valid credentials", async () => {
    LoginScreen.login("bob@example.com", "10203040");
    await expect(CatalogScreen.productsHeader).toHaveText("Products");
  });

  /*
  it("should not login with invalid credentials", async () => {
    LoginScreen.login("wrongUser", "wrongPassword");
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });
  */
 //Enter invalid user and password

 // text: Username is required  //Not enter user but enter password
                                //Not enter nothing
 
 //text: Enter Password         //Not enter passw but enter username

 //Enter special characters
 //Enter ..
 
});

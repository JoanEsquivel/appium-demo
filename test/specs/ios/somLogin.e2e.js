const CatalogScreen = require("../../screenObjects/ios/Catalog.screen");
const LoginScreen = require("../../screenObjects/ios/Login.screen");
const LeftSideMenuScreen = require("../../screenObjects/ios/BottomSideMenu.screen")
const MainMenuScreen = require("../../screenObjects/ios/MainMenu.screen")

describe("My Login Demo", () => {
  beforeEach(async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await MainMenuScreen.loginMenuOption.click();
  });

  it("should not login with invalid credentials", async () => {
    LoginScreen.login("wrongUser", "wrongPassword");
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });

  it("should login with valid credentials", async () => {
    LoginScreen.login("bob@example.com", "10203040");
    await expect(CatalogScreen.productsHeader).toHaveText("Products");
  });
});

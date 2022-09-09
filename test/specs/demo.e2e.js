const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    // await LoginPage.open();

    // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //     'You logged into a secure area!');
    // const usernameElement = await $('~test-Username')
    // usernameElement.setValue('standard_user')

    //Default Xpath
    const productsTitle = await $(
      '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView'
    );
    // console.log(productsTitle)
    console.log(await productsTitle.getText());
    await expect(productsTitle).toHaveText("Products");

    //Custom XPath
    const menuButton = await $(
      '//android.view.ViewGroup[@content-desc="open menu"]'
    );
    await menuButton.click();

    //Find by text
    ////android.view.ViewGroup[@content-desc="menu item log in"]/android.widget.TextView
    const loginButton = await $('//android.widget.TextView[@text="Log In"]');
    await loginButton.click();

    const loginTitle = await $(
      '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView'
    );
    await expect(loginTitle).toHaveText("Login");

    const usernameInput = await $("~Username input field");
    console.log(usernameInput);
    await usernameInput.setValue("bob@example.com");

    const passwordInput = await $("~Password input field");
    await passwordInput.setValue("10203040");

    const loginSubmitButton = await $(
      '//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView'
    );
    await loginSubmitButton.click();

    // await expect(productsTitle).toHaveText('Products')
    //UI Automator selectors:
    //https://webdriver.io/docs/selectors/#android-uiautomator
    //https://developer.android.com/reference/androidx/test/uiautomator/UiSelector

    const selector =
      'new UiSelector().text("Products").className("android.widget.TextView")';
    const productsUISelector = await $(`android=${selector}`);
    await expect(productsUISelector).toHaveText("Productss");
  });
});

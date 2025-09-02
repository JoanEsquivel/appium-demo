describe("My Login Demo", () => {
  beforeEach(async () => {
    //Accesibility selector
    await $('~tab bar option menu').click()
    //Relative Xpath by tag name + attribute
    await $('//XCUIElementTypeOther[@name="menu item log in"]').click()
    
  });

  it("should not login with invalid credentials", async () => {
    //Class chain
    //Use the prefix -> -ios class chain:
    await $('-ios class chain:**/XCUIElementTypeTextField[`name == "Username input field"`]').setValue('testUser')
    //Predicate String
    //Use the prefix -> -ios predicate string:
    await $('-ios predicate string:name == "Password input field"').setValue('testPassword')

    await $('//*[@name="Login button"]').click()

    await expect(
      $(
        '~Provided credentials do not match any user in this service.'
      )
    ).toHaveText("Provided credentials do not match any user in this service.");
  });

  it("should login with valid credentials", async () => {

    //Class chain
    //Use the prefix -> -ios class chain:
    await $('-ios class chain:**/XCUIElementTypeTextField[`name == "Username input field"`]').setValue('bob@example.com')
    //Predicate String
    //Use the prefix -> -ios predicate string:
    await $('-ios predicate string:name == "Password input field"').setValue('10203040')

    await $('//*[@name="Login button"]').click()

    // console.log(await $('//XCUIElementTypeStaticText[@name="Products"]').getText())
    await expect(
      $(
        '//XCUIElementTypeStaticText[@name="Products"]'
      )
    ).toHaveText("Products");

  });
});

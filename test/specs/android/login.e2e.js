describe("My Login Demo", () => {
  beforeEach(async () => {
    //Access the hamburguer/toggle button by its accessibility id
    await $("~View menu").click();
    //Access the login left menu option by its text
    await $('//*[@text="Log In"]').click();
     await driver.pause(3000)
  });

  //Test 1
  it("should not login with blocked user credentials", async () => {
    //Access the username input element 
    //has
    //id: com.saucelabs.mydemoapp.android:id/nameET
    //elementId: 00000000-0000-0027-ffff-ffff0000017c
    //-android uiatuomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/nameET")
    //xpath: //android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]
    await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]').setValue("alice@example.com"); 
    //Access the username input element by 
    //id: com.saucelabs.mydemoapp.android:id/passwordET
    //elementId= 00000000-0000-0027-ffff-ffff00000181
    //class: android.widget.EditText
    //-android uiatuomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/passwordET")
    //xpath: //android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]
    await $(
      '//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]'
    ).setValue("10203040");
    //Access the login button by the default xpath
    //-android uiatuomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/loginBtn")
    //xpath: //android.widget.Button[@content-desc="Tap to login with given credentials"]
    await $(
      '//android.widget.Button[@content-desc="Tap to login with given credentials"]'
    ).click();
    await driver.pause(3000);

    //Validate the error message
    // -android uiatuomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/passwordErrorTV")
    //xpath:  //android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV"]
    await expect(
      $(
        '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV"]'
      )
    ).toHaveText("Sorry this user has been locked out.");
  });
  
  //Test 2
  it("should login with valid credentials", async () => {
    //Access the username input element by xpath
    await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]').setValue(
      "bod@example.com"
    );
    //Access the password input element by xpath
    await $(
      '//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]'
    ).setValue("10203040");
    //Access the login button by the default xpath
    await $(
      '//android.widget.Button[@content-desc="Tap to login with given credentials"]'
    ).click();
     await driver.pause(3000);

    //Access the product header element using the UISelector
    //https://webdriver.io/docs/selectors/#android-uiautomator
    //https://developer.android.com/reference/androidx/test/uiautomator/UiSelector

    //android uiautomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV")
    const selector =
      'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV")';
    const productsUISelector = await $(`android=${selector}`);
    await expect(productsUISelector).toHaveText("Products");
  });


});

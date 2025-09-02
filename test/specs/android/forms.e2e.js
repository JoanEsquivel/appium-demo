describe("Forms test suite", () => {
  beforeEach(async () => {
    // Tap new" command -> https://webdriver.io/docs/api/mobile/tap
    await $("~Forms").tap();
  });

  it("should fill out the input field", async () => {
    await $('~text-input').setValue("Hello from Appium!");

    await expect(
      $(
        '~input-text-result'
      )
    ).toHaveText("Hello from Appium!");
  });

  it('should turn switch on and off', async () => {
    await $('~switch').tap();
    await expect($('~switch-text')).toHaveText("Click to turn the switch OFF");
    await $('~switch').tap();
    await expect($('~switch-text')).toHaveText("Click to turn the switch ON");
  })

  it('should select a dropdown item', async () => {
    await $('//*[@text="Select an item..."]').tap();
    await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]').tap();
    await expect($('//android.widget.EditText[@text="This app is awesome"]')).toHaveText("This app is awesome");
  })

  it('should be able to click on the active button and then close the modal', async () => {
    await $('//android.widget.TextView[@text="Active"]').tap();

    // Wait for the dialog message to appear
    const dialogMessage = await $('//*[@resource-id="android:id/message"]');
    await dialogMessage.waitForDisplayed();
    await expect(dialogMessage).toHaveText("This button is active");

    // Click OK button to close the modal
    const okButton = await $('//*[@resource-id="android:id/button1"]');
    await okButton.tap();

    // Verify modal is closed by checking the message is no longer displayed
    await expect(dialogMessage).not.toBeDisplayed();
  })

  it('should be able to click on the inactive button and confirm the modal is not displayed', async () => {
    await $('//android.widget.TextView[@text="Inactive"]').tap();

    // Verify no modal dialog message appears after clicking inactive button
    const dialogMessage = $('//*[@resource-id="android:id/message"]');
    await expect(dialogMessage).not.toBeDisplayed();
  })

});

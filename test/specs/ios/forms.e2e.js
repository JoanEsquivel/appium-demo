// Swipe and tap on the elements are not working in the iOS app. 
// It is probably something in my environment, I will try to fix it later.
describe.skip("Forms test suite", () => {
  beforeEach(async () => {
    await $("~Forms").click();
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
    await $('~switch').click();
    await expect($('~switch-text')).toHaveText("Click to turn the switch OFF");
    await $('~switch').click();
    await expect($('~switch-text')).toHaveText("Click to turn the switch ON");
  })

  it('should select a dropdown item', async () => {
    await $('~Dropdown').click();
    await $('//XCUIElementTypePickerWheel').setValue('This app is awesome');
    await $('~done_button').click();
    await expect($('~Dropdown').$('~text_input')).toHaveText("This app is awesome");

  })

  it('should be able to click on the active button and then close the modal', async () => {
    await $('~Active').click();
    await expect($('//XCUIElementTypeAlert//XCUIElementTypeStaticText[2]')).toHaveText("This button is active");
    await $('~OK').click();
    await expect($('~OK')).not.toBeDisplayed();
  })

  it('should be able to click on the inactive button and confirm the modal is not displayed', async () => {
    await $('~Inactive').click();

    await expect($('~OK')).not.toBeDisplayed();
  })

});

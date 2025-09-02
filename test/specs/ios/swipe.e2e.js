describe("Swipe test suite", () => {
  beforeEach(async () => {
    // Tap new" command -> https://webdriver.io/docs/api/mobile/tap
    await $("~Swipe").click();
  });

  it.skip("should swipe up to the bottom of the screen", async () => {
    await driver.swipe({
      direction: 'up',
      speed: 'slow',
      percentage: 1,
    });
    await expect(await $('//*[@text="You found me!!!"]')).toHaveText("You found me!!!");
  });

  it.skip('should swipe left to show the next card', async () => {
    // This is not working. I think it is because the carousel is not a scrollable element.
    await driver.swipe({
      direction: 'left',
      speed: 'slow',
      percentage: 1,
      scrollableElement: '~Carousel',
    });
    await expect(await $('//android.widget.TextView[@text="COMPATIBLE"]')).toHaveText("COMPATIBLE");
  })

  afterEach(async () => {
    await driver.swipe({
      direction: 'down',
      percentage: 1,
    });
  })

});

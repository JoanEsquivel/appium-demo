describe("My Login Demo", () => {
  beforeEach(async () => {
    //Access the hamburguer/toggle button by its accessibility id
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
});

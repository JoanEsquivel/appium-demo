describe("My Login Demo", () => {
  beforeEach(async () => {});

  it("should not login with invalid credentials", async () => {
    await $('~tab bar option menu').click()
    await driver.pause(3000)
  });

  it("should login with valid credentials", async () => {});
});

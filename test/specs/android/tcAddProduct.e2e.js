const CatalogScreen = require("../../screenObjects/android/Catalog.screen");
const LoginScreen = require("../../screenObjects/android/Login.screen");
const LeftSideMenuScreen = require("../../screenObjects/android/LeftSideMenu.screen");
const ProductScreen = require("../../screenObjects/android/Product.screen");

describe("My Add Product Demo", () => {
  beforeEach(async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await LeftSideMenuScreen.loginMenuOption.click();
  });
  //Test case 1
  it("enter with correct user and password and increment de counter of the product for see in principalCounterProduct", async () => {
    LoginScreen.login("bob@example.com", "10203040");
    await CatalogScreen.sauceLabsBackpackProduct.click();
    cuantity = 3;
    for (let i = 0; i < cuantity; i++) {
      await ProductScreen.addcuantity.click();
    }
    await expect(ProductScreen.principalCounterProduct).toHaveText(
      `${cuantity}`
    );
  });
  //Test case 2
  it("enter with correct user and password and increment de counter of the product for see in cartCounter", async () => {
    LoginScreen.login("bob@example.com", "10203040");
    await CatalogScreen.sauceLabsBackpackProduct.click();
    cuantity = 3;
    for (let i = 0; i < cuantity; i++) {
      await ProductScreen.addcuantity.click();
    }
    await ProductScreen.addtocartbutton.click();

    await expect(ProductScreen.cartCounter).toHaveText(`${cuantity}`);
  });
 
});

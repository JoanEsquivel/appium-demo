class CatalogScreen {
  get productsHeader() {
    return $(
      'android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV")'
    );
  }
}

module.exports = new CatalogScreen();

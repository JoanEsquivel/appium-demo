class CatalogScreen {
  get productsHeader() {
    return $(
      'android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV")'
    );
  }
  //Product 1
  //xpath: (//android.widget.ImageView[@content-desc="Product Image"])[1]
  //-android uiautomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)
  get sauceLabsBackpackProduct(){
    return $(
      'android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)'
    )
  }


}

module.exports = new CatalogScreen();

class Product {
  //Addtocartbutton
  //-android uiautomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cartBt")
  //xpath: //android.widget.Button[@content-desc="Tap to add product to cart"]

  get addtocartbutton() {
    return $(
      'android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cartBt")'
    );
  }
  //add cuantity
  //xpath: //android.widget.ImageView[@content-desc="Increase item quantity"]
  //-android uiautomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/plusIV")
  get addcuantity() {
    return $(
      'android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/plusIV")'
    );
  }
  //principalCounterProduct
  //xpath: //android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV"]
  //-android uiautomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/noTV")
  get principalCounterProduct() {
    return $(
      'android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/noTV")'
    );
  }

  //cartCounter
  //xpath: //android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]
  //-android uiautomator: new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cartTV")
  get cartCounter() {
    return $(
      'android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cartTV")'
    );
  }

  async addProduct() {
    await this.addtocartbutton.click();
    
  }
}

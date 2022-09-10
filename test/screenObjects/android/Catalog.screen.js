class CatalogScreen {
  get productsHeader() {
    return $(
      'android=new UiSelector().text("Products").className("android.widget.TextView")'
    );
  }
}

module.exports = new CatalogScreen();

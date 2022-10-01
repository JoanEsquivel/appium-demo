class CatalogScreen {
  get productsHeader() {
    return $(
      '//XCUIElementTypeStaticText[@name="Products"]'
    );
  }
}

module.exports = new CatalogScreen();

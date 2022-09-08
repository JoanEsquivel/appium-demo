const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open();

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
        // const usernameElement = await $('~test-Username')
        // usernameElement.setValue('standard_user')

        const productsTitle = await $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
        await expect(productsTitle).toHaveText('Products')

    });
});


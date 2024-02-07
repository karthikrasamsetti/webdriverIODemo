const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("//input[@placeholder='Username']");
    }

    get inputPassword () {
        return $("//input[@placeholder='Password']");
    }

    get btnLogin () {
        return $("//button[normalize-space()='Login']");
    }
    get btnforgetPassword(){
        return $("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']");
    }
    get logo(){
        return $("//img[@alt='company-branding']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
    async forgotpassword(){
        (await this.btnforgetPassword).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();

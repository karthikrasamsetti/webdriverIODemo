const Page = require("./page");

class RequestPasswordResetCodePage extends Page{

    get inputUsername () {
        return $("//input[@placeholder='Username']");
    }
    get btnresetpassword () {
        return $("//button[@type='submit']");
    }
    get setpasswordreset(){
        return $("//h6[normalize-space()='Reset Password link sent successfully']");
    }
    async resetpassword(username){
        await this.inputUsername.setValue(username);
        await this.btnresetpassword.click()
    }
}
module.exports = new RequestPasswordResetCodePage();
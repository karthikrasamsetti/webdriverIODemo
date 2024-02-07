const { $ } = require('@wdio/globals')
const Page = require('./page');
let store;
/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get tabadmin(){
        return $("//a[normalize-space()='Admin']");
    }
    get btnadd(){
        return $("//button[normalize-space()='Add']")
    }
    get selectrole(){
        return $("(//div[contains(text(),'-- Select --')])[1]")
    }
    get selectESS(){
        return $("(//div[@role='option'])[3]")
    }
    get selectAdmin(){
        return $("(//div[@role='option'])[2]")
    }
    get selectstatus(){
        return $("(//div[@class='oxd-select-text oxd-select-text--active'])[2]")
    }
    get selectenable(){
        return $("//span[normalize-space()='Enabled']")
    }
    get inputUsername () {
        return $("(//input[@class='oxd-input oxd-input--active'])[2]");
    }
    get inputEmployeename () {
        return $("//input[@placeholder='Type for hints...']");
    }
    get selectEmployee () {
        return $("//div[@role='listbox']//div[1]");
    }
    get inputPassword () {
        return $("(//input[@type='password'])[1]");
    }
    get inputconfirmPassword () {
        return $("(//input[@type='password'])[2]");
    }
    get btnsave(){
        return $("//button[@type='submit']");
    }
    get iconedit(){
        return $("(//i[@class='oxd-icon bi-pencil-fill'])[1]");
    }
    get essenable(){
        return $("(//div[contains(text(),'ESS')])[1]")
    }
    get icondelete(){
        return $("(//i[@class='oxd-icon bi-trash'])[1]")
    }
    get btndelete(){
        return $("//button[normalize-space()='Yes, Delete']")
    }
    get btnProfile () {
        return $("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']");
    }
    get btnLogout () {
        return $("//a[normalize-space()='Logout']");
    }
    
    async createUser(username, password){
        await this.tabadmin.click()
        await this.btnadd.click()
        await this.selectrole.click()
        await this.selectESS.click()
        await this.selectstatus.click()
        await this.selectenable.click()
        await this.inputUsername.setValue(username)
        await this.inputEmployeename.setValue("b")
        await browser.pause(3000)
        store = await this.selectEmployee.getText();
        console.log("employee name",store)
        await this.selectEmployee.click()
        await this.inputPassword.setValue(password)
        await this.inputconfirmPassword.setValue(password)
        await this.btnsave.click()
        await browser.pause(3000)
    }
    async editUser(username){
        await this.tabadmin.click()
        await this.inputUsername.setValue(username)
        await this.selectrole.click()
        await this.selectESS.click()
        await this.inputEmployeename.setValue(store)
        await browser.pause(3000)
        await this.selectEmployee.click()
        await this.selectstatus.click()
        await this.selectenable.click()
        await this.btnsave.click()
        await this.iconedit.click()
        await this.essenable.click() 
        await this.selectAdmin.click()
        await browser.pause(3000)
        await this.btnsave.click()
        await browser.pause(3000)
     }
     async adminVerify(){
        await this.tabadmin.click()
     }
     async deleteUser(username){
        await this.tabadmin.click()
        await this.inputUsername.setValue(username)
        await this.selectrole.click()
        await this.selectAdmin.click()
        await this.inputEmployeename.setValue(store)
        await browser.pause(3000)
        await this.selectEmployee.click()
        await this.selectstatus.click()
        await this.selectenable.click()
        await this.btnsave.click()
        await this.icondelete.click()
        await this.btndelete.click()
     }
    async logout(){
        await this.btnProfile.click()
        await this.btnLogout.click()
    }

}

module.exports = new DashboardPage();

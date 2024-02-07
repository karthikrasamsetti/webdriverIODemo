const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const RequestPasswordResetCodePage = require('../pageobjects/requestPasswordResetCode.page')
const dashboardPage = require('../pageobjects/dashboard.page')


describe('verify forgot your password interface',()=>{
    it('Password should be verified.user able to click on forgot your password.', async()=>{
        await LoginPage.open()
        await expect(LoginPage.logo).toBeExisting()
        await LoginPage.forgotpassword()
    })
})
describe('password reset',()=>{
    it('If the user forgot password they have to select reset password.They change their password and login with new credentials.', async()=>{
        await LoginPage.open()
        await expect(LoginPage.logo).toBeExisting()
        await LoginPage.forgotpassword()
        await RequestPasswordResetCodePage.resetpassword('Admin')
        await expect(RequestPasswordResetCodePage.setpasswordreset).toBeExisting()
    })
})
describe('new login functionality',()=>{
    it('user should be logged in username and new password', async()=>{
        await LoginPage.open()
        await expect(LoginPage.logo).toBeExisting()
        await LoginPage.login('Admin', 'admin123')
        await dashboardPage.logout()
    })
})
describe('create user',()=>{
    it('to create user',async()=>{
        await LoginPage.open()
        await expect(LoginPage.logo).toBeExisting()
        await LoginPage.login('Admin', 'admin123')
        await dashboardPage.createUser('karthikraja', 'admin123')
        await dashboardPage.logout()
    })
})

describe('Make user an admin',()=>{
    it('create user and make that user admin ',async()=>{
        await LoginPage.open()
        await expect(LoginPage.logo).toBeExisting()
        await LoginPage.login('Admin', 'admin123')
        await dashboardPage.editUser('karthikraja')
        await dashboardPage.logout()
    })
})
describe('Verify that new user have all permisssions as admin',()=>{
    it(' Check new user have all permissions as admin.',async()=>{
        await LoginPage.open()
        await expect(LoginPage.logo).toBeExisting()
        await LoginPage.login('karthikraja', 'admin123')
        await expect(dashboardPage.tabadmin).toBeExisting()
        await dashboardPage.adminVerify()
        await expect(dashboardPage.btnadd).toBeExisting()
        await dashboardPage.logout()
    })
})
describe('delete user',()=>{
    it('to delete user',async()=>{
        await LoginPage.open()
        await expect(LoginPage.logo).toBeExisting()
        await LoginPage.login('Admin', 'admin123')
        await expect(dashboardPage.tabadmin).toBeExisting()
        await dashboardPage.deleteUser('karthikraja')
        await dashboardPage.logout()
    })
})

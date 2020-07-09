module.exports = function() {

    this.Given(/^I am on Zoro Login Page$/,function(){
        return page.zoroLoginPage.navigateToZoroLoginPage();
    })

    this.When(/^I enter a valid login detail$/, function(){
        return page.zoroLoginPage.singInToZoro('test150420@gmail.com', '9999999')
    })

    this.Then(/^I can see user is successfully logged in$/, function(){
        myAccountElmFound_obj = page.zoroHomePage.verifyIfMyAccountElementIsPresent()
        return myAccountElmFound_obj.then(function(value){
            expect(value).to.be.true
        })
    })

    this.When(/^I enter an invalid login detail$/, function(){
       return page.zoroLoginPage.singInToZoro('test123_test@test.com', 'abcdef')
    })

    this.Then(/^I can see invalid login message "(.*)"$/, function(expected_message){
        actual_message_obj = page.zoroLoginPage.getInvalidLoginError(expected_message)
        return actual_message_obj.then(function(value){
            expect(value).to.include(expected_message);

        })
    })

    this.When(/^I enter email in wrong format$/, function(){
        return page.zoroLoginPage.singInToZoro('test150420', '9999999')
    })

    this.Then(/^I can see invalid email message "(.*)"$/, function(expected_message){
        actual_message_obj = page.zoroLoginPage.getEmailErrorText()
        return actual_message_obj.then(function(value){
            expect(value).to.include(expected_message);
        })
    })

    this.When(/^I enter detail without email$/, function(){
        return page.zoroLoginPage.singInToZoro('', pwd='9999999')
    })

    this.Then(/^I can see email required message "(.*)"$/, function(expected_message){
         actual_message_obj = page.zoroLoginPage.getEmailErrorText()
         return actual_message_obj.then(function(value){
            expect(value).to.include(expected_message);

         })
    })

    this.When(/^I enter detail without password$/, function(){
        return page.zoroLoginPage.singInToZoro(user_name='test123_test@test.com')
    })

    this.Then(/^I can see password required message "(.*)"$/, function(expected_message){
         actual_message_obj = page.zoroLoginPage.getPasswordErrorText()
         return actual_message_obj.then(function(value){
             expect(value).to.include(expected_message);
         })
    })

    this.When(/^I click forgot password link$/, function(){
        return page.zoroLoginPage.clickForgotPassword()
    })

    this.Then(/^I am on forgot password page$/, function(){
         actual_message_obj = page.zoroForgotPasswordPage.getForgotPasswordTitle()
         expected_message = 'Reset Password'
         return actual_message_obj.then(function(value){
            expect(value).to.include(expected_message);

         })
    })
};
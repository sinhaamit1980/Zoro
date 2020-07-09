module.exports= {
    url: 'http://www.zoro.co.uk/login',

    elements: {
        userName: by.css('div.loginBox__login input[name="email"]'),
        password: by.css('div.loginBox__login input[name="password"]'),
        loginBtn: by.css('div.loginBox__login div.loginButtonContainer button'),
        invalidLoginMessage: by.css('div.loginBox__login'),
        emailMissingMessage: by.css('div#undefined_tooltip div[data-e2e="emailError"]'),
        passwordMissingMessage: by.css('div#undefined_tooltip div[data-e2e="passwordError"]'),
        forgotPasswordLink: by.css('a[href="/forgot-password"]')

    },


    navigateToZoroLoginPage: function(){
        return driver.get(this.url);
    },

    enterUserName: function(user_name){
        return driver.findElement(this.elements.userName).sendKeys(user_name);
    },

    enterPassword: function(password){
         return driver.findElement(this.elements.password).sendKeys(password);
    },

    clickLogin: function(){
        return driver.findElement(this.elements.loginBtn).click();
    },

    clickForgotPassword: function(){
        return driver.findElement(this.elements.forgotPasswordLink).click();
    },

    getInvalidLoginError: function(expected_message){
        let invalidLoginMessage_elm = this.elements.invalidLoginMessage
        driver.sleep(10000)
        return driver.wait(until.elementsLocated(invalidLoginMessage_elm), 10000)
            .then(function () {
                return driver.findElement(invalidLoginMessage_elm)
                    .getText().then((err_text) => {
                        return err_text;
                        })
                   });
    },

    getEmailErrorText: function(){
        let email_error_elm = this.elements.emailMissingMessage
        return driver.wait(until.elementsLocated(email_error_elm), 10000)
            .then(function () {
                return driver.findElement(email_error_elm)
                    .getText().then((err_text) => {
                        return err_text;
                        })
                   });
    },

    getPasswordErrorText: function(expected_message){
        let pwd_err_elem = this.elements.passwordMissingMessage
        return driver.wait(until.elementsLocated(pwd_err_elem), 10000)
            .then(function () {
                return driver.findElement(pwd_err_elem)
                    .getText().then((err_text) => {
                        return err_text;
                        })
                   });
    },

    singInToZoro(user_name ='', pwd =''){
        this.enterUserName(user_name)
        this.enterPassword(pwd)
        this.clickLogin()
    }

};
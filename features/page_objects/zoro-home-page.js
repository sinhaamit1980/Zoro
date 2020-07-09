module.exports= {
    url: 'http://www.zoro.co.uk',

    elements: {
        welcomeMessage: by.css('div.ToastWrapper div.ToastWrapper_ToastMessage'),
        myAccountBtn: by.id('HeaderMenu.goToMyAccountButton'),
        logoutLink: by.id('HeaderMenu.logout')
    },

    getLoginSuccessMessage: function(expected_message){
        let welcomeMessage_elm = this.elements.welcomeMessage
        return driver.wait(until.elementsLocated(welcomeMessage_elm), 120000)
            .then(function () {
                return driver.findElement(welcomeMessage_elm)
                    .getText().then((err_text) => {
                        return err_text;
                        })
                   });
    },

    clickMyAccountMenu: function(){
        return driver.findElement(this.elements.myAccountBtn).click();
    },

    verifyIfMyAccountElementIsPresent(){
       let myAccountElm = this.elements.myAccountBtn
       driver.wait(until.elementsLocated(myAccountElm),120000)
       return driver.findElement(myAccountElm).isDisplayed()

    },

    logUserOut: function(){
        if(driver.findElement(this.elements.myAccountBtn)){
            clickMyAccountMenu
            return driver.findElement(this.elements.logoutLink).click();
        }
    }

};


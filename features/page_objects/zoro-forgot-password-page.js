module.exports= {
    url: '/forgot-password',

    elements: {
        forgotPasswordTitle: by.css('div.ForgotPasswordScreen h1'),
        emailBox: by.name('email'),
        forgotPasswordSubmitBtn: by.css('div.forgotPasswordForm-submitButton')
    },

    getForgotPasswordTitle(){
        let forgotPasswordTitle_elm = this.elements.forgotPasswordTitle
        return driver.wait(until.elementsLocated(forgotPasswordTitle_elm), 10000)
            .then(function () {
                return driver.findElement(forgotPasswordTitle_elm)
                    .getText().then((err_text) => {
                        return err_text;
                        })
                   });
    }
};

class LoginPage {

constructor() {

//data
    this.validUserName = 'grand.quivara@gmail.com';
    this.validPassword  = 'EcommercePracticeSite22'
    this.invalidPassword =  'InvalidPassword'
    this.sampleEmailAddr = 'PasswordResetEmail@Test.com'

    this.UserNameField = '#email.input-text'
    this.PasswordField = '#pass.input-text'
    this.signInbutton = '#send2.action.login.primary'
    this.signedInLink = 'span.logged-in';
    
    this.emailErrorMsg = '#email-error';
    this.passwordErrorMsg =   '#pass-error';
    this.signInerrorMsg = '.message-error.error.message'
    
    this.forgotPasswordLink = '.action.remind';
    this.forgotPasswordForm =   '.form.password.forget';
    this.userNameorPswdLoginError = 'div.message-error.error.message';

    this.pswdResetButton = '.action.submit.primary'
    this.PswdResetEmailAddrField = '#email_address'
    
    // messages
    this.incorrectSigninMsg = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.';
    this.loginAndPswdRequiredMsg =  'A login and a password are required.'
    this.loginPagePartURL = 'customer/account/login/';
    this.pswdResetLinkSentMsg ='you will receive an email with a link to reset your password.'
 
}

//Action methods

verifyLoginPage()
{
    cy.url().should('include', this.loginPagePartURL);
}

enterUserName(userName)
{
    cy.get(this.UserNameField).type(userName);
}

enterPassword(password)
{
    cy.get(this.PasswordField).first().type(password);
}

enterBlankSignInDetails()
    {
    cy.get(this.UserNameField).clear();

    cy.get(this.PasswordField).first().clear();
}

SubmitLogin()
{
    cy.get(this.signInbutton).first().click();
}

PressEnter()
{
    cy.get(this.PasswordField).first().type ('{Enter}')
}

clickForgotPswdLink()
{
    cy.get(this.forgotPasswordLink).click();
}

enterEmailAddress()
{    
    cy.get(this.PswdResetEmailAddrField)
    .type(this.sampleEmailAddr);
}

clickPasswordReset()
{ 
    cy.get(this.pswdResetButton).first().click();
}

//  LoginToSite()
// {
//     clickLoginLink();
//     enterUserName(this.validUserName);
//     enterPassword(this.validPassword);
//     PressEnter();
//     verifySignedIn();
// }

// Verification methods

verifySignedIn()
{
    cy.get(this.signedInLink, { timeout: 15000 })
}

verifyNotSignedIn()
{
    cy.get(this.signedInLink).should('not.be.visible');
}

verifyIncorrectSignInMessage()
{
    cy.contains(this.incorrectSigninMsg)
      .should('be.visible');
}

verifyLoginAndPswdRequiredMessage()
{
    cy.contains(this.loginAndPswdRequiredMsg).should('be.visible',{timeout:15000});     
}

verifyForgotPswdForm()
{
cy.get(this.forgotPasswordForm).should('be.visible');
}

verifyPasswordResetMsg()
{
    cy.contains(this.pswdResetLinkSentMsg).should('be.visible');
}

veryifyPasswordResetMsgContainsEmailAddr()
{
    cy.contains(this.sampleEmailAddr).should('be.visible');
}


// getEmailAddress() {
//     return (Cypress.env('user_name'));
// }

// getPswd() {
//     return (Cypress.env('user_password'));
// }

// getEmailAddressField (){
//     return cy.get(this.EmailFieldLocator, { timeout: 30000 })
// }


}

export default LoginPage
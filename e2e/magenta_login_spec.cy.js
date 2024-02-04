
//   ////  ------------------------    Begin Tests ----------------------------------------------


// Import from Page Object pages

import HomePage from "../pages/homepage.js"
const homePage = new HomePage();

import LoginPage from "../pages/loginpage.js"
const loginPage = new LoginPage();



describe('Homepage - Navigate to Homepage', () => {
  it("Site Opens successfully", () => {

homePage.navigateToSite();

//verify URL directs to correct page
homePage.veryifySiteNavigation();
  
  })
})


describe('Homepage - Check Main Elements on Homepage', () => {
  it("Main Elements present", () => {

    homePage.navigateToSite();

    //verify URL directs to correct page
    homePage.veryifySiteNavigation();

    // Check presence of main site logo 
    homePage.verifyVisibilityOfElement(homePage.storeLogo);

    // Check presence of Login link
    homePage.verifyVisibilityOfElement(homePage.loginLink);

      // Check presence of Shopping cart link
    homePage.verifyVisibilityOfElement(homePage.shoppingCart);

    
  })
})

describe('Login Page - Navigate to Login Page ', () => {
  it("Navigation successful", () => {

    homePage.navigateToSite();
    homePage.veryifySiteNavigation();

    homePage.clickLoginLink();
    loginPage.verifyLoginPage();


  })
})


describe('Login Page - Sign in using SUBMIT button', () => {
  it("Verify Signed In", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();

homePage.clickLoginLink();
loginPage.enterUserName(loginPage.validUserName);
loginPage.enterPassword(loginPage.validPassword);
loginPage.SubmitLogin();
loginPage.verifySignedIn();

  })
})

describe('Login Page - Sign in using ENTER', () => {
  it("Verify Signed In", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();
homePage.clickLoginLink();
loginPage.enterUserName(loginPage.validUserName);
loginPage.enterPassword(loginPage.validPassword);
loginPage.PressEnter();
loginPage.verifySignedIn();

  })
})

describe('Login Page - Sign in with invalid password', () => {
  it("Verify NOT signed in", () => {


homePage.navigateToSite();
homePage.veryifySiteNavigation();

homePage.clickLoginLink();
loginPage.enterUserName(loginPage.validUserName);
loginPage.enterPassword(loginPage.invalidPassword);
loginPage.SubmitLogin();
//Verify the user is NOT signed in
loginPage.verifyNotSignedIn();


  })
})

describe('Login Page - Sign in with invalid password', () => {
  it("Verify 'Incorrect sign-in' message", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();

homePage.clickLoginLink();
loginPage.enterUserName(loginPage.validUserName);
loginPage.enterPassword(loginPage.invalidPassword);
loginPage.SubmitLogin();


loginPage.verifyIncorrectSignInMessage();

  })
})

describe('Login Page - Sign in with blank credentials', () => {
  it("Verify 'Username/Pswd required' message", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();

homePage.clickLoginLink();
loginPage.enterBlankSignInDetails();
loginPage.SubmitLogin();

loginPage.verifyLoginAndPswdRequiredMessage();

  })
})


describe('Login Page - Click Forgot Password button', () => {
  it("Password Reset form appears", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();

homePage.clickLoginLink();
loginPage.verifyLoginPage();

loginPage.clickForgotPswdLink();
loginPage.verifyForgotPswdForm();

  })
})

describe('Password Reset Page - Click Password Reset button', () => {
  it("Password Reset Link sent Msg appears", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();

homePage.clickLoginLink();
loginPage.verifyLoginPage();

loginPage.clickForgotPswdLink();
loginPage.verifyForgotPswdForm();

loginPage.enterEmailAddress();
loginPage.clickPasswordReset();

loginPage.verifyPasswordResetMsg();
loginPage.veryifyPasswordResetMsgContainsEmailAddr();

  })
})





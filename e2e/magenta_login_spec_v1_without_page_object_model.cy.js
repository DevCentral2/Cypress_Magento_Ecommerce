
//   ////  ------------------------    Begin Tests ----------------------------------------------



const baseURL =     "https://magento.softwaretestingboard.com/";
const URLToVerify =  baseURL;

const storeLogo = '[aria-label="store logo"]';
const loginLink = 'li.authorization-link';
const shoppingCart = 'a.action.showcart'

const UserNameField = '#email.input-text'
const PasswordField = '#pass.input-text'
const signInbutton = '#send2.action.login.primary'

const validUserName = 'grand.quivara@gmail.com';
const validPassword  = 'EcommercePracticeSite22'
const invalidPassword =  'InvalidPassword'
const signedInLink = 'span.logged-in';


const emailErrorMsg = '#email-error';
const passwordErrorMsg =   '#pass-error';
const forgotPassworButton = 'a.action.remind'
const forgotPasswordForm =   '.form.password.forget';
const userNameorPswdLoginError = 'div.message-error.error.message';
const signInerrorMsg = 'div.message-error.error.message'
const incorrectSigninMsg = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.';



describe('Homepage - Navigate to Homepage', () => {
  it("Site Opens successfully", () => {

    cy.visit( baseURL)
    cy.url().should('include', URLToVerify);
  
  })
})


describe('Homepage - Check Homepage elements', () => {
  it("Main Elements present", () => {

    cy.visit( baseURL)

    // Check presence of main site logo 
    cy.get(storeLogo)
       .should('be.visible')
    // Check presence of  Login link
    cy.get(loginLink)
        .should('be.visible')
      // Check presence of Shopping cart link
    cy.get(shoppingCart)
        .should('be.visible')
    

  })
})

describe('Homepage - Can Navigate to Login Page ', () => {
  it("Navigation successful", () => {

    cy.visit( baseURL)
    cy.get(loginLink).first()
      .click();
    cy.url().should('include', 'customer/account/login/');
   
  })
})


describe('Homepage - Sign in with SUBMIT button', () => {
  it("Sign in successful", () => {

    cy.visit( baseURL)
    cy.get(loginLink).first()
      .click();
    cy.url()
      .should('include', 'customer/account/login/');

    cy.get(UserNameField)
        .type(validUserName)
    cy.get(PasswordField)
        .first()
        .type(validPassword)
    cy.get(signInbutton).first()
        .click();

    //verify Sign In
    cy.get(signedInLink, {timeout:30000})
        .should('be.visible');

  })
})

describe('Homepage - Sign in with ENTER', () => {
  it("Sign in successful", () => {

    cy.visit( baseURL)
    cy.get(loginLink)
      .first()
      .click();
    cy.url()
      .should('include', 'customer/account/login/');

    cy.get(UserNameField)
      .type(validUserName)
    cy.get(PasswordField)
      .first()
      .type(validPassword)
      .type('{enter}')
    
      //verify Sign In
      cy.get(signedInLink)
      // .should('be.visible')

  })
})

describe('Homepage - Sign in with invalid password', () => {
  it("Verify NOT signed in", () => {

    cy.visit( baseURL)
    cy.get(loginLink).first()
      .click();
    cy.url()
      .should('include', 'customer/account/login/');

    cy.get(UserNameField)
        .type(validUserName)
    cy.get(PasswordField)
        .first()
        .type(invalidPassword)
    cy.get(signInbutton).first()
        .click();

    //verify Sign In
    cy.get(signedInLink)
        .should('not.be.visible');


  })
})

describe('Homepage - Sign in with invalid password', () => {
  it("Verify Incorrect sign-in message", () => {

    cy.visit( baseURL)
    cy.get(loginLink).first()
      .click();
    cy.url()
      .should('include', 'customer/account/login/');

    cy.get(UserNameField)
        .type(validUserName)
    cy.get(PasswordField)
        .first()
        .type(invalidPassword)
    cy.get(signInbutton).first()
        .click();

        cy.get(signInerrorMsg)
        .should('be.visible');

    cy.contains(incorrectSigninMsg)
      .should('be.visible');

  })
})

describe('Homepage - Click Forgot Password button', () => {
  it("Password reset form appears", () => {

    cy.visit( baseURL)
    cy.get(loginLink).first()
      .click();

    cy.url()
      .should('include', 'customer/account/login/');

    cy.get(forgotPassworButton).first()
      .click();

    cy.get(forgotPasswordForm)
        .should('be.visible');

  })
})





// await homePage.clickLoginButton();
// await loginPage.enterUserName(validUserName);
// await loginPage.enterPassword(validPassword);
// await loginPage.clickLoginButton();

// //Assertions
// await expect(loginPage.incorrectSigninMsg).toBeHidden();  
// await expect(homePage.loggedInLink).toBeVisible(); 

// Playwright equivalent

// // This opens the website before each test, which avoids haveing to repeat this at the start of every test
// test.beforeEach(async ({ page }) => {

//   await page.goto(baseURL)
  
// });

// test('Homepage - Navigate to Homepage - Expected URL appears', async ({ page }) => {

//   const homePage = new HomePage(page);
//   //Assertions:

//     //check URL directs to correct page
//     expect(page).toHaveURL(URLToVerify);

//     //check homepage main element is present
//      await expect(homePage.mainHomepageElement).toBeVisible();

// });




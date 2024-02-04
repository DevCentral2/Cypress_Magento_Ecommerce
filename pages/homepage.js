class HomePage {

constructor() {

this.baseURL =     'https://magento.softwaretestingboard.com/';
this.storeLogo = '[aria-label="store logo"]';
this.loginLink = 'li.authorization-link';
this.shoppingCart = 'a.action.showcart'

}

navigateToSite()
{
  this.waitBeforeTest(3000);
  cy.visit(this.baseURL);       // uses  BaseURL from cypress.config.js as the default URL
}

// navigateToSiteFromBaseUURL
// {
//     //cy.visit('/');       // uses  BaseURL from cypress.config.js as the default URL      
// }

veryifySiteNavigation()
{
    cy.url().should('include', this.baseURL);
}

// veryifySiteNavigation(site)
// {
//     cy.url().should('include', site);
// }


verifyVisibilityOfElement (elementCss)
{
    cy.get(elementCss,{timeout: 30000 })
    .should('be.visible')
}

clickLoginLink()
{  cy.get(this.loginLink).first().click();

}

waitBeforeTest(mSeconds)

{  cy.wait(mSeconds) // This is needed to allow a bit of time for the application to 'settle' between tests
  // otherwise the end-to-end test sometimes fails.}
}

}
export default HomePage
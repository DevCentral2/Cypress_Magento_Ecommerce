// Functions


//Functions must be both exported and imported
export default {
  verifyCurrentURL, 
};


  export function verifyCurrentURL(partUrl)
  {
    const baseUrl = Cypress.config('baseUrl');
    
    // assert that the current URL contains the base URL and expected sub-part
    cy.url().should('contain', baseUrl );
    cy.url().should('contain', partUrl );
    return
  }

  


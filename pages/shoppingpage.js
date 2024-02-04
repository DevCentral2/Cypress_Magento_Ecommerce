class ShoppingPage {

constructor() {

  this.timeOutForClick = 30000;
  this.timeToWaitForVisibility =60000;


   this.shippingPageLogo = 'Shipping';
   this.shoppingCartLogo = 'Shopping Cart';
   this.searchEntireStore =   'Search entire store here'
   this.quantityField = 'Qty["spinbutton"]';

   // confirmation or warning messages
   this.thankYouForYourPurchase = 'Thank you for your purchase!';
   this.quantityExceedsMaxPurchase = 'The maximum you may purchase is 10000.';
   this.quantityExceededInShoppingCart = 'The requested qty exceeds the maximum qty allowed in shopping cart'
   this.quantityNotAvailable = 'The requested qty is not available'
   this.youHaveNoItemsInCart = 'You have no items in your shopping cart.';

   
}


 addItemToBagAndGoToCheckOut (
  itemToPurchase, 
  size, 
  colour) {

  selectItemChooseItemPage(itemToPurchase);
  SelectItemSpecifics(size, colour);
  addToCart();
  clickShoppingCartLink();

}

selectItemTypeFromMenus (
  gender,
  topsBottoms,
  typeOfClothing )
{
cy.get('a[role="menuitem"]').contains(gender).should('be.visible')
cy.get('a[role="menuitem"]').contains(gender).trigger('mouseover')
cy.get('a[role="menuitem"]').contains(topsBottoms).should('be.visible')
cy.get('a[role="menuitem"]').contains(topsBottoms).trigger('mouseover')
cy.get('a[role="menuitem"]').contains(typeOfClothing).should('be.visible')
cy.get('a[role="menuitem"]').contains(typeOfClothing).click()

}

selectFirstItem(){
  cy.get('.product-image-photo').first().click();
}

selectItemChooseItemPage(itemToPurchase){
  cy.get('.product-item-link').contains(itemToPurchase).first().click();
}

SelectItemSpecifics(size, colour)
{
  //pre-conditions:
  cy.get('#product-options-wrapper').should('be.visible');

  cy.wait(1000);

  cy.get('[option-label=' + '"' + size + '"]' )
  .click();

  cy.get('[option-label=' + '"' + colour + '"]' )
  .click();
}

addToCart(){
  cy.get('#product-addtocart-button').click({timeout:this.timeOutForClick});
}

clickShoppingCartLink(){
  
  cy.get('.counter-number').should('be.visible');
  cy.contains('shopping cart',{timeout:this.timeToWaitForVisibility}).click();
}

clickProceedToCheckout()
{
   cy.wait(2000);
   cy.get ('li > button.action.primary.checkout',{timeout: 30000})
   .should('be.enabled',{timeout: 30000})
   .click();
}

clickNextButtonOnOrderPage(){
  cy.get('.button.action.continue.primary', {timeout: 30000})
  .should('be.enabled', {timeout: 30000})
  .click();   //{force:true});
}

clickPlaceOrder(){

  // make sure this page is fully loaded before pressing the Place Order button
  cy.get('tr.grand.totals',{timeout:30000}).should('be.visible');

  cy.get('.button.action.continue.primary',{timeout: 30000})
  .should('be.enabled',{timeout: 30000})
  // .click(); //{force: true });
  .click({force: true });
}

 SetQuantity(quantity)
{
  cy.get('input#qty.input-text.qty')
  .clear()
  .type(quantity);
 
}

clickOrderNumber(){
cy.get('.order-number').click();
}

   searchByProductId (productId){  
  
    cy.get ('#search.input-text')
      .type(productId + '{Enter}')

  
}



verifyShippingPageUrl()
{
  cy.url({timeout: 30000}).should('include', 'checkout/#shipping/');
}

verifyShippingPageMainElement()
{
  cy.get ('#shipping.checkout-shipping-address', {timeout: 30000}).should('be.visible');
}

verifyShoppingCartPageUrl()
{
   cy.url({timeout: 30000}).should('include', 'checkout/cart/');
}

verifyShoppingCartPageTitle()
{
   cy.get ('.page-title').contains('Shopping Cart');
}

verifyPaymentPage()
{
    cy.url({timeout: 30000}).should('include', 'checkout/#payment/');
}
  
 verifyOrderComplete ()
{
   cy.get ('.title').contains('Order Summary', {timeout: 30000});
 
}

verifyThankYouForYourPurchase ()
{
   cy.get ('.page-title').contains(this.thankYouForYourPurchase, {timeout: 30000});
 
}

veryifyOrderTotalIsCorrect(itemPrice)
{  
 cy.get('td.amount>.price').contains(itemPrice);
}

VerifyMaxQuantityExeededMsg()
{
  cy.contains(this.quantityExceedsMaxPurchase ).should('be.visible',{timeout:this.timeToWaitForVisibility});
}

VerifyQuanityNotAvailableMsg()
{
  cy.contains(this.quantityNotAvailable).should('be.visible');
}

verifyShoppingCartIsEmpty()
{
  cy.get('.counter.qty.empty');
}

verifyCorrectItemOrdered(itemToPurchase){
  cy.get('.product-item-name', {timeout:this.timeToWaitForVisibility})
  .contains(itemToPurchase);
  
  }


  // alternate click methods:
  // cy.get ('button.action.primary.checkout').type('{Enter}', {force: true });
  // cy.get('button.action.primary.checkout').trigger("click");


}

export default ShoppingPage
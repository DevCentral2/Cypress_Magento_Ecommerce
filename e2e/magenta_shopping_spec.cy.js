


//Import the page objects from the pageobject files so that we can create an instance of them


import HomePage from "../pages/homepage.js"
const homePage = new HomePage();

import LoginPage from "../pages/loginpage.js"
const loginPage = new LoginPage();

import ShoppingPage from "../pages/shoppingpage.js"
const shoppingPage = new ShoppingPage();

// import WishListPage from "../pages/wishlistpage.js"
// const wishListPage = new WishListPage();


// Data
const maximumQuantity = 10000;
let highQuanity=9000;


//  //  ------------------------    Begin Tests ----------------------------------------------


// This #beforeEach' opens the website before each test,
// avoiding having to repeat this at the start of every test

// beforeEach(() => {
// })


// Data

let gender = 'Women';
let topsBottoms = 'Tops';
let typeOfClothing = 'Tees';
let itemToPurchase = 'Desiree Fitness Tee';
let size = 'M';
let colour = 'Black';
let itemPrice ='$24.00';





describe('Shopping Cart: Add Item to Shopping Cart - Check Navigtion', () => {
    it("Taken to Shopping cart", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();

shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
shoppingPage.selectItemChooseItemPage(itemToPurchase);
shoppingPage.SelectItemSpecifics(size, colour);
shoppingPage.addToCart();
shoppingPage.clickShoppingCartLink();

//Verification
shoppingPage.verifyShoppingCartPageUrl();
shoppingPage.verifyShoppingCartPageTitle();
})
});


describe('Shopping Cart:: Add Item to Shopping Cart - Proceed to Checkout - Check Navigation ', () => {
    it("Taken to Shipping Page", () => {
 
homePage.navigateToSite();
homePage.veryifySiteNavigation();

shoppingPage.selectItemTypeFromMenus (gender,topsBottoms,typeOfClothing);
shoppingPage.selectItemChooseItemPage(itemToPurchase);
shoppingPage.SelectItemSpecifics(size, colour);

shoppingPage.addToCart();
shoppingPage.clickShoppingCartLink();
shoppingPage.clickProceedToCheckout();

// Verification
shoppingPage.verifyShippingPageMainElement();

})
});


describe('Shopping Cart: Add Item to Cart, Proceed to Checkout, Check Order Total ', () => {
  it("Order Total is correct'", () => {


homePage.navigateToSite();
homePage.veryifySiteNavigation();

shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
shoppingPage.selectItemChooseItemPage(itemToPurchase);
shoppingPage.SelectItemSpecifics(size, colour);

shoppingPage.addToCart();
shoppingPage.clickShoppingCartLink();
shoppingPage.veryifyOrderTotalIsCorrect(itemPrice);

})
});



  describe('Shopping Cart: Set quantity to maximum quantity plus one, Click Add to Cart - Check Message', () => {
    it(" Msg Displayed: Quantity exceeds maximum allowed'", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();

shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
shoppingPage.selectItemChooseItemPage(itemToPurchase);
shoppingPage.SelectItemSpecifics(size, colour);

shoppingPage.SetQuantity(maximumQuantity + 1);
shoppingPage.addToCart();

  // Verification
shoppingPage.VerifyMaxQuantityExeededMsg()

})
});

describe('Shopping Cart:  Set quantity to amount exceeding amount available, Click Add to Cart - Check Message', () => {
  it(" Msg Displayed: Requested Quantity not available'", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();

shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
shoppingPage.selectItemChooseItemPage(itemToPurchase);
shoppingPage.SelectItemSpecifics(size, colour);

shoppingPage.SetQuantity(highQuanity);
shoppingPage.addToCart();

shoppingPage.VerifyQuanityNotAvailableMsg()

})
});

describe('Shopping Cart:  Set quantity to maximum quantity + 1, Click Add to Cart - Check Cart is empty', () => {
  it(" Verify Shopping Cart is empty'", () => {

homePage.navigateToSite();
homePage.veryifySiteNavigation();

shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
shoppingPage.selectItemChooseItemPage(itemToPurchase);
shoppingPage.SelectItemSpecifics(size, colour);

shoppingPage.SetQuantity(maximumQuantity - 1);
shoppingPage.addToCart();

// Verification
shoppingPage.verifyShoppingCartIsEmpty();

})
});



describe('End-to-End: Log In, Add Item to ShoppingCart, Checkout - Check Order status ', () => {
  it("Order succeeds'", () => {
    
homePage.navigateToSite();
homePage.clickLoginLink();

loginPage.enterUserName(loginPage.validUserName);
loginPage.enterPassword(loginPage.validPassword);
loginPage.PressEnter();
loginPage.verifySignedIn();

shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
shoppingPage.selectItemChooseItemPage(itemToPurchase);
shoppingPage.SelectItemSpecifics(size, colour);

shoppingPage.addToCart();
shoppingPage.clickShoppingCartLink();

shoppingPage.clickProceedToCheckout();
shoppingPage.clickNextButtonOnOrderPage();
shoppingPage.clickPlaceOrder();

shoppingPage.verifyOrderComplete();

})
});




describe('End-to-End: Log In, Add Item to ShoppingCart, Checkout - Verify item ordered', () => {
  it("Order Shows correct item'", () => {
    
homePage.navigateToSite();
homePage.clickLoginLink();

loginPage.enterUserName(loginPage.validUserName);
loginPage.enterPassword(loginPage.validPassword);
loginPage.PressEnter();
loginPage.verifySignedIn();

shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
shoppingPage.selectItemChooseItemPage(itemToPurchase);
shoppingPage.SelectItemSpecifics(size, colour);

shoppingPage.addToCart();
shoppingPage.clickShoppingCartLink();

shoppingPage.clickProceedToCheckout();
shoppingPage.clickNextButtonOnOrderPage();
shoppingPage.clickPlaceOrder();

shoppingPage.verifyOrderComplete();
// shoppingPage.verifyThankYouForYourPurchase ();
// shoppingPage.clickOrderNumber();
shoppingPage.verifyCorrectItemOrdered(itemToPurchase);

})
});




// describe('End-to-End: Log In, Add random item to Cart via search ', () => {
//   it(" Checkout succeeds'", () => {

// let prpoductsAvailable = 
//     ['24-WG01', '24-WG03', '24-WG09','24-MG01',
//      '24-MG02', '24-MG03', '24-MG04', '24-MG05', ];

// const randomInteger =  (Math.floor(Math.random() * prpoductsAvailable.length));
    
// homePage.navigateToSite();
// homePage.clickLoginLink();

// loginPage.enterUserName(loginPage.validUserName);
// loginPage.enterPassword(loginPage.validPassword);
// loginPage.PressEnter();
// loginPage.verifySignedIn();

// let itemSelected = prpoductsAvailable[randomInteger];

// // cy.log (randomInteger, itemSelected)

// shoppingPage.searchByProductId(itemSelected);
// shoppingPage.selectFirstItem();

// shoppingPage.addToCart();
// shoppingPage.clickShoppingCartLink();

// shoppingPage.clickProceedToCheckout();
// shoppingPage.clickNextButtonOnOrderPage();
// shoppingPage.clickPlaceOrder();

// shoppingPage.verifyOrderComplete();

// })
// });





//---------------------------------------------------------------------
//-----------------------------------------------------------------------------

// Tests remaining to complete


// test('Add Item, Filter by Price - Correct result displayed', async ({ page }) => {

//   const filterType = 'Price'
//   const filter = '$20.00 - $29.99';    //partial match
//   const expectedNumberOfItems = '8';

//   const shoppingPage = new ShoppingPage(page);

// shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
// shoppingPage.clickFilterType(filterType);
// shoppingPage.clickFilter(filter);

//    // Verification
//  shoppingPage.verifyFilterCorrectResult(expectedNumberOfItems);


// });

// test('Add Item, Filter by Sale - Correct result displayed', async ({ page }) => {

//   const filterType = 'Sale'
//   const filter = 'Yes';
//   const expectedNumberOfItems = '3';

//   const shoppingPage = new ShoppingPage(page);

// shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
// shoppingPage.clickFilterType(filterType);
// shoppingPage.clickFilter(filter);

//    // Verification
//  shoppingPage.verifyFilterCorrectResult(expectedNumberOfItems);


// });




// // test('End-to-End: Log In, Add random item to Cart via search, Checkout succeeds', async ({ page }) => {

// let itemsAvailable = ['24-WG01', '24-WG03', '24-WG09',
// '24-MG01', '24-MG02', '24-MG03', '24-MG04', '24-MG09'];


// // homePage.clickLoginButton();

// // loginPage.enterUserName(validUserName);
// // loginPage.enterPassword(validPassword);
// // loginPage.clickLoginButton();

// //   let randomInteger = randomInt(0,itemsAvailable.length);

// const randomInteger = '1' + Math.floor(Math.random() * 10)
// //   let itemSelected = itemsAvailable[randomInteger];

// // shoppingPage.searchByProductId(itemSelected);
// // shoppingPage.selectFirstItem();

// // shoppingPage.addToCart();
// // shoppingPage.clickShoppingCartLink();

// // shoppingPage.clickProceedToCheckout();
// // shoppingPage.clickNextButtonOnOrderPage();
// // shoppingPage.clickPlaceOrder();

// // shoppingPage.verifyOrderComplete();

// // });

// test('Add Item to Wishlist, Add item to wishlist and Verify Added item, Delete from Wishlist and verify item deleted', async ({ page }) => {


//   let gender = 'Women';
//   let topsBottoms = 'Tops';
//   let typeOfClothing = 'Hoodies & Sweatshirts';
//   let itemToAdd = 'Circe Hooded Ice Fleece';
//   let size = 'M';
//   let colour = 'Gray';


//   const homePage = new HomePage(page);
//   const loginPage = new LoginPage(page);
//   const shoppingPage = new ShoppingPage(page);
//   const wishListPage = new WishListPage;

//   // click Login button on Home page
// homePage.clickLoginButton();
// loginPage.enterUserName(validUserName);
// loginPage.enterPassword(validPassword);
// loginPage.clickLoginButton();

// shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
// shoppingPage.selectItemChooseItemPage(itemToAdd);
// shoppingPage.SelectItemSpecifics(size, colour);

// shoppingPage.clickAddToWishList();
// shoppingPage.verifyItemAddedToWishList(itemToAdd);

// shoppingPage.clickDeleteFromWishList();
// shoppingPage.verifyItemRemovedFromWishList(itemToAdd);


// });

// //



// needs review:  fails on clickProceedToCheckout(), ShoppingPage, line 134
//test('End-to-End: Log In, Add Item to Wishlist, Add to Cart from Wishlist, Checkout - Order succeeds', async ({ page }) => {


  //   let gender = 'Women';
  //   let topsBottoms = 'Tops';
  //   let typeOfClothing = 'Hoodies & Sweatshirts';
  //   let itemToPurchase = 'Circe Hooded Ice Fleece';
  //   let size = 'M';
  //   let colour = 'Gray';


  //   const homePage = new HomePage(page);
  //   const loginPage = new LoginPage(page);
  //   const shoppingPage = new ShoppingPage(page);
  //   //const wishlistPage = new WishListPage;

  //   // click Login button on Home page
  // homePage.clickLoginButton();
  // loginPage.enterUserName(validUserName);
  // loginPage.enterPassword(validPassword);
  // loginPage.clickLoginButton();

  // shoppingPage.selectItemTypeFromMenus (gender, topsBottoms, typeOfClothing);
  // shoppingPage.selectItemChooseItemPage(itemToPurchase);
  // shoppingPage.SelectItemSpecifics(size, colour);

  //shoppingPage.clickAddToWishList();
  //shoppingPage.addToCartFromWishList();

  //shoppingPage.clickShoppingCartLoggedIn();
  //shoppingPage.clickProceedToCheckout();
  //shoppingPage.clickNextButtonOnOrderPage();
  //shoppingPage.clickPlaceOrder();

  // // Verification
  //shoppingPage.verifyOrderComplete();

  // });


//--------------------------------------------------------


// // Random Integer function
// const randomInt = (min: number, max: number) =>
// Math.floor(Math.random() * (max - min + 1)) + min;











/// <reference types="Cypress" />
describe('My first test case', function()
{
it('It would be also a function', function()
{
//test cases/steps lie here
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.wait(2000);
cy.get('.products').as('productname')
cy.get('.search-keyword').type('ca');
cy.get('.product:visible').should('have.length',4)
cy.get('@productname').find('.product').should('have.length',4);
cy.get('@productname').find('.product').eq(2).contains('ADD TO CART').click();
cy.get('@productname').find('.product').each(($el,index,$list) =>{
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews')){
  $el.find('button').click();
}
})
cy.get('.brand').then(function(logoname)
{
  cy.log(logoname.text())
})


})
})  
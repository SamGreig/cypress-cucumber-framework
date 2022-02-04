import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePageObjects from '../../pageObjects/homePage'

const homePage = new HomePageObjects

Given('I navigate to the Next home page', () => {
  homePage.visit()
})

Then('The page header is displayed', () => {
    homePage.headerContent().should('be.visible')
})

When('I enter {string} into the search box', (searchTerm) => {
    homePage.searchBox().type(searchTerm)
})

And('I click on the search button', () => {
    homePage.searchButton().click()
})

Then('I will be taken to a list of results for my search {string}', (searchTerm) => {
    cy.url().should('include', searchTerm)
})
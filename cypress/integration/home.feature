Feature: Next Home Page

    I want to go to the Next home page

    Scenario: Go to Next home page
        Given I navigate to the Next home page
        Then The page header is displayed
        When I enter "shirt" into the search box
        And I click on the search button
        Then I will be taken to a list of results for my search "shirt"
class HomePageObjects {
    visit() {
        cy.visit('www.next.co.uk')
    }

    headerContent() {
        return cy.get('.HeaderContent')
    }

    searchBox() {
        return cy.get('.SearchBox')
    }

    searchButton() {
        return cy.get('.SearchButton')
    }
}

export default HomePageObjects
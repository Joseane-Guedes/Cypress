describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains("a", "Register now").click();
    cy.get('[formcontrolname = "email"]').type("joseane@gmail.com");
    cy.get('[formcontrolname = "fullName"]').type("joseaneGuedes");
    cy.get('[formcontrolname = "password"]').type("joseane123");
    cy.contains("button", "Register").click();
  })
})
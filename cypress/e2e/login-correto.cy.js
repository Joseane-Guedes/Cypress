describe("Página de login", () => {
  it("Deve preencher os campos e realizar login", () => {
    cy.visit(
      "http://localhost:4200"
    );

    cy.get(
      'input[data-test="loginUserName"]'
    ).type(
      "lllllllll"
    );
    cy.get(
      'input[data-test="loginPassword"]'
    ).type(
      "LllllLllll"
    );
    cy.contains(
      "button",
      "login"
    ).click();
  });
});

describe("navigation tests", () => {
  it("shlould ", () => {
    cy.loginUser("dashboard");

    cy.get("button")
      .contains(/chart page/i)
      .click();

    cy.getDataTest("chart").should("be.visible");

    cy.get("button")
      .contains(/go back/i)
      .click();

    cy.get("button")
      .contains(/large data page/i)
      .should("be.visible");

    cy.get("button")
      .contains(/large data page/i)
      .click();

    cy.getDataTest("search input").type("SID");

    cy.getDataTest("theme_toggler")
      .as("themeToggler")
      .invoke("text")
      .then((val) => {
        cy.get("@themeToggler").click();

        cy.getDataTest("theme_toggler")
          .as("themeToggler")
          .invoke("text")
          .should("not.eq", val);
      });
  });
});

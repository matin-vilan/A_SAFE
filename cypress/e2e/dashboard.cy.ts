describe("navigation tests", () => {
  beforeEach(() => {
    cy.loginUser("dashboard/posts");
  });
  it("shlould navigating between pages and test functionality", () => {
    cy.getDataTest("CHART").should("be.visible");

    cy.getDataTest("CHART").click();

    cy.get("button")
      .contains(/go back/i)
      .click();

    cy.getDataTest("LARGE DATA").should("be.visible");

    cy.getDataTest("LARGE DATA").click();

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

    cy.get("button")
      .contains(/go back/i)
      .click();

    cy.location().should((loc) => {
      expect(loc.pathname).eq("/dashboard/posts");
    });
  });

  it("should navigating to post details page and come back", () => {
    cy.getDataTest("post-card-1").click();

    cy.location("pathname").should("eq", "/dashboard/posts/1");

    cy.getDataTest("back-button").click();

    cy.location("pathname").should("eq", "/dashboard/posts");
  });
});

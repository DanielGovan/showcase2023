import "cypress-axe";

describe("Homepage", () => {
  it("has all titles", () => {
    cy.visit("/");

    // Check titles
    cy.get("h1").contains("Dan Govan");

    cy.get("h2").should("have.length", 3);
    cy.get("h2").first().should("have.text", "Skills");
    cy.get("h2").eq(1).should("have.text", "Experience");
    cy.get("h2").last().should("have.text", "Contact");
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.visit("/");
    cy.injectAxe();
    cy.checkA11y();
  });
});

// You can set up --isolatedModules
export {};

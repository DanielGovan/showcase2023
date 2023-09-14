// ====
// Start moving in components?
// Test for each area, header, etc that's expected?
// look into adding cypress for gatsby? Then I could add tests for navigation, forms and polls. Which would honestly future proof it a lot!
// ====

describe("Homepage", () => {
  it("passes", () => {
    cy.visit("/");

    // Check title
    cy.get("h1").contains("Hello world");
  });
});

// You can set up --isolatedModules
export {};

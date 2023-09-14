describe("Homepage", () => {
  it("passes", () => {
    cy.visit("/");

    // Check title
    cy.get("h1").contains("Dan Govan");

    // Test for each area, header, etc that's expected?

    // Test for navigation when that's added? Or as a seperate test?
  });
});

// You can set up --isolatedModules
export {};

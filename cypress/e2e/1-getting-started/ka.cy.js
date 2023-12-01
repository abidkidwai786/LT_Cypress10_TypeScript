describe("placeholder test to be replaced with something meaningful", () => {
    it("Should be using the correct user agent", () => {
        cy.log('User Agent=================', Cypress.config("userAgent"));

        expect(Cypress.config("userAgent")).to.equal("Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML like Gecko) Mobile/15E148");
    });
});
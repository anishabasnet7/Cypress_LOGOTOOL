class EProof {
    downloadEProof() {
        cy.wait(1000*15);
        cy.xpath('//button[contains(text(),"Download e-proof")]').click();
        cy.wait(1000*15);
        // Return to the original tab
        cy.focused().type('{ctrl}', {release: true});
        cy.log('Eproof downloaded'); 
    }
}
module.exports = EProof;
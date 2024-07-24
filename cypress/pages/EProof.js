class EProof {
    downloadEProof() {
        cy.wait(15000);
        cy.xpath('//button[contains(text(),"Download e-proof")]').click();
        cy.wait(15000);
        // Return to the original tab
        cy.focused().type('{ctrl}', {release: true})
        cy.log('Eproof downloaded'); 
    }
}
module.exports = EProof;

  
          

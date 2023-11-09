// fucntion.js
/// <reference types="cypress" />

export function buscarGene(gene) {
    cy.visit('https://gnomad.broadinstitute.org/')
    cy.get('.Page-w7h773-0 > .sc-gzVnrw > span > div > [data-testid="searchbox-input"]').type('BRCA1').type('{enter}')
    cy.url().should('include', '/gene/ENSG00000012048?dataset=gnomad_r4')
}

export function verificarVariante(varianteId){
    cy.wait(5000);
    cy.get('.SearchInput__Input-sc-15ni3td-1').type(varianteId).type('{enter}');
    cy.get('body').then(($body) => {
    const markExists = $body.find('mark').length > 0;
    if (markExists) {
      cy.log('Variante encontrada');
    } else {
      cy.log('Variante não encontrada');
    }

  });
}
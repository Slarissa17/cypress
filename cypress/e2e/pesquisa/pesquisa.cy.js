/// <reference types="cypress" />

describe('Teste E2E para buscar variantes de um gene', () => {

    it('Deve buscar o gene BRCA1', () => {
        cy.visit('https://gnomad.broadinstitute.org/')
        cy.get('.Page-w7h773-0 > .sc-gzVnrw > span > div > [data-testid="searchbox-input"]').type('BRCA1').type('{enter}')
        cy.url().should('include', '/gene/ENSG00000012048?dataset=gnomad_r4')
        
    });
    it('Verificar a presença de uma variante específica', () => {
      cy.visit('https://gnomad.broadinstitute.org/gene/ENSG00000012048?dataset=gnomad_r4')

      cy.get('span').then(($element) => {
        if ($element.text().includes('17-41197784-G-A')) {
          cy.log('Variante encontrada: 17-41197784-G-A');
          cy.get()
        } else {
          cy.log('Variante não encontrada: 17-41197784-G-A');
        }
      });

      // cy.get('span').should('contain', '17-43045622-C-T')

  });
    chromeWebSecurity: false
});

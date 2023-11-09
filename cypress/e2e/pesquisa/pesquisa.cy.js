/// <reference types="cypress" />
import { buscarGene, verificarVariante } from './functions';




describe('Teste E2E para buscar variantes de um gene', () => {

    it('Deve buscar o gene BRCA1', () => {
        buscarGene('BRCA1'); 
    });
    it('Verificar a presença de uma variante específica', () => {
        buscarGene('BRCA1');
        verificarVariante('17-41197784-G-A');     
  });
});

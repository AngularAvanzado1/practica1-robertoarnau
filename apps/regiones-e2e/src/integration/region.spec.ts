import { getGreeting } from '../support/app.po';

describe('GIVEN: a region code', () => {

  beforeEach(() => cy.visit('http://localhost:4200/#/region/LCN'));
  context('WHEN: user visits the page', () => {

    it('THEN: should display welcome message', () => {
      getGreeting().contains('Regiones geográficas continentales');
    });

    it('THEN: should display Button A region', () => {
      getGreeting().get('.card').find('.btn-secondary').invoke('text').should('contain', 'Listado de regiones')
    });

    it('THEN: should display Button B region', () => {
      getGreeting().get('.card').find('.btn-primary').invoke('text').should('contain', 'Paises de')
    });

 });
});

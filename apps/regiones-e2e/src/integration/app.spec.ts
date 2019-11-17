import { getGreeting } from '../support/app.po';

describe('GIVEN: the regiones app', () => {
  beforeEach(() => cy.visit('/'));
  context('WHEN: user visits home page', () => {
    it('THEN: should display welcome message', () => {
      getGreeting().contains('Regiones geográficas continentales');
    });

    it('THEN: load regions from the API', () => {
      getGreeting().get('regiones-ui-items-list').find('.card').should('have.length.lessThan', 1);
    });
  });

});

describe('Feature Select Mode', () => {
  beforeEach(() => {
    cy.visit('https://app.gothru.co')
    cy.get('input[placeholder="Enter email"]',{ timeout: 120000 }).type('testergothru@gmail.com') 
    cy.get('input[placeholder="Enter password"]',{ timeout: 120000 }).type('GoThru@12345')         
    cy.contains('button', 'Log In').click()    
  });
  it('Change mode light to dark', () => {
    cy.get('button i.fa-solid.fa-moon',{ timeout: 120000 }).first().click();
    cy.get('button i.fa-solid.fa-sun',{ timeout: 120000 }).first().click();
  });
});
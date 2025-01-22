describe('Feature Select Mode', () => {
  beforeEach(() => {
    cy.visit('https://app.gothru.co')
    cy.get('input[placeholder="Enter email"]').type('testergothru@gmail.com') 
    cy.get('input[placeholder="Enter password"]').type('GoThru@123')         
    cy.contains('button', 'Log In').click()    
  });
  it('Change mode light to dark', () => {
    cy.get('button i.fa-solid.fa-moon').first().click();
    cy.get('button i.fa-solid.fa-sun').first().click();
  });
});
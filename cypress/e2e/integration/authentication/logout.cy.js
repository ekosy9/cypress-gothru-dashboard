describe('Logout Feature', () => {
  beforeEach(() => {
    cy.visit('https://app.gothru.co')
    cy.get('input[placeholder="Enter email"]').type('testergothru@gmail.com') 
    cy.get('input[placeholder="Enter password"]').type('GoThru@123')         
    cy.contains('button', 'Log In').click()    
  });
  it('should logout successfully and redirect to Homepage', () => {
    cy.get('button').find('img[alt="avatar"]').click();
    cy.contains('Log Out').click();
    cy.url().should('eq', 'https://app.gothru.co/auth');
  });
});

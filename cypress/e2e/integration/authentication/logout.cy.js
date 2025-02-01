describe('Feature Logout', () => {
  beforeEach(() => {
    cy.visit('https://app.gothru.co')
    cy.get('input[placeholder="Enter email"]',{ timeout: 120000 }).type('testergothru@gmail.com') 
    cy.get('input[placeholder="Enter password"]',{ timeout: 120000 }).type('GoThru@12345')         
    cy.contains('button', 'Log In').click()    
  });
  it('should logout successfully and redirect to Homepage', () => {
    cy.get('button').find('img[alt="avatar"]',{ timeout: 120000 }).click();
    cy.contains('Log Out',{ timeout: 120000 }).click({ force: true });
    cy.url().should('eq', 'https://app.gothru.co/auth');
  });
});
describe('Feature Select Language', () => {
  beforeEach(() => {
    cy.visit('https://app.gothru.co')
    cy.get('input[placeholder="Enter email"]',{ timeout: 120000 }).type('testergothru@gmail.com') 
    cy.get('input[placeholder="Enter password"]', { timeout: 120000 }).type('GoThru@123')         
    cy.contains('button', 'Log In', { timeout: 120000 }).click()    
  });
  it('Change Language to Italiano and English', () => {
    cy.get('img[src*="https://app.gothru.co/images/flag/en.png"]', { timeout: 120000 }).first().click();
    cy.contains('button', 'Italiano', { timeout: 120000 }).click()
    cy.contains('button', 'Fare domanda a', { timeout: 120000 }).click()
    cy.get('img[src*="https://app.gothru.co/images/flag/it.png"]', { timeout: 120000 }).first().click();
    cy.contains('button', 'English', { timeout: 120000 }).click()
    cy.contains('button', 'Apply', { timeout: 120000 }).click()
  });
});
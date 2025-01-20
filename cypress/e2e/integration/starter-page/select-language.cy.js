describe('Select Language Feature', () => {
  beforeEach(() => {
    cy.visit('https://app.gothru.co')
    cy.get('input[placeholder="Enter email"]').type('testergothru@gmail.com') 
    cy.get('input[placeholder="Enter password"]').type('GoThru@123')         
    cy.contains('button', 'Log In').click()    
  });
  it('Chang Language to Italiano and English', () => {
    cy.get('img[src*="https://app.gothru.co/images/flag/en.png"]').first().click();
    cy.contains('button', 'Italiano').click()
    cy.contains('button', 'Fare domanda a').click()
    cy.get('img[src*="https://app.gothru.co/images/flag/it.png"]').first().click();
    cy.contains('button', 'English').click()
    cy.contains('button', 'Apply').click()
  });
});
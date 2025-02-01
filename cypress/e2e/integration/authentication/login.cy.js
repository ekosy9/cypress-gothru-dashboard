describe('Feature Login', () => {
  it('Main Function', () => {
    cy.visit('https://app.gothru.co')
    cy.get('input[placeholder="Enter email"]',{ timeout: 60000 }).type('testergothru@gmail.com') 
    cy.get('input[placeholder="Enter password"]',{ timeout: 60000 }).type('GoThru@12345')         
    cy.contains('button', 'Log In').click()    
  })
})

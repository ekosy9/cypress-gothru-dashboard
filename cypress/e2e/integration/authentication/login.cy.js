describe('Feature Login', () => {
  it('Main Function', () => {
    cy.visit('https://app.gothru.co')
    cy.get('input[placeholder="Enter email"]').type('testergothru@gmail.com') 
    cy.get('input[placeholder="Enter password"]').type('GoThru@123')         
    cy.contains('button', 'Log In').click()    
  })
})

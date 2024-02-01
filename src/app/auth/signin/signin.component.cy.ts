import { FormsModule } from '@angular/forms'
import { SigninComponent } from './signin.component'

describe('SigninComponent', () => {
  it('should mount', () => {
    cy.mount(SigninComponent, {
      imports: [
        FormsModule
      ]
    })
  })
})

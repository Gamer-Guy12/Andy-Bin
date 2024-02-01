import { FormsModule } from "@angular/forms"
import { SignupComponent } from "./signup.component"

describe("SignupComponent", () => {
  it('should mount', () => {
    cy.mount(SignupComponent, {
      imports: [
        FormsModule
      ]
    })
  })
})

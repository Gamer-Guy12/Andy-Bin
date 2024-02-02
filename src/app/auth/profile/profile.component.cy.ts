import { FormsModule } from "@angular/forms"
import { ProfileComponent } from "./profile.component"

describe("ProfileComponent", () => {
  it ("should mount", () => {
    cy.mount(ProfileComponent, {
      imports: [
        FormsModule
      ]
    })
  })
})

import { FormsModule } from "@angular/forms"
import { TopbarLinkComponent } from "./topbar-link.component"

describe('TopbarLinkComponent', () => {
  it ('should mount', () => {
    cy.mount(TopbarLinkComponent, {
      imports: [
        FormsModule
      ]
    })
  })
})

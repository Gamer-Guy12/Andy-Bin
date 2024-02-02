import { AuthHomeComponent } from "./auth-home.component"

describe("AuthHomeComponent", () => {
  it ("should mount", () => {
    cy.mount(AuthHomeComponent)
  })
})

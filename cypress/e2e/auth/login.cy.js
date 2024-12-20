import {MSGS, PATHS, URLS} from "../../config/constants";
import {AUTH} from "../../config/auth";

describe(`${MSGS.name}.Auth`, () => {

  it('Can login', () => {
    if (AUTH.token) {
      const j = {
        name: AUTH.displayname,
        email: AUTH.displayname,
        groups_token: AUTH.token
      }
      cy.setCookie('info', btoa(JSON.stringify(j)))
      cy.setCookie('isAuthenticated', 'true')
      cy.visit(PATHS.search)
      cy.contains(AUTH.displayname)
    } else {
      cy.login()
    }

  })
})
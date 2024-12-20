import {MSGS, PATHS, URLS} from "../../config/constants";
import {AUTH} from "../../config/auth";

describe(`${MSGS.name}.Auth`, () => {

  it('Can login', () => {
     cy.login()
  })
})
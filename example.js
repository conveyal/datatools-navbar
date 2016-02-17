import React from 'react'
import {render} from 'react-dom'

import DatatoolsNavbar from './index'

const div = document.createElement('div')
document.body.appendChild(div)

render(
  <DatatoolsNavbar
    title='Transit Data Manager'
    username='foo@bar.com'
    managerUrl='http://localhost:9000'
    editorUrl='http://localhost:9001'
    userAdminUrl='http://localhost:9002'
    loginHandler={() => console.log('login')}
    logoutHandler={() => console.log('logout')}
    resetPasswordHandler={() => console.log('change pw')}
  />,
  div
)

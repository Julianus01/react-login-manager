import React from 'react'
import { Row, Card } from 'antd'
import styled from 'styled-components'
import LoginForm from './LoginForm'
import { Subscribe } from 'unstated'
import AuthContainer from '../containers/AuthContainer'

const Wrapper = styled(Row)`
  height: 100vh;
  padding-top: 20vh;
`

const LoginCard = styled(Card)`
  max-width: 350px;
  height: fit-content;
`

const LoginPage = () => (
  <Subscribe to={[AuthContainer]}>
    {auth => (
      <Wrapper type='flex' justify='center'>
        <LoginCard title='Login'>
          <LoginForm auth={auth} />
        </LoginCard>
      </Wrapper>
    )}
  </Subscribe>
)

export default LoginPage

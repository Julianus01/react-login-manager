import React from 'react'
import { Row, Card } from 'antd'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const Wrapper = styled(Row)`
  height: 100vh;
  padding-top: 20vh;
`

const LoginCard = styled(Card)`
  max-width: 350px;
  height: fit-content;
`

const LoginPage = () => (
  <Wrapper type='flex' justify='center'>
    <LoginCard title='Login'>
      <LoginForm />
    </LoginCard>
  </Wrapper>
)

export default LoginPage

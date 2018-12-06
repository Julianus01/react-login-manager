import React from 'react'
import { Row, Col, Button } from 'antd'
import styled from 'styled-components'

const Wrapper = styled(Row)`
  height: 100vh;
  padding-top: 20vh;
`

const Container = styled(Col)`
  height: fit-content;
  padding: 0 2rem;
  border-left: 1px solid #e8e8e8;
`

const Title = styled.h1`
  font-size: 4em;
`

const LandingPage = () => (
  <Wrapper type='flex' justify='center'>
    <Container>
      <Title>React login manager</Title>
      <Button href='/login' type='primary' size='large'>
        Get started
      </Button>
    </Container>
  </Wrapper>
)

export default LandingPage

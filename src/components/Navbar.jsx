import React from 'react'
import styled from 'styled-components'
import { Card, Row, Icon } from 'antd'

const Wrapper = styled(Card)`
  position: fixed;
  top: 0;
  width: 100%;

  .ant-card-body {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const BoxedRow = styled(Row)`
  max-width: 1010px;
  width: 100%;
  padding: 26px 20px;
`

const Left = styled.div`
  float: left;
`

const Right = styled.div`
  float: right;
`

const NavIcon = styled(Icon)`
  margin-left: 30px;
  font-size: 24px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Wrapper>
      <BoxedRow>
        <Left>Logo</Left>

        <Right>
          <NavIcon type='user' />
        </Right>
      </BoxedRow>
    </Wrapper>
  )
}

export default Navbar

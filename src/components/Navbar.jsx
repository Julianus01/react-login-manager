import React from 'react'
import styled from 'styled-components'
import { Card, Row, Icon, Menu, Dropdown, Avatar } from 'antd'
import { withAuthContainer } from '../hoc/unstated'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

const menu = logout => (
  <Menu>
    <Menu.Item key='0'>
      <a href='http://www.alipay.com/'>
        <MenuIcon type='setting' />
        Settings
      </a>
    </Menu.Item>
    <Menu.Item key='1'>
      <a role='button' onClick={logout}>
        <MenuIcon type='logout' />
        Logout
      </a>
    </Menu.Item>
  </Menu>
)

const Navbar = ({ authContainer, history }) => {
  const logout = async () => {
    await authContainer.logout()
    history.push('/login')
  }

  return (
    <Wrapper>
      <BoxedRow>
        <Left>Logo</Left>

        <Right>
          <Dropdown
            placement='bottomRight'
            overlay={menu(logout)}
            trigger={['click']}
          >
            <div>
              <Avatar
                style={{ cursor: 'pointer' }}
                icon='user'
                src={authContainer.state.user.photoURL}
              />
            </div>
          </Dropdown>
        </Right>
      </BoxedRow>
    </Wrapper>
  )
}

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

const MenuIcon = styled(Icon)`
  margin-right: 8px;
`

export default compose(
  withRouter,
  withAuthContainer
)(Navbar)

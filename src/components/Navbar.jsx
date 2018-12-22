import React from 'react'
import styled from 'styled-components'
import { Card, Row, Icon, Menu, Dropdown } from 'antd'
import { withAuth } from '../hoc/unstated'
import { withRouter } from 'react-router-dom'

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

const MenuIcon = styled(Icon)`
  margin-right: 8px;
`

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
`

const menu = (logout) => (
  <Menu>
    <Menu.Item key='0'>
      <a href='http://www.alipay.com/'>
        <MenuIcon type='setting' />
        Settings
      </a>
    </Menu.Item>
    <Menu.Item key='1'>
      <a onClick={logout}>
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
          <Dropdown placement='bottomRight' overlay={menu(logout)} trigger={['click']}>
            {authContainer.state.user.photoURL ? 
              <ProfileImage alt="test"src={authContainer.state.user.photoURL} /> :
              <NavIcon type='user' /> }
          </Dropdown>
        </Right>
      </BoxedRow>
    </Wrapper>
  )
}

export default withRouter(withAuth(Navbar))

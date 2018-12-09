import React from 'react'
import { Form, Icon, Input, Button, Row } from 'antd'
import styled from 'styled-components'
import { withAuth } from '../hoc/unstated'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const FormItem = Form.Item

const InputIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`

const LoginButton = styled(Button)`
  width: 100%;
  /* border-radius: 1.5rem; */
`

const ConnectButton = styled(Button)`
  width: 100%;
`

class LoginForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <React.Fragment>
        <Form onSubmit={this.validateForm}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(
              <Input placeholder='Email' prefix={<InputIcon type='mail' />} />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
                { min: 6, message: 'Password must be at least 6 characters' },
              ],
            })(
              <Input
                prefix={<InputIcon type='lock' />}
                type='password'
                placeholder='Password'
              />
            )}
          </FormItem>

          <FormItem>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)} */}
            <LoginButton size='large' type='primary' htmlType='submit'>
              Log in
            </LoginButton>
            {/* <a style={{ float: 'right', marginRight: 8 }} href=''>
              Forgot password
            </a> */}
            {/* Or <a href=''>register now!</a> */}
          </FormItem>
        </Form>

        <Row>
          <ConnectButton
            icon='google'
            size='large'
            type='primary'
            onClick={this.loginWithGoogle}
          >
            gmail
          </ConnectButton>
          <ConnectButton icon='facebook' size='large' type='primary'>
            facebook
          </ConnectButton>
        </Row>
      </React.Fragment>
    )
  }

  validateForm = event => {
    event.preventDefault()
    this.props.form.validateFields((err, formData) => {
      if (!err) {
        this.loginWithEmailAndPassword(formData)
      }
    })
  }

  loginWithEmailAndPassword = async formData => {
    const { auth } = this.props
    await auth.loginWithEmailAndPassword(formData)
    this.props.history.push('/home')
  }

  loginWithGoogle = async () => {
    const { auth } = this.props
    await auth.loginWithGoogle()

    this.props.history.push('/home')
  }
}

LoginForm.propTypes = {
  auth: PropTypes.shape({
    loginWithEmailAndPassword: PropTypes.func.isRequired,
    state: PropTypes.shape({
      user: PropTypes.object,
    }),
  }),
}

export default withRouter(withAuth((LoginForm = Form.create()(LoginForm))))

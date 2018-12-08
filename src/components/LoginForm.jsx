import React from 'react'
import { Form, Icon, Input, Button, Row } from 'antd'
import styled from 'styled-components'
import { withAuth } from '../hoc/unstated'
import PropTypes from 'prop-types'

const FormItem = Form.Item

const InputIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`

const LoginButton = styled(Button)`
  width: 100%;
  /* border-radius: 1.5rem; */
`

const ConnectButton = styled(Button)`
  border-radius: 1.5rem;
  flex: 1;
  margin: 0 8px;
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
            <a style={{ float: 'right', marginRight: 8 }} href=''>
              Forgot password
            </a>
            {/* Or <a href=''>register now!</a> */}
          </FormItem>
        </Form>

        <Row justify='space-around' type='flex'>
          <ConnectButton icon='google' size='large' type='primary' />
          <ConnectButton icon='facebook' size='large' type='primary' />
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
    console.log(this.props)
    console.log(auth.state.user())
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

export default withAuth((LoginForm = Form.create()(LoginForm)))

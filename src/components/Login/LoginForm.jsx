import React from 'react'
import { Form, Icon, Input, Button, Row, Divider } from 'antd'
import styled from 'styled-components'
import { withAuthContainer } from '../../unstated/hoc'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

const emailRules = {
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
}

const passwordRules = {
  rules: [
    { required: true, message: 'Please input your Password!' },
    { min: 6, message: 'Password must be at least 6 characters' },
  ],
}

class LoginForm extends React.Component {
  state = {
    emailLoading: false,
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <React.Fragment>
        <Form onSubmit={this.validateForm}>
          <FormItem>
            {getFieldDecorator('email', emailRules)(
              <Input placeholder='Email' prefix={<InputIcon type='mail' />} />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('password', passwordRules)(
              <Input
                prefix={<InputIcon type='lock' />}
                type='password'
                placeholder='Password'
              />
            )}
          </FormItem>

            <LoginButton
              type='primary'
              htmlType='submit'
              loading={this.state.emailLoading}
            >
              {!this.state.emailLoading && 'Login'}
            </LoginButton>
        </Form>

        <Divider style={{ fontWeight: 300 }}>or</Divider>

        <Row style={{ display: 'flex' }}>
          <GmailButton
            icon='google'
            onClick={this.loginWithGoogle}
          >
          </GmailButton>

          <FacebookButton
            icon='facebook'
            onClick={this.loginWithFacebook}
          >
          </FacebookButton>
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
    try {
      const { authContainer } = this.props

      this.setState({ emailLoading: true })
      await authContainer.loginWithEmailAndPassword(formData)
    } catch (error) {
      this.setState({ emailLoading: false })
    }
  }

  loginWithGoogle = async () => {
    const { authContainer } = this.props
    await authContainer.loginWithGoogle()
  }

  loginWithFacebook = async () => {
    const { authContainer } = this.props
    await authContainer.loginWithFacebook()
  }
}

const FormItem = Form.Item

const InputIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`

const LoginButton = styled(Button)`
  width: 100%;
`

const GmailButton = styled(Button)`
  width: 100%;
  margin-right: 8px;
`

const FacebookButton = styled(Button)`
  width: 100%;
  margin-left: 8px;
`

LoginForm.propTypes = {
  authContainer: PropTypes.shape({
    loginWithEmailAndPassword: PropTypes.func.isRequired,
    state: PropTypes.shape({
      user: PropTypes.object,
    }),
  }),
}

export default compose(
  withRouter,
  withAuthContainer
)((LoginForm = Form.create()(LoginForm)))

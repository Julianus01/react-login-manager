import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'

const FormItem = Form.Item

const InputIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
`

class LoginForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit}>
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
          })(<Input prefix={<InputIcon type='mail' />} />)}
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a style={{ float: 'right' }} href=''>
            Forgot password
          </a>
          <Button style={{ width: '100%' }} type='primary'
          // htmlType='submit'
          href='/home'
          >
            Log in
          </Button>
          Or <a href=''>register now!</a>
        </FormItem>
      </Form>
    )
  }
}

export default (LoginForm = Form.create()(LoginForm))

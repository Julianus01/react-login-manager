import React from 'react'
import { Form, Modal, Input } from 'antd'
import { withPostContainer, withAuthContainer } from '../../unstated/hoc'
import { compose, mapProps } from 'recompose'

const titleRules = {
  rules: [
    {
      required: true,
      message: 'Title cannot be empty',
    },
  ],
}

const descriptionRules = {
  rules: [
    {
      required: true,
      message: 'Description cannot be empty',
    },
  ],
}

const PostCreateModal = Form.create()(
  class extends React.Component {
    render() {
      const { visible, closeModal, form } = this.props
      const { getFieldDecorator } = form

      return (
        <Modal
          visible={visible}
          title='Create a new post'
          okText='Create'
          onCancel={closeModal}
          onOk={this.validateAndCreate}
          maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          maskClosable={true}
        >
          <Form layout='vertical'>
            <Form.Item label='Title'>
              {getFieldDecorator('title', titleRules)(<Input />)}
            </Form.Item>

            <Form.Item label='Description'>
              {getFieldDecorator('description', descriptionRules)(
                <Input.TextArea rows={5} />
              )}
            </Form.Item>
          </Form>
        </Modal>
      )
    }

    validateAndCreate = () => {
      const { form, closeModal } = this.props

      form.validateFields(async (err, formData) => {
        if (!err) {
          await this.createPost(formData)
          form.resetFields()
        }

        closeModal()
      })
    }

    createPost = async formData => {
      const { createPostAction, uid } = this.props

      try {
        await createPostAction(uid, formData)
      } catch (error) {}
    }
  }
)

export default compose(
  withPostContainer,
  withAuthContainer,

  mapProps(({ authContainer, postContainer, ...rest }) => ({
    createPostAction: postContainer.createPost,
    uid: authContainer.state.user.uid,
    ...rest,
  }))
)(PostCreateModal)

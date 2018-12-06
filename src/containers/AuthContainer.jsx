import { Container } from 'unstated'

export default class AuthContainer extends Container {
  state = {
    user: 'this shit works',
  }

  setNewUser = name => {
    this.setState({ user: name })
  }

  saySomething = () => {
    console.log('I said something')
  }
}

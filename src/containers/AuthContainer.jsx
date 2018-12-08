import { Container } from 'unstated'
import firebase from 'firebase'

export default class AuthContainer extends Container {
  state = {
    user: () => firebase.auth().currentUser,
  }

  loginWithEmailAndPassword = async credentials => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)

      // await this.setState({ user: response.user })
    } catch (error) {
      console.log(error)
    }
  }
}

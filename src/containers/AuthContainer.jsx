import { Container } from 'unstated'
import firebase from 'firebase'

export default class AuthContainer extends Container {
  constructor() {
    super()

    firebase.auth().onAuthStateChanged(user => {
      user && this.setState({ user })
    })

    this.state = {
      user: null,
    }
  }

  loginWithEmailAndPassword = async credentials => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
    } catch (error) {
      console.log(error)
    }
  }

  loginWithGoogle = async () => {
    try {
      const googleProvider = new firebase.auth.GoogleAuthProvider()
      const response = await firebase.auth().signInWithPopup(googleProvider)
    } catch (error) {
      console.log(error)
    }
  }
}

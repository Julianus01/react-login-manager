import { Container } from 'unstated'
import firebase from 'firebase'

export default class AuthContainer extends Container {
  constructor() {
    super()

    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        this.setState({ user: { ...user } })
      } else {
        localStorage.removeItem('user')
        this.setState({ user: null })
      }
    })

    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
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
      await firebase.auth().signInWithPopup(googleProvider)
    } catch (error) {
      console.log(error)
    }
  }

  loginWithFacebook = async () => {
    try {
      const facebookProvider = new firebase.auth.FacebookAuthProvider()
      await firebase.auth().signInWithPopup(facebookProvider)
    } catch (error) {
      console.log(error)
    }
  }

  logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.log(error)
    }
  }
}

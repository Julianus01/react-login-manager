import { Container } from 'unstated'
import firebase from 'firebase'
import axios from 'axios'

export default class AuthContainer extends Container {
  constructor() {
    super()

    firebase.auth().onAuthStateChanged(user => {
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
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)

      await this.updateUserData(response.user)
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

  updateUserData = async user => {
    await axios.patch('http://localhost:8000/user', { user })
  }

  logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.log(error)
    }
  }
}

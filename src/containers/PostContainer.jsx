import { Container } from 'unstated'
import firebase from 'firebase'

export default class PostContainer extends Container {
  constructor() {
    super()
    this.db = firebase.firestore()
    this.db.settings({ timestampsInSnapshots: true })
  }

  state = {
    posts: [],
  }

  getPosts = async uid => {
    const querySnapshot = await this.db
      .collection('users')
      .doc(uid)
      .collection('posts')
      .get()

    const posts = []
    querySnapshot.forEach(snap => {
      posts.push({ id: snap.id, ...snap.data() })
    })
    await this.setState({ posts })
  }

  addPost = async (uid, payload) => {
    const ref = this.db
      .collection('users')
      .doc(uid)
      .collection('posts')
      .doc()

    const newPost = { title: payload.title, id: ref.id }
    await ref.set(newPost)

    await this.setState(prevState => ({
      posts: [newPost, ...prevState.posts],
    }))
  }

  deletePost = async (uid, postId) => {
    try {
      await this.db
        .collection('users')
        .doc(uid)
        .collection('posts')
        .doc(postId)
        .delete()

      const posts = this.state.posts.filter(post => post.id !== postId)
      await this.setState({ posts })
    } catch (error) {
      console.log('Error when deleting')
      console.log(error)
    }
  }
}

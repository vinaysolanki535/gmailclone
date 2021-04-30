import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import { auth, provider } from './Firebase'
import { login } from './features/userSlice'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Login() {
  const history = useHistory()
  const dispatch = useDispatch()

  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <div className='login_container'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/clone-a2d90.appspot.com/o/iconfinder_google-gmail_7089163.png?alt=media&token=1ce22660-6ae9-4ca1-a7ae-cf92499f333e'
          alt=''
        />
        <Button onClick={SignIn} variant='contained' color='primary'>
          {' '}
          Login{' '}
        </Button>
      </div>
    </div>
  )
}

export default Login

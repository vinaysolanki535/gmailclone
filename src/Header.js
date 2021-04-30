import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './Firebase'

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }

  return (
    <div className='header'>
      <div className='header_left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/clone-a2d90.appspot.com/o/iconfinder_google-gmail_7089163.png?alt=media&token=1ce22660-6ae9-4ca1-a7ae-cf92499f333e'
          alt=''
        />
      </div>

      <div className='header_middle'>
        <SearchIcon />
        <input placeholder='search mail' type='text' />
        <ArrowDropDownIcon className='header_inputCaret' />
      </div>

      <div className='header_right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={SignOut} src={user.photoURL} />
      </div>
    </div>
  )
}

export default Header

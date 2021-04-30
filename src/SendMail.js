import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import { useForm } from 'react-hook-form'
import { closeSendMessage } from './features/mailSlice'
import { useDispatch } from 'react-redux'
import { db } from './Firebase'
import firebase from 'firebase'

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (formData) => {
    db.collection('emails').add({
      to: JSON.stringify(formData.to),
      subject: JSON.stringify(formData.subject),
      message: JSON.stringify(formData.message),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  }

  return (
    <div className='sendMail'>
      <div className='sendMail_header'>
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className='sendMail_close'
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='To' {...register('to', { required: true })} />
        {errors.to && <p className='sendMail_error'>to is required</p>}
        <input
          placeholder='Subject'
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className='sendMail_error'>subject is required</p>
        )}
        <input
          className='sendMail_message'
          placeholder='Message...'
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className='sendMail_error'>message is required</p>
        )}
        <div className='sendMail_options'>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='sendMail_send'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail

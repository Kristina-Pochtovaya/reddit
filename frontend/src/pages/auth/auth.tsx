import { useSelector } from 'react-redux'
import styles from './auth.module.scss'
import {
  selectAuthed,
  selectLogin,
  setLogin,
} from '../../components/store/auth_slice'
import { Button } from '../../components/common/button/button'
import { Input } from '../../components/common/input/input'
import { Image } from '../../components/common/image/image'
import app_icon from '../../assets/app_icon.png'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { AuthPopup } from '../../components/auth_popup/auth_popup'
import { loginUser } from '../../components/store/thunks/user'

import { useAppDispatch } from '../../components/store/store'
import { credentails } from '../../mock/mocked_user'
import type { Credentials } from '../../types/user'
import { useNavigate } from 'react-router'

export type InputValuesType = {
  name: string
  email: string
  password: string
}

export function Auth() {
  const googleButtonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.google || !googleButtonRef.current) {
      return
    }

    //*To-DO remove console after creating backend
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: (response) => {
        console.log('GOOGLE RESPONSE:', response)
        console.log('TOKEN:', response.credential)
      },
    })

    window.google.accounts.id.renderButton(googleButtonRef.current, {
      type: 'standard',
      theme: 'outline',
      size: 'medium',
      text: 'continue_with',
      shape: 'pill',
      width: 175,
    })
  }, [])

  const [popupVisible, setPopupVisible] = useState(false)
  const [inputValues, setInputvalues] = useState<Credentials>({
    username: '',
    password: '',
    email: '',
  })

  const login = useSelector(selectLogin)
  const authed = useSelector(selectAuthed)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setInputvalues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    if (authed) {
      navigate('/posts')
    }
  }, [authed, navigate])

  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            src={app_icon}
            alt="app_icon"
            height={50}
            width={50}
            classNames={{ image: styles.image }}
          />
          <h1>{login ? 'Log In' : 'Sign Up'}</h1>
          <h3 className={styles.comment}>
            Join Reddit to be a part of something bigger
          </h3>
        </div>

        <div className={styles.content}>
          {!login && (
            <Input
              name={'email'}
              type={'email'}
              placeholder="Email"
              classNames={{ input: styles.input }}
              onChange={handleChange}
            />
          )}
          <Input
            name={'name'}
            placeholder="Name"
            classNames={{ input: styles.input }}
            onChange={handleChange}
          />
          <Input
            name={'password'}
            type={'password'}
            placeholder="Password"
            classNames={{ input: styles.input }}
            onChange={handleChange}
          />

          <Button
            classNames={{
              base: styles.actionButtonBase,
              button: clsx(
                styles.actionButton,
                styles[`actionButton__${login ? 'login' : 'register'}`],
              ),
            }}
            onClick={() =>
              login
                ? // ? dispatch(loginUser(inputValues))
                  dispatch(loginUser(credentails))
                : console.log('Sign Up')
            }
          >
            {login ? 'Log In' : 'Create an account'}
          </Button>
          <div ref={googleButtonRef} />
        </div>

        <div className={styles.footer}>
          <div className={styles.text}>
            {login ? 'New to Reddit?' : 'Already a redditor?'}{' '}
          </div>
          <Button
            classNames={{
              base: styles.actionButtonBase,
              button: clsx(
                styles.actionButton,
                styles.actionButton__reverseAuthState,
                styles[`actionButton__${login ? 'login' : 'register'}`],
              ),
            }}
            onClick={() => dispatch(setLogin(!login))}
          >
            {login ? 'Sign Up' : 'Log In'}
          </Button>
          {login && (
            <Button
              classNames={{
                base: styles.actionButtonBase,
                button: clsx(
                  styles.actionButton,
                  styles.actionButton__forgotPassword,
                ),
              }}
              onClick={() => setPopupVisible(true)}
            >
              Forgot password
            </Button>
          )}
        </div>
      </div>
      <AuthPopup visible={popupVisible} setVisible={setPopupVisible} />
    </div>
  )
}

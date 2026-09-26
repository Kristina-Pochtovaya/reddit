import { useDispatch, useSelector } from 'react-redux'
import styles from './auth.module.scss'
import { selectLogin, setLogin } from '../../components/store/auth_slice'
import { Button } from '../../components/common/button/button'
import { Input } from '../../components/common/input/input'
import { Image } from '../../components/common/image/image'
import app_icon from '../../assets/app_icon.png'
import clsx from 'clsx'
import { useState } from 'react'
import { AuthPopup } from '../../components/auth_popup/auth_popup'

export function Auth() {
  const [popupVisible, setPopupVisible] = useState(false)
  const login = useSelector(selectLogin)
  const dispatch = useDispatch()

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
              name={'name'}
              placeholder="Name"
              classNames={{ input: styles.input }}
            />
          )}
          <Input
            name={'email'}
            type={'email'}
            placeholder="Email"
            classNames={{ input: styles.input }}
          />
          <Input
            name={'password'}
            type={'password'}
            placeholder="Password"
            classNames={{ input: styles.input }}
          />

          <Button
            classNames={{
              base: styles.actionButtonBase,
              button: clsx(
                styles.actionButton,
                styles[`actionButton__${login ? 'login' : 'register'}`],
              ),
            }}
            onClick={() => console.log(login ? 'Log In' : 'Sign Up')}
          >
            {login ? 'Log In' : 'Create an account'}
          </Button>
          <Button
            classNames={{
              base: styles.actionButtonBase,
              button: styles.actionButton,
            }}
            onClick={() => console.log('Continue with Google')}
          >
            Continue with Google
          </Button>
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

      {popupVisible && <AuthPopup setPopupVisible={setPopupVisible} />}
    </div>
  )
}

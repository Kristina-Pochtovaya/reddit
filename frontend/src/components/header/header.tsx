import clsx from 'clsx'
import styles from './header.module.scss'
import { SearchField } from '../search_field/search_field'
import { Image } from '../common/image/image'
import { Button } from '../common/button/button'
import logo from '../../assets/logo.jpg'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthed, setAuthed, setLogin } from '../store/auth_slice'

export type HeaderProps = {
  classNames?: {
    base?: string
    container?: string
  }
}

export function Header({ classNames }: HeaderProps) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authed = useSelector(selectAuthed)

  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <div className={clsx(styles.container, classNames?.container)}>
        <Image src={logo} alt="logo" width={100} height={25} />
        <SearchField />
        <div className={styles.actions}>
          {authed ? (
            <Button
              classNames={{
                base: styles.actionButtonBase,
                button: clsx(styles.actionButton, styles.actionButton__login),
              }}
              onClick={() => dispatch(setAuthed(false))}
            >
              Log Out
            </Button>
          ) : (
            <>
              <Button
                classNames={{
                  base: styles.actionButtonBase,
                  button: styles.actionButton,
                }}
                onClick={() => {
                  dispatch(setLogin(false))
                  navigate('/auth')
                }}
              >
                Sign Up
              </Button>
              <Button
                classNames={{
                  base: styles.actionButtonBase,
                  button: clsx(styles.actionButton, styles.actionButton__login),
                }}
                onClick={() => {
                  dispatch(setLogin(true))
                  navigate('/auth')
                }}
              >
                Log In
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

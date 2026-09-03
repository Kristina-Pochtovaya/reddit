import { Header } from './components/header/header'
import { Image } from './components/common/image/image'
import logo from './assets/logo.jpg'
import { SearchField } from './components/search_field/search_field'
import { Button } from './components/common/button/button'
import styles from './index.module.scss'
import clsx from 'clsx'

function App() {
  return (
    <Header classNames={{ container: styles.header }}>
      <Image src={logo} alt="logo" width={100} height={25} />
      <SearchField />
      <div className={styles.actions}>
        <Button
          classNames={{
            base: styles.actionButtonBase,
            button: clsx(styles.actionButton, styles.actionButton__sign),
          }}
          onClick={() => console.log('Sign Up')}
        >
          Sign Up
        </Button>
        <Button
          classNames={{
            base: styles.actionButtonBase,
            button: styles.actionButton,
          }}
          onClick={() => console.log('Log In')}
        >
          Log In
        </Button>
        <Button
          classNames={{
            base: styles.actionButtonBase,
            button: styles.actionButton,
          }}
          onClick={() => console.log('Log Out')}
        >
          Log Out
        </Button>
      </div>
    </Header>
  )
}

export default App

import { Button } from '../../components/common/button/button'
import { Input } from '../../components/common/input/input'
import { PopUp } from '../common/pop_up/pop_up'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './auth_popup.module.scss'
import clsx from 'clsx'

export type AuthPopupProps = {
  visible: boolean
  setVisible: (visible: boolean) => void
}

export function AuthPopup({ visible, setVisible }: AuthPopupProps) {
  return (
    <PopUp
      visible={visible}
      className={clsx(styles.popup, visible && styles.popup__visible)}
      onClose={() => setVisible(false)}
    >
      <div className={styles.header}>
        <Button
          onClick={() => setVisible(false)}
          classNames={{
            base: styles.clearButtonWrapper,
            button: styles.clearButton,
          }}
        >
          <ClearIcon sx={{ fontSize: 20 }} />
        </Button>
        <h3 className={styles.title}>Forgot password?</h3>
      </div>
      <div className={styles.content}>
        <Input
          name={'email'}
          type={'email'}
          placeholder="Email"
          classNames={{ input: styles.input }}
        />
      </div>
      <div className={styles.footer}>
        <Button
          classNames={{
            base: styles.actionButtonBase,
            button: styles.actionButton,
          }}
          onClick={() => setVisible(false)}
        >
          Send password
        </Button>
      </div>
    </PopUp>
  )
}

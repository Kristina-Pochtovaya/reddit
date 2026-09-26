import { Button } from '../../components/common/button/button'
import { Input } from '../../components/common/input/input'
import { PopUp } from '../../components/pop_up/pop_up'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './auth_popup.module.scss'

export type AuthPopupProps = {
  setPopupVisible: (popupVisible: boolean) => void
}

export function AuthPopup({ setPopupVisible }: AuthPopupProps) {
  return (
    <PopUp className={styles.popup} onClose={() => setPopupVisible(false)}>
      <div className={styles.header}>
        <Button
          onClick={() => setPopupVisible(false)}
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
          onClick={() => setPopupVisible(false)}
        >
          Send password
        </Button>
      </div>
    </PopUp>
  )
}

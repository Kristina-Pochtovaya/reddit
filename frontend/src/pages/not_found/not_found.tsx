import { useNavigate } from 'react-router'
import { Button } from '../../components/common/button/button'
import styles from './not_found.module.scss'
import { Image } from '../../components/common/image/image'
import not_found_icon from '../../assets/not_found.png'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <div className={styles.base}>
      <Image
        src={not_found_icon}
        alt={'not found'}
        width={700}
        height={300}
        classNames={{ image: styles.image }}
      />
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <Button
        onClick={() => navigate('/posts')}
        classNames={{
          base: styles.buttonWrapper,
          button: styles.buttonContent,
        }}
      >
        Back to posts
      </Button>
    </div>
  )
}

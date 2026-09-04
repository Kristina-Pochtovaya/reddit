import { Image } from '../common/image/image'
import styles from './post.module.scss'

export type PostProps = {
  classNames?: {}
}

export function Post({ classNames }: PostProps) {
  return (
    <div className={styles.base}>
      <div className={styles.header}>
        {/* <Image /> */}
        <div className={styles.authorName}>Kristina</div>
        <div className={styles.createDate}>Kristina</div>
        <div className={styles.editDate}>Kristina</div>
      </div>
      <div className={styles.conent}>Content</div>
    </div>
  )
}

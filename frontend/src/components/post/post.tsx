import type { Post as PostType } from '../../types/post'
import { Image } from '../common/image/image'
import styles from './post.module.scss'

export function Post({
  title,
  author,
  createdAt,
  editedAt,
  content,
}: PostType) {
  return (
    <div className={styles.base}>
      <div className={styles.header}>
        <div className={styles.author}>
          <Image src={author.avatar} alt="author" width={18} height={18} />
          <div className={styles.authorName}>{author.name} </div>
        </div>
        <div className={styles.circle} />
        <div className={styles.date}>{editedAt ?? createdAt}</div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        {content.type === 'image' && (
          <Image
            classNames={{ image: styles.image }}
            width={350}
            height={350}
            src={content.data}
            alt="post"
          />
        )}
        {content.type === 'link' && (
          <a className={styles.link} href={content.data} target="_blank">
            {content.data}
          </a>
        )}
        {content.type === 'text' && <div>{content.data}</div>}
      </div>
    </div>
  )
}

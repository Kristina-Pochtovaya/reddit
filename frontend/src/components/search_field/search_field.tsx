import clsx from 'clsx'
import styles from './search_field.module.scss'
import { Image } from '../common/image/image'
import search_icon from '../../assets/app_icon.png'
import ClearIcon from '@mui/icons-material/Clear'
import { Input } from '../common/input/input'
import { Button } from '../common/button/button'
import { useLocation, useSearchParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuthed } from '../store/auth_slice'
import { selectUser } from '../store/user_slice'

export type SearchFieldProps = {
  classNames?: {
    base?: string
    container?: string
  }
}

export function SearchField({ classNames }: SearchFieldProps) {
  const [, setSearchParams] = useSearchParams()
  // *TO-DO remove  const [searchValue, setSearchValue] = useState('') as searchParams is one source of truth
  // and move value.trim().toLowerCase() to backend
  const [searchValue, setSearchValue] = useState('')
  const authed = useSelector(selectAuthed)
  const location = useLocation()
  const user = useSelector(selectUser)

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchParams((params) => {
        params.delete('search')
        return params
      })
    }
  }, [searchValue, setSearchParams])

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    setSearchParams((params) => {
      setSearchValue(value)
      if (value.trim()) {
        params.set('search', value.trim().toLowerCase())
      } else {
        params.delete('search')
      }

      return params
    })
  }

  function handleOnClick() {
    setSearchValue('')

    setSearchParams((params) => {
      params.delete('search')

      return params
    })
  }

  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <div className={clsx(styles.container, classNames?.container)}>
        <Image src={search_icon} alt="search" height={20} width={20} />
        <Input
          value={searchValue}
          onChange={handleOnChange}
          placeholder={
            authed && user && location.pathname.startsWith('/user')
              ? `Search in ${user.name}`
              : 'Search Reddit'
          }
          name={'search_input'}
          classNames={{ base: styles.baseInput, input: styles.input }}
        />
        <Button
          onClick={handleOnClick}
          classNames={{ button: styles.clearButton }}
        >
          <ClearIcon sx={{ fontSize: 20 }} />
        </Button>
      </div>
    </div>
  )
}

import clsx from 'clsx'
import styles from './search_field.module.scss'
import { Image } from '../common/image/image'
import search_icon from '../../assets/app_icon.png'
import ClearIcon from '@mui/icons-material/Clear'
import { Input } from '../common/input/input'
import { Button } from '../common/button/button'
import { useDispatch } from 'react-redux'
import { search } from '../store/post_slice'
import { useState } from 'react'

export type SearchFieldProps = {
  classNames?: {
    base?: string
    container?: string
  }
}

export function SearchField({ classNames }: SearchFieldProps) {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
    dispatch(search(event.target.value.toLowerCase().trim()))
  }

  function handleOnClick() {
    setSearchValue('')
    dispatch(search(''))
  }

  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <div className={clsx(styles.container, classNames?.container)}>
        <Image src={search_icon} alt="Search Icon" height={20} width={20} />
        <Input
          value={searchValue}
          onChange={handleOnChange}
          placeholder="Search Reddit"
          name={'search_input'}
          classNames={{ base: styles.baseInput }}
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

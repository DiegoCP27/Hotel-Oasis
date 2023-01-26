import { useState } from 'react'
import { IoMenu, IoCloseSharp } from 'react-icons/io5'
import { ItemNavbarProps } from '@/models'
import styles from './MenuNavbarMobile.module.scss'

interface MenuNavbarDesktopProps {
  listItems: ItemNavbarProps[]
}

const MenuNavbarMobile = ({ listItems }: MenuNavbarDesktopProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownStyles, setDropdownStyles] = useState(styles.dropdownContent)

  const handleClick = (): void => {
    setIsOpen(!isOpen)
    setDropdownStyles(isOpen ? styles.dropdownContent : styles.show)
  }

  const handleClose = (): void => {
    setIsOpen(false);
    setDropdownStyles(styles.dropdownContent);
}

  return (
    <div className={styles.dropdownContainer}>
      <a
        href="#"
        className={styles.Humburguer}
        onClick={(e) => {
          e.preventDefault()
          handleClick()
        }}
      >
        {isOpen ? <IoCloseSharp /> : <IoMenu />}
      </a>
      <ul className={`${dropdownStyles}`}>
        {listItems
            ? listItems.map((item: ItemNavbarProps) => (
                <li key={item.id}>
                  <a className={styles.Links} href={item.url} onClick={handleClose}>
                    {item.name}
                  </a>
                </li>
            ))
            : null}
      </ul>
    </div>
  )
}

export default MenuNavbarMobile

import styles from './MenuNavbarDesktop.module.scss'
import { ItemNavbarProps } from '@/models'
import { useCallback } from 'react'

interface MenuNavbarDesktopProps {
  listItems: ItemNavbarProps[]
}

const MenuNavbarDesktop = ({ listItems }: MenuNavbarDesktopProps): JSX.Element => {

  const handleClick = useCallback((id:string) => {
    const element = document.getElementById(id);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
  }, [])

  return (
    <ul className={styles.Menu}>
      {listItems.map((item: ItemNavbarProps) => (
        <li key={item.id}>
          <a href={item.url} onClick={() => handleClick(item.id.toString())}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MenuNavbarDesktop

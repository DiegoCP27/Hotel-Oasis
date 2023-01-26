import styles from './Navbar.module.scss'
import { useWindowSize } from '@/hooks'
import { MenuNavbarDesktop, MenuNavbarMobile } from '@/components'
import { DataContactoCorporativos } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = (): JSX.Element => {
  const { width } = useWindowSize()

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__logo} style={{ gridArea: 'logo' }}>
        <Link href="/">
          <Image alt='' src='/pages/home/logo.png' width={262} height={65}></Image>
        </Link>
      </div>

      {width < 1200
        ? (
        <MenuNavbarMobile listItems={ DataContactoCorporativos } />
          )
        : (
        <MenuNavbarDesktop listItems={ DataContactoCorporativos } />
          )}
    </div>
  )
}

export default Navbar

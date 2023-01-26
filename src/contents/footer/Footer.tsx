import styles from './Footer.module.scss'

const Footer = (): JSX.Element => {

  return (
    <>
    <div className={styles.Footer}>
      <p>© Copyright <b>hotelcluboasis.com</b> ® . All Rights Reserved</p>
      <p>Designed <a target="_blank" href="https://www.instagram.com/diegocp27/">by DMCP.</a></p>
    </div>
    </>
  )
}

export default Footer

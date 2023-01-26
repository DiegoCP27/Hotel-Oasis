import { ImFacebook, ImWhatsapp } from "react-icons/im";
import styles from './Botones.module.scss';

const FacebookButton = () => {

  return (
    <>
      <a href="https://www.facebook.com/Hotel-Oasis-111943853590946" target="_blank" className={styles.FacebookBtn}>
        <ImFacebook />
      </a>
      <a href="https://wa.me/+51930667265" target="_blank" className={styles.WhatsAppBtn}>
        <ImWhatsapp />
      </a>
    </>
  )
}

export default FacebookButton;
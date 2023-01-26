import { Public } from '@/layouts'
import type { NextPage } from 'next'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styles from '@styles/hotel-oasis/HotelOasis.module.scss'
import { BsCheck } from "react-icons/bs"
import { Botones, Lightbox } from '@/components'
import { ImHeart, ImLocation, ImMobile } from 'react-icons/im'
import { FaRegEnvelope } from "react-icons/fa"
import { DataHabitaciones } from '@/data/habitaciones-data/Habitaciones'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <>
      <Public>
        <div id={'home'}>
          <Carousel showStatus={false} infiniteLoop={true} showThumbs={false} autoPlay={true} swipeable={true} emulateTouch={true} interval={6000}>
            <div>
              <img src="/pages/home/1.jpg" />
            </div>
            <div>
              <img src="/pages/home/2.jpg" />
            </div>
            <div>
              <img src="/pages/home/9.jpg" />
            </div>
            <div>
              <img src="/pages/home/8.jpg" />
            </div>
            <div>
              <img src="/pages/home/billar.jpg" />
            </div>
            <div>
              <img src="/pages/home/sauna.jpg" />
            </div>
          </Carousel>
        </div>

        <Botones/>

        <div id={'nosotros'} className={styles.Section2}>
          <img className={styles.Section2__imagenizq} alt='' src={"/pages/home/Piscina.jpg"}/>
          <div className={styles.Section2__texto}>
            <h4><b><em>HOTEL OASIS</em></b></h4>
            <p>Carabayllo es una ciudad en la que la gente sabe cómo divertirse con estilo, y para responder a las necesidades del visitante, nada mejor que el Hotel Oasis, un espacio pensado para mezclar el disfrute y la exclusividad. Agrégale romanticismo a tus fechas especiales con los packs decorativos que tenemos para ti.</p>
            <div className={styles.Izq}>
              <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Experiencia.</p>
              <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Calidad de servicio.</p>
              <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Privacidad Garantizada.</p>
              <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Variedad y disfrute.</p>
              <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Ambiente sensual y Temático.</p>
            </div>
          </div>
        </div>

        <div className={styles.Section3}>
          <div className={styles.Section3__fondo}>
            <h1>Bienvenido a su Hotel Oasis… Ven y déjate llevar</h1>
          </div>
        </div>

        <div className={styles.Section4} id={'habitaciones'}>
          <Lightbox images={DataHabitaciones} />
        </div>

        <Carousel className={styles.Section5} showStatus={false} infiniteLoop={true} showThumbs={false} autoPlay={true} swipeable={true} emulateTouch={true} interval={3000} showArrows={false} showIndicators={false} >
            <div className={styles.Fondo}>
                <ImHeart />
                <p className={styles.Fondo__frase}>Mi opinión en lo que se refiere al placer es que hay que emplear todos los sentidos.</p>
                <p><em>Marqués de Sade</em></p>
            </div>
            <div className={styles.Fondo}>
                <ImHeart/>
                <p className={styles.Fondo__frase}>Un orgasmo al día es la llave de la alegría.</p>
                <p><em>Anónimo</em></p>
            </div>
            <div className={styles.Fondo}>
                <ImHeart/>
                <p className={styles.Fondo__frase}>Y si me ves mordiéndome los labios, es precisamente para evitar terminar arrancándote los tuyos.</p>
                <p><em>Edwin Vergara</em></p>
            </div>
        </Carousel>

        <div id={'contacto'} className={styles.Section6}>
          <div className={styles.title}>
            <h1>CONTÁCTANOS</h1>
            <div className={styles.Line}/>
          </div>
          <div className={styles.Contacto}>
            <div className={`${styles.Container} ${styles.Container__altura}`}>
              <ImMobile className={styles.Container__iconsize}/>
              <p>Llamar: +51 930 667 265<br/><br/>Atención: 24hrs</p>
            </div>
            <div className={styles.Container}>
              <FaRegEnvelope className={styles.Container__iconsize}/>
              <p>hotelcluboasis@gmail.com</p>
            </div>
            <div className={styles.Container}>
              <ImLocation className={styles.Container__iconsize}/>
              <p>Jr Moquegua 232 Alt Km. 17 de la Av. Tupac Amaru Carabayllo - Lima</p>
            </div>
          </div>
          <div className={styles.Mapa}>
            <Link target="_blank" className={styles.Mapa__mapa} href={'https://www.google.com/maps/place/Oasis+Club/@-11.8939047,-77.0270967,18z/data=!4m8!3m7!1s0x9105d091e9da5491:0x354c6b07f0afff3d!5m2!4m1!1i2!8m2!3d-11.8941258!4d-77.0264033'}>
            <Image src={'/pages/home/mapa.jpg'} alt={'mapa'} width={500} height={500}></Image>
            </Link>
          </div>
        </div>

        <div className={styles.Section7}>
          <div className={styles.Container1}>
            <h1>Hotelcluboasis.com</h1>
            <p>Atrévete a entrar en un mundo de fantasía exótica. Nuestro Hotel Oasis te brindan un ambiente romántico que te inspirará a ti y a tu pareja a encender y renovar sus pasiones con ese toque sensual, especial y temático que sin duda se convertirá en una experiencia inolvidable y que inevitablemente desearás volver a vivir...</p>
          </div>
          <div className={styles.Container2}>
            <h1>INFORMACIÓN DE CONTACTO</h1>
            <p><span>Teléfono:</span> +51 930 667 265</p>
            <p><span>Horas de Atención al Cliente:</span> 24hrs</p>
            <p><span>Dirección:</span> Jr Moquegua 232 Alt Km. 17 de la Av. Tupac Amaru Carabayllo - Lima</p>
          </div>
        </div>
      </Public>
    </>
  )
}

export default Home
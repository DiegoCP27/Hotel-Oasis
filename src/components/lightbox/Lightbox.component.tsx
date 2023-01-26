import { useState } from 'react';
import styles from './Lightbox.module.scss';
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Lightbox = ({ images }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageText, setCurrentImageText] = useState("");

  const handleOpen = (index: number) => {
    setIsOpen(true);
    setCurrentImageIndex(index);
    document.body.classList.add("no-scroll");
    setCurrentImageText(images[index].text);
  }

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  }

  const handlePrev = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    if(newIndex >= 0 && newIndex < images.length) {
      setCurrentImageIndex(newIndex);
      setCurrentImageText(images[newIndex].text);
    }
  }

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    if(newIndex >= 0 && newIndex < images.length) {
      setCurrentImageIndex(newIndex);
      setCurrentImageText(images[newIndex].text);
    }
  }

  return (
    <div>
      <div className={styles.title}>
        <h1>HABITACIONES</h1>
        <div className={styles.Line}/>
      </div>
      <div className={styles.imageGrid}>
        {images.map((image: any, index: number) => (
          <img 
            src={image.src} 
            key={index} 
            onClick={() => handleOpen(index)}
          />
        ))}
      </div>
      {isOpen && (
        <div className={`${styles.lightbox} ${isOpen ? styles.show: ''}`}>
          <div className={styles.lightboxContent}>
            <button className={styles.lightboxPrevBtn} onClick={handlePrev}><BiCaretLeft/></button>
              <div className={styles.lightboxImgText}>
                <img src={images[currentImageIndex].src} className={styles.lightboxImg}/>
                <ReactMarkdown 
                className={styles.lightboxText} 
                remarkPlugins={[remarkGfm]}
                >
                  {currentImageText}
                </ReactMarkdown>
              </div>
            <button className={styles.lightboxNextBtn} onClick={handleNext}><BiCaretRight/></button>
            <button className={styles.lightboxCloseBtn} onClick={handleClose}><IoMdClose/></button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Lightbox;
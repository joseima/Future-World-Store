"use client"
import { useState } from 'react';
import styles from './Description.module.sass';
import Image from 'next/image';
import classNames from 'classnames/bind';


export const Description = () => {
    const [hasBorder, setHasBorder] = useState(false);
    const  handleClick = () => setHasBorder(!hasBorder);

    const cx = classNames.bind(styles);
    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
    }); 
  return (
    <section className={styles.Description}>
        <button onClick={handleClick} className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
            <Image
                src="/images/description.jpeg"
                alt="products marketplace"
                fill
            />
            </div>
        </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}
import Image from 'next/image';
import Link from 'next/link';
import mlImage from './ml_trading.png'; 
import React from 'react';
import styles from './styles.module.css';
export default function Page() {
  return (
    <div className="container">
      <h1 className="head">ML Stock Prediction</h1> 
      <p className="description">
        How I got to the project:
        <br/>
        Since I already started it in the past I kept going with it this time I was sure everything would be fine because I realised I could create a simple algorithm and then apply ml to it but guess what, the api I wanted to use was from age 18+, so I just added some line in pycharm which told me to keep grinding on the project in a year and half when I&apos;m 18.
        <br/>
        What I did:
        <br/>
       I built a machine learning model and trained it to predict stock open, high, low, volume, and close values. It achieved a very low loss function, which is excellent because a lower loss function indicates a more accurate model.
      <div className={styles.images}>
        <div className={styles.imageContainer}>
          <Image
            src={mlImage}
            alt="ML Stock Prediction"
            width={450}
            height={300}
          />
          <ul className="linksprj">
            <li className="linkprj">
              <Link href="https://www.linkedin.com/feed/">LinkedIn</Link> 
            </li>
            <li className="linkprj">
              <Link href="https://github.com/UnmatchedPerspicacious">Github</Link> 
            </li>
            <li className="linkprj">
              <Link href="https://www.instagram.com/eshesthenics/">Instagram</Link> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

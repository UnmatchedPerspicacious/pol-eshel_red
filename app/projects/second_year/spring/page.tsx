import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mlImage from './ml_trading.png';
import styles from './styles.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>ML Stock Prediction</h1>
      <p className={styles.description}>
        How I got to the project:
        <br />
        Basically, I already had the algo trading project going, but I decided to take a different approach. Instead of creating the algorithm first, I thought it would be beneficial to build a machine learning model first. This would not only help me learn more about ML, but also potentially improve my future algorithm.
        <br />
        What I did:
        <br />
        I built a machine learning model and trained it to predict stock open, high, low, volume, and close values. It achieved a very low loss function, which is excellent because a lower loss function indicates a more accurate model.
      </p>
      <div className={styles.images}>
        <div className={styles.imageContainer}>
          <Image
            src={mlImage}
            alt="ML Stock Prediction"
            width={450}
            height={300}
          />
          <ul className={styles.linksprj}>
            <li className={styles.linkprj}>
              <Link href="https://www.linkedin.com/feed/">LinkedIn</Link>
            </li>
            <li className={styles.linkprj}>
              <Link href="https://github.com/UnmatchedPerspicacious">Github</Link>
            </li>
            <li className={styles.linkprj}>
              <Link href="https://www.instagram.com/eshesthenics/">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

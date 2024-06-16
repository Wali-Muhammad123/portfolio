"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './CircularImage.module.css';

const CircularImageWithBackground = ({ src, alt, width, height }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      {isLoading && <div className={styles.skeleton} style={{ width, height }}></div>}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${styles.circularImage} ${isLoading ? styles.hidden : ''}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default CircularImageWithBackground;

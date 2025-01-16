// components/SkeletonLoader.tsx
import React from 'react';
import styles from '../styles/SkeletonLoader.module.css';

const SkeletonLoader = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonText}></div>
      <div className={styles.skeletonText}></div>
    </div>
  );
};

export default SkeletonLoader;

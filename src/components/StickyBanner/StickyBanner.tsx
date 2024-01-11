import React from "react";
import styles from "@/styles/components/StickyBanner.module.scss";

interface StickyBannerProps {
  show: boolean;
  disable: () => void;
}

function StickyBanner({ show, disable }: StickyBannerProps) {
  return (
    <div className={show ? styles.df : styles.dn}>
      <div className={styles.wrapper}>
        <button className={styles.bannerClose} onClick={disable}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </button>
        <div className={styles.container}>
          <h1>Black Friday</h1>
          <h2>10%OFF</h2>
          <h4>
            Use code <b>10FRIDAY</b> at checkout
          </h4>
          <a href="#" className={styles.bannerButton}>
            <p>
              Shop now<span className={styles.dnMobile}> through Monday</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default StickyBanner;

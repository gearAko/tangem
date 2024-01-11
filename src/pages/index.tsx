import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header/Header";
import StickyBanner from "@/components/StickyBanner/StickyBanner";

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);
  const [bannerFlag, setBannerFlag] = useState(true);
  const bannerRef = useRef<HTMLDivElement>(null);

  function disableBanner() {
    localStorage.setItem("bannerFlag", "false");
    setBannerFlag(false);
    setShowBanner(false);
  }

  function verifyBannerFlag() {
    const offset = 50;
    const scrollHeight = window.scrollY;

    if (bannerFlag && scrollHeight > offset) setShowBanner(true);
    else setShowBanner(false);
  }

  useEffect(() => {
    let storedFlag = localStorage.getItem("bannerFlag");

    if (storedFlag === null) {
      localStorage.setItem("bannerFlag", "true");
      setBannerFlag(true);
    } else {
      setBannerFlag(storedFlag === "true");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      verifyBannerFlag();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bannerFlag]);

  return (
    <>
      <Head>
        <title>Tangem Test Task</title>
        <meta name="description" content="Tangem Test Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Header reff={bannerRef} />
        <StickyBanner show={showBanner} disable={disableBanner} />
      </main>
    </>
  );
}

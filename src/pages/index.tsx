import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Kims Seite</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.headphone}>
          <h2> For a better experience, please use headphones.</h2>
        </div>
        <div className={styles.intro}>
          <h2>
            Kim Engelhardt is a spoken language and oral expression specialist. She offers courses
            and trainings to clients looking to enhance their oral expression abilities, whether it
            is in the context of acting, of public speaking, or of business.
          </h2>
          <Link href="/audiojourney">
            <a>Start Here</a>
          </Link>
        </div>
        <div className={styles.image1}></div>
        <div className={styles.image2}></div>
        <div className={styles.image3}></div>
      </section>
    </Layout>
  );
}

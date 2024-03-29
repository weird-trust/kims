import Head from 'next/head';
import Audionavigation from '../components/Audionavigation';
import Content from '../components/Content';
import Layout from '../components/Layout';
import { AudioPlayer } from '../components/AudioPlayer';

import data from './api/data';

export default function Audiojourney() {
  return (
    <Layout>
      <Head>
        <title>Audiojourney</title>
      </Head>
      <Audionavigation />
      <AudioPlayer />
      <Content index={data.content} content={data.content} />
    </Layout>
  );
}

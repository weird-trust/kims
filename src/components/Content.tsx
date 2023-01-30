import { useState } from 'react';

import styles from '../pages/content.module.scss';

import { ContentProps } from '../utils/interfaces';

import useAudioStore from '../store/audio';

export default function Content({ content }: ContentProps) {
  const playing = useAudioStore((state) => state.playing);
  const activeId = useAudioStore((state) => state.activeId);

  const activeChapter = content.find(({ id }) => id === activeId);

  return (
    <section className={styles.container}>
      <div className={styles.infoarea}>{activeId && <p>{activeChapter?.copy}</p>}</div>
      <div className={styles.chapter}>{activeId && <p>{activeChapter?.id}</p>}</div>
      <div className={styles.contact}>
        <a href="">contact me</a>
      </div>
    </section>
  );
}

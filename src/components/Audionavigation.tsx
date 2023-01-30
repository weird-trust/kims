import { useEffect, useState, useRef } from 'react';

import useAudioStore from '../store/audio';

import data from '../pages/api/data';
import styles from '../pages/audiojourney.module.scss';

export default function Audionavigation() {
  const audio = useRef<HTMLAudioElement>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const { playing, setPlaying, activeId, setActiveId } = useAudioStore();

  useEffect(() => {
    if (!audio.current) return;

    if (playing) audio.current.play();
    else audio.current.pause();
  }, [playing]);

  return (
    <div className={styles.container}>
      <div className={styles.navbarItem} ref={ref}>
        {data.content.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => {
              setPlaying(!playing);
              setActiveId(chapter.id);
            }}>
            {chapter.title}
          </button>
        ))}
      </div>
      <div className={styles.pause}>
        <button type="button" onClick={() => setPlaying(!playing)}>
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}

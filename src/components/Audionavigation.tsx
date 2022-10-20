import {useEffect, useRef} from 'react';

import useAudioStore from '../store/audio';

import data from '../pages/api/data';

import styles from '../pages/audiojourney.module.scss';

export default function Audionavigation() {
  const audio = useRef<HTMLAudioElement>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const {paused, togglePlay} = useAudioStore();

  useEffect(() => {
    if (!audio.current) return;

    if (paused) audio.current.pause();
    else audio.current.play();
  }, [paused]);

  return (
    <div className={styles.container}>
      <audio
        ref={audio}
        src="https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
        onTimeUpdate={(e) => {
          if (!ref.current) return;
          const target = e.target as HTMLAudioElement;
          const progress = target.currentTime / target.duration;
          ref.current.setAttribute('style', `width: ${progress * 100}%`);
        }}
      />
      <div className={styles.navbar}>
        <div className={styles.navbarItem} ref={ref}>
          {data.content.map((chapter) => (
            <a key={chapter.id}>{chapter.title}</a>
          ))}
        </div>
      </div>
      <div className={styles.pause}>
        <button type="button" onClick={togglePlay}>
          {paused ? 'Play' : 'Pause'}
        </button>
      </div>
    </div>
  );
}

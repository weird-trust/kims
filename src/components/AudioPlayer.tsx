import useAudioStore from '../store/audio';
import { useEffect, useRef } from 'react';

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const setPlaying = useAudioStore((state) => state.setPlaying);
  const setDuration = useAudioStore((state) => state.setDuration);

  const playing = useAudioStore((state) => state.playing);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <audio
      ref={audioRef}
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      onLoadedMetadata={(e) => setDuration((e.target as HTMLAudioElement).duration)}
      // onTimeUpdate={(e) => {
      //   if (!audioref.current) return;
      //   const target = e.target as HTMLAudioElement;
      //   const progress = target.currentTime / target.duration;
      //   audioRef.current.setAttribute('style', `width: ${progress * 100}%`);
      // }}
      src="https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
    />
  );
};

// useEffect(() => {
//   if (!audioRef.current) return;

//   if (playing) {
//     audioRef.current.play()
//   }
// }, [source, playing]);

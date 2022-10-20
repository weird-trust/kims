import create from 'zustand';
import {devtools} from 'zustand/middleware';

interface AudioProps {
  paused: boolean;
  togglePlay: () => void;
}

const useAudioStore = create<AudioProps>()(
  devtools((set) => ({
    paused: true,
    togglePlay: () => set((prev) => ({paused: !prev.paused})),
  }))
);

export default useAudioStore;

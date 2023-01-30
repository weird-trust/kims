import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface AudioProps {
  playing: boolean;
  duration: number;
  activeId?: number;

  setPlaying: (playing: boolean) => void;
  setDuration: (duration: number) => void;
  setActiveId: (id: number) => void;
}

const useAudioStore = create<AudioProps>((set, get) => ({
  playing: false,
  duration: 0,
  activeId: undefined,

  setActiveId: (id: number) => set({ activeId: id }),
  setPlaying: (playing: boolean) => set({ playing }),
  setDuration: (duration: number) => set({ duration }),
}));

export default useAudioStore;

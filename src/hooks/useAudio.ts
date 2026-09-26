export interface HTMLAudioState {
  volume: number;
  playing: boolean;
}

export interface HTMLAudioProps {
  src: string;
  autoReplay?: boolean;
}

export function useAudio(props: HTMLAudioProps) {
  const [element] = useState(() => {
    const audio = new Audio(props.src);
    audio.preload = "auto";
    return audio;
  });
  const ref = useRef<HTMLAudioElement>(element);

  const [state, setState] = useState<HTMLAudioState>({
    volume: element.volume,
    playing: !element.paused
  });

  const setAudioState = (value: Partial<HTMLAudioState>) => {
    setState((prev) => ({
      ...prev,
      ...value
    }));
  };

  const controls = {
    play: (): Promise<void> | void => {
      const el = ref.current;
      if (el) {
        setAudioState({ playing: true });
        return el.play();
      }
    },

    pause: (): Promise<void> | void => {
      const el = ref.current;
      if (el) {
        setAudioState({ playing: false });
        return el.pause();
      }
    },

    toggle: (target?: boolean): Promise<void> | void => {
      const el = ref.current;
      if (el) {
        const shouldPlay = typeof target === "boolean" ? target : el.paused;
        setAudioState({ playing: shouldPlay });
        return shouldPlay ? el.play() : el.pause();
      }
    },

    volume: (value: number): void => {
      const el = ref.current;
      if (el) {
        value = Math.min(1, Math.max(0, value));
        el.volume = value;
        setAudioState({ volume: value });
      }
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const syncVolume = () => {
      setAudioState({ volume: el.volume });
    };
    const syncPlaying = () => {
      setAudioState({ playing: !el.paused });
    };
    const handleEnded = () => {
      if (props.autoReplay) {
        void el.play();
        setAudioState({ playing: true });
        return;
      }

      setAudioState({ playing: false });
    };

    el.addEventListener("volumechange", syncVolume);
    el.addEventListener("play", syncPlaying);
    el.addEventListener("pause", syncPlaying);
    el.addEventListener("ended", handleEnded);

    return () => {
      el.removeEventListener("volumechange", syncVolume);
      el.removeEventListener("play", syncPlaying);
      el.removeEventListener("pause", syncPlaying);
      el.removeEventListener("ended", handleEnded);
    };
  }, [props.autoReplay]);

  useEffect(() => {
    const el = ref.current!;

    if (!el) return;

    const resolvedSrc = new URL(props.src, window.location.href).href;
    if (el.src !== resolvedSrc) {
      const shouldResume = !el.paused;

      el.pause();
      el.preload = "auto";
      el.src = props.src;
      el.load();
      setAudioState({
        volume: el.volume,
        playing: false
      });

      if (shouldResume) {
        void el.play().catch(() => {
          setAudioState({ playing: false });
        });
      }
      return;
    }

    setAudioState({
      volume: el.volume,
      playing: !el.paused
    });
  }, [props.src]);

  return [element, state, controls, ref] as const;
}

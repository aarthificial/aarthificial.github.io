import {createSignal} from 'solid-js';
import YouTube from '../icons/YouTube';
import styles from './Video.module.css';

export interface VideoProps {
  id: string;
  src: string;
  className: string;
  alt: string;
  color: string;
}

export default function Video({id, src, alt, color, className}: VideoProps) {
  const [isActive, setActive] = createSignal(false);

  return (
    <>
      {isActive() ? (
        <iframe
          class={className}
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          style={`background-color: ${color}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div class={`${className} ${styles.root}`}>
          <img
            src={src}
            alt={alt}
            style={`background-color: ${color}`}
            onclick={() => setActive(true)}
            width={'100%'}
          />
          <YouTube />
        </div>
      )}
    </>
  );
}

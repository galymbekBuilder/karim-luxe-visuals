import type { MediaItem } from '@/data/works';

type MediaFrameProps = {
  item: MediaItem;
  alt: string;
  className?: string;
};

const MediaFrame = ({ item, alt, className }: MediaFrameProps) => {
  if (item.type === 'video') {
    return (
      <video
        src={item.src}
        poster={item.poster}
        className={className}
        aria-label={alt}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return <img src={item.src} alt={alt} className={className} loading="lazy" />;
};

export default MediaFrame;

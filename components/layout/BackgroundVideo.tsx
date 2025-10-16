"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import MuxPlayer from "@mux/mux-player-react/lazy";

interface BackgroundVideoProps {
  mobilePlaybackId: string;
  desktopPlaybackId: string;
  overlayColor?: string;
}

const BackgroundVideo = ({ mobilePlaybackId, desktopPlaybackId, overlayColor = 'bg-black/60' }: BackgroundVideoProps) => {
  const isMobile = useIsMobile();
  const playbackId = isMobile ? mobilePlaybackId : desktopPlaybackId;

  return (
    <div className="absolute inset-0 z-0">
      <MuxPlayer
        playbackId={playbackId}
        autoPlay="muted"
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 ${overlayColor}`}></div>
    </div>
  );
};

export default BackgroundVideo;

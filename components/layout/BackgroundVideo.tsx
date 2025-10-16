"use client";

import { useIsMobile } from "@/hooks/use-mobile";

interface BackgroundVideoProps {
  mobileVideo: string;
  desktopVideo: string;
  overlayColor?: string;
}

const BackgroundVideo = ({ mobileVideo, desktopVideo, overlayColor = 'bg-black/60' }: BackgroundVideoProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 z-0">
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={isMobile ? mobileVideo : desktopVideo}
      />
      <div className={`absolute inset-0 ${overlayColor}`}></div>
    </div>
  );
};

export default BackgroundVideo;

import React from 'react';

interface VirtualTourEmbedProps {
  url: string;
  title: string;
  className?: string;
}

// Responsive aspect-ratio container for virtual tours (Klapty, etc.)
export function VirtualTourEmbed({ url, title, className }: VirtualTourEmbedProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-lg border border-gray-300 bg-black aspect-video ${className || ''}`}>
      <iframe
        src={url}
        title={`${title} 360° Virtual Tour`}
        loading="lazy"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

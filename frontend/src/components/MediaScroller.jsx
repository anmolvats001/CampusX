import React, { useRef, useState, useEffect } from "react";

const MediaScroller = ({ items }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  };
  const handleScroll = () => {
    const container = containerRef.current;
    const itemWidth = container.offsetWidth;
    const index = Math.round(container.scrollLeft / itemWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth scroller"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-full snap-center flex justify-center items-center"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                className="w-full h-[450px] object-contain rounded-xl"
              />
            ) : (
              <div className="relative">
                <video
        ref={videoRef}
        src={item.src}
        className="w-full h-[450px] object-contain rounded-xl"
        autoPlay
        loop
        muted
        playsInline
      />

      <p
        onClick={toggleMute}
        className="absolute bottom-3 right-3 bg-gray-500 text-white px-1 py-1 rounded-full text-sm"
      >
        {muted ? "🔇" : "🔊"}
      </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === i ? "bg-white w-4" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaScroller;

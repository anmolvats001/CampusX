import React, { useRef, useState, useEffect } from "react";

const MediaScroller = ({ items }) => {
  const containerRef = useRef(null);
  const videoRefs = useRef([]); // multiple video refs
  const [activeIndex, setActiveIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState({});

  // Handle mute toggle (per video)
  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.muted = !video.muted;

    setMutedStates((prev) => ({
      ...prev,
      [index]: video.muted,
    }));
  };

  // horizontal scroll snap tracking
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = container.offsetWidth;
    const index = Math.round(container.scrollLeft / itemWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // vertical viewport visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            // Play only if this is the active slide
            if (index === activeIndex) {
              entry.target.play();
              entry.target.muted = mutedStates[index] ?? true;
            }
          } else {
            entry.target.pause();
            entry.target.muted = true; // force mute when hidden
          }
        });
      },
      { threshold: 0.1 }
    );

    videoRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [activeIndex, mutedStates]);

  return (
    <div className="w-full sroller">
      <div
        ref={containerRef}
        className="w-full flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth scroller"
      >
        {items.map((item, i) => (
          <div key={i} className="min-w-full snap-center flex justify-center">
            {item.type === "image" ? (
              <img
                src={item.src}
                className="w-full h-[450px] object-contain rounded-xl"
              />
            ) : (
              <div className="relative">
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  data-index={i}
                  src={item.src}
                  className="w-full max-h-[570px] object-contain rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                <p
                  onClick={() => toggleMute(i)}
                  className="absolute bottom-3 right-3 bg-gray-500 text-white px-1 py-1 rounded-full text-sm"
                >
                  {mutedStates[i] ?? true ? "🔇" : "🔈"}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* dot indicator */}
      <div className="flex justify-center gap-2 mt-3">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              activeIndex === i ? "bg-white w-4" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MediaScroller;

const STAR_COUNT = 320;
const STAR_SEED = 7321;
const MIN_TWINKLE_DURATION = 1.4;
const TWINKLE_DURATION_VARIANCE = 1.8;
const MAX_TWINKLE_DELAY = 2;
const MIN_DRIFT_DURATION = 3.6;
const DRIFT_DURATION_VARIANCE = 4.4;

type Star = {
  top: string;
  left: string;
  size: string;
  opacity: string;
  blur: string;
  twinkleDuration: string;
  twinkleDelay: string;
  driftDuration: string;
  driftDelay: string;
};

const createSeededRandom = (seed: number) => {
  let value = seed;

  return () => {
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
};

const formatNumber = (value: number) =>
  value.toFixed(6).replace(/\.?0+$/, "");

const stars: Star[] = (() => {
  const random = createSeededRandom(STAR_SEED);

  return Array.from({ length: STAR_COUNT }, () => {
    const driftDuration =
      MIN_DRIFT_DURATION + random() * DRIFT_DURATION_VARIANCE;

    return {
      top: `${formatNumber(random() * 100)}%`,
      left: `${formatNumber(random() * 100)}%`,
      size: `${formatNumber(0.55 + random() * 1.55)}px`,
      opacity: formatNumber(0.4 + random() * 0.6),
      blur: `${formatNumber(random() * 0.45)}px`,
      twinkleDuration: `${formatNumber(
        MIN_TWINKLE_DURATION + random() * TWINKLE_DURATION_VARIANCE
      )}s`,
      twinkleDelay: `${formatNumber(random() * MAX_TWINKLE_DELAY)}s`,
      driftDuration: `${formatNumber(driftDuration)}s`,
      driftDelay: `${formatNumber(-random() * driftDuration)}s`,
    };
  });
})();

const StarBackground = () => {
  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden opacity-90">
      <div className="relative w-full h-full">
        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute will-change-transform"
            style={{
              top: star.top,
              left: star.left,
              animationName: "starDriftUp",
              animationDuration: star.driftDuration,
              animationTimingFunction: "linear",
              animationDelay: star.driftDelay,
              animationIterationCount: "infinite",
            }}
          >
            <span
              className="block rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                filter: `blur(${star.blur})`,
                animationName: "twinkle",
                animationDuration: star.twinkleDuration,
                animationTimingFunction: "ease-in-out",
                animationDelay: star.twinkleDelay,
                animationIterationCount: "infinite",
                animationDirection: "alternate",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarBackground;

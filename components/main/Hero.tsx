import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      id="about-me"
      className="relative flex min-h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-blackhole-video rotate-180 absolute top-[-360px] left-0 z-[1] h-[160%] w-full object-cover bg-transparent pointer-events-none"
      >
        {/* <source src="/blackhole.webm" type="video/webm" /> */}
        <source src="/blackhole1.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
};
export default Hero;

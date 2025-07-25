export default function HeroVideo() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      <video
        src="/dev_vid_3.mov"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white px-6 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Why Choose Profixx?</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            Discover how our innovative cloud solutions empower businesses to operate smarter, faster, and more securely.
          </p>
        </div>
      </div>
    </section>
  );
}

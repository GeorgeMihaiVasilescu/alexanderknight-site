export default function Home() {
  return (
    <main className="w-full h-screen bg-white text-black overflow-hidden relative">
      {/* VIDEO CENTERED, OPAC */}
      <div className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center bg-white">
        <video
          className="w-full h-auto max-h-[80%]"
          src="/reel.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* TEXT DEASUPRA */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-2xl md:text-3xl font-bold text-black">
        Alexander Knight · Tattoo Artist
      </div>

      {/* BOOK NOW BUTTON */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <a
          href="https://buy.stripe.com/cNi3cw7L9dKU8sYcq5aEE00"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black border border-black px-8 py-4 text-lg rounded-2xl hover:bg-black hover:text-white transition-all"
        >
          Book Now
        </a>
      </div>

      {/* INSTAGRAM HANDLE */}
      <div className="absolute bottom-4 right-4 z-20">
        <a
          href="https://instagram.com/darkart_ink_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-black transition"
        >
          @darkart_ink_
        </a>
      </div>
    </main>
  );
}


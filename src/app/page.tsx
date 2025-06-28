export default function Home() {
  return (
    <main className="w-full h-screen bg-white text-black overflow-hidden relative">
      {/* Centered Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-white">
        <video
          className="w-auto h-[70vh] sm:h-[80vh] object-contain bg-white"
          src="/reel.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Title */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 text-xl font-semibold text-black text-center px-4">
        Alexander Knight · <br /> Tattoo Artist
      </div>

      {/* Book Now Button */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <a
          href="https://buy.stripe.com/cNi3cw7L9dKU8sYcq5aEE00"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black border border-black px-6 py-3 text-lg rounded-2xl hover:bg-black hover:text-white transition-all"
        >
          Book Now
        </a>
      </div>

      {/* Instagram Link */}
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



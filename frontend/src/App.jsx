export default function App() {
  const categories = [
    "Outfit",
    "Top",
    "Bottom",
    "Dress",
    "Saree",
    "Accessories",
    "Earrings",
    "Bindi",
  ];

  const inventory = new Array(24).fill(0);

  return (
    <div className="h-screen overflow-hidden bg-[#f5f2f8] text-[#7e6f93] font-sans">
      {/* Main Container */}
      <div className="mx-auto flex h-full max-w-[1600px] flex-col">

        {/* TOPBAR */}
        <header className="flex items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <PixelButton>←</PixelButton>
            <PixelButton>🛒</PixelButton>
            <PixelButton>👤</PixelButton>
            <PixelButton>📷</PixelButton>
          </div>

          <PixelButton>☰</PixelButton>
        </header>

        {/* CENTER SECTION */}
        <main className="relative flex-1 overflow-hidden px-4 md:px-8">
          <div className="grid h-full grid-cols-1 md:grid-cols-[1fr_auto_120px] items-center">

            {/* LEFT DECORATIONS */}
            <div className="hidden h-full items-center justify-center md:flex">
              <div className="space-y-6 opacity-50">
                <DecorationCard>☁️</DecorationCard>
                <DecorationCard>🌸</DecorationCard>
                <DecorationCard>🐱</DecorationCard>
              </div>
            </div>

            {/* CHARACTER STAGE */}
            <div className="relative flex items-center justify-center">
              <div className="relative flex h-[260px] w-[220px] items-center justify-center md:h-[340px] md:w-[300px]">

                {/* Character Glow */}
                <div className="absolute h-52 w-52 rounded-full bg-pink-100 blur-3xl opacity-40" />

                {/* Character Placeholder */}
                <div className="pixel-border relative flex h-[220px] w-[160px] items-center justify-center bg-[#fffafb] md:h-[300px] md:w-[220px]">
                  <div className="pixel-art text-center">
                    <div className="text-6xl md:text-8xl">🧍🏻‍♀️</div>
                    <p className="mt-4 text-xs tracking-widest text-[#9e91b0] md:text-sm">
                      AVATAR STAGE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-4 md:relative md:right-0 md:top-0 md:translate-y-0">
              <PixelButton>↺</PixelButton>
              <PixelButton>🗑</PixelButton>
              <PixelButton>🎲</PixelButton>
              <PixelButton>💾</PixelButton>
            </div>
          </div>
        </main>

        {/* CATEGORY TABS */}
        <section className="px-2 pb-2 md:px-6">
          <div className="scrollbar-hide flex gap-3 overflow-x-auto py-2">
            {categories.map((item, index) => (
              <button
                key={item}
                className={`pixel-border min-w-[90px] px-4 py-3 text-xs md:text-sm ${index % 2 === 0
                    ? "bg-[#e7ddff]"
                    : "bg-[#ffdce9]"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* INVENTORY */}
        <section className="px-2 pb-4 md:px-6 md:pb-6">
          <div className="pixel-border h-[240px] overflow-y-auto bg-[#fffdfd] p-3 md:h-[320px]">
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10">
              {inventory.map((_, index) => (
                <div
                  key={index}
                  className="pixel-border aspect-square bg-[#f4f1f6] transition-transform hover:-translate-y-1"
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* GLOBAL STYLES */}
      <style>{`
        .pixel-border {
          border: 3px solid #ddd5ea;
          border-radius: 14px;
          box-shadow: 4px 4px 0px #ece7f4;
        }

        .pixel-art {
          image-rendering: pixelated;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

function PixelButton({ children }) {
  return (
    <button className="pixel-border flex h-14 w-14 items-center justify-center bg-[#fffdfd] text-xl transition-all hover:-translate-y-1 hover:bg-[#f9f5ff]">
      {children}
    </button>
  );
}

function DecorationCard({ children }) {
  return (
    <div className="pixel-border flex h-20 w-20 items-center justify-center bg-[#fffdfd] text-3xl">
      {children}
    </div>
  );
}

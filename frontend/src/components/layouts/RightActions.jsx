export default function RightActions({ mobile }) {
  return (
    <div
      className={`
        absolute
        flex
        gap-3

        ${mobile
          ? `
              bottom-4
              right-4
              flex-row
            `
          : `
              right-6
              top-1/2
              -translate-y-1/2
              flex-col
            `
        }
      `}
    >

      {/* RANDOM */}
      <button
        className="
          pixel-border
          group
          flex
          h-12
          w-12
          items-center
          justify-center
          bg-white
          transition-all
          hover:-translate-y-1

          md:h-14
          md:w-14
        "
      >
        <img
          src="/icons/random.png"
          alt="random"
          className="
            pixel-art
            h-5
            w-5
            transition-transform
            group-hover:rotate-12

            md:h-6
            md:w-6
          "
        />
      </button>

      {/* RESET */}
      <button
        className="
          pixel-border
          group
          flex
          h-12
          w-12
          items-center
          justify-center
          bg-white
          transition-all
          hover:-translate-y-1

          md:h-14
          md:w-14
        "
      >
        <img
          src="/icons/reset.png"
          alt="reset"
          className="
            pixel-art
            h-5
            w-5
            transition-transform
            group-hover:-rotate-12

            md:h-6
            md:w-6
          "
        />
      </button>

      {/* SAVE */}
      <button
        className="
          pixel-border
          group
          flex
          h-12
          w-12
          items-center
          justify-center
          bg-white
          transition-all
          hover:-translate-y-1

          md:h-14
          md:w-14
        "
      >
        <img
          src="/icons/save.png"
          alt="save"
          className="
            pixel-art
            h-5
            w-5
            transition-transform
            group-hover:scale-110

            md:h-6
            md:w-6
          "
        />
      </button>

      {/* FAVORITE */}
      <button
        className="
          pixel-border
          group
          flex
          h-12
          w-12
          items-center
          justify-center
          bg-white
          transition-all
          hover:-translate-y-1

          md:h-14
          md:w-14
        "
      >
        <img
          src="/icons/heart.png"
          alt="favorite"
          className="
            pixel-art
            h-5
            w-5
            transition-transform
            group-hover:scale-110

            md:h-6
            md:w-6
          "
        />
      </button>
    </div>
  );
}
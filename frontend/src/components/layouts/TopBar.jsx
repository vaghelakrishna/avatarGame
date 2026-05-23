export default function TopBar() {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        px-3
        py-3

        sm:px-4
        md:px-6
        lg:px-8
      "
    >

      {/* LEFT SIDE */}
      <div className="flex items-center gap-2 sm:gap-3">

        <button
          className="
            pixel-border
            flex
            h-11
            w-11
            items-center
            justify-center
            bg-white

            sm:h-12
            sm:w-12

            md:h-14
            md:w-14
          "
        >
          <img
            src="/icons/back.png"
            alt="back"
            className="
              pixel-art
              h-5
              w-5

              md:h-6
              md:w-6
            "
          />
        </button>

        <button
          className="
            pixel-border
            flex
            h-11
            w-11
            items-center
            justify-center
            bg-white

            sm:h-12
            sm:w-12

            md:h-14
            md:w-14
          "
        >
          <img
            src="/icons/shop.png"
            alt="shop"
            className="
              pixel-art
              h-5
              w-5

              md:h-6
              md:w-6
            "
          />
        </button>

        <button
          className="
            pixel-border
            flex
            h-11
            w-11
            items-center
            justify-center
            bg-white

            sm:h-12
            sm:w-12

            md:h-14
            md:w-14
          "
        >
          <img
            src="/icons/wardrobe.png"
            alt="wardrobe"
            className="
              pixel-art
              h-5
              w-5

              md:h-6
              md:w-6
            "
          />
        </button>

        <button
          className="
            pixel-border
            flex
            h-11
            w-11
            items-center
            justify-center


            sm:h-12
            sm:w-12

            md:h-14
            md:w-14
          "
        >
          <img
            src="./src/assets/icons/camera.png"
            alt="camera"
            className="
              pixel-art
              h-5
              w-5

              md:h-6
              md:w-6
            "
          />
        </button>
      </div>

      {/* RIGHT SIDE */}
      <button
        className="
          pixel-border
          flex
          h-11
          w-11
          items-center
          justify-center
          bg-white

          sm:h-12
          sm:w-12

          md:h-14
          md:w-14
        "
      >
        <img
          src="/icons/menu.png"
          alt="menu"
          className="
            pixel-art
            h-5
            w-5

            md:h-6
            md:w-6
          "
        />
      </button>
    </header>
  );
}
import useAvatarStore from "../../store/useAvatarStore";
export default function CharacterStage() {
  const { hair, outfit } = useAvatarStore();
  return (
    <section
      className="
        pixel-border
        relative
        flex
        h-full
        items-center
        justify-center
        overflow-hidden
        bg-[#fffafb]
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          h-[260px]
          w-[260px]
          rounded-full
          bg-pink-100
          opacity-50
          blur-3xl

          sm:h-[340px]
          sm:w-[340px]

          md:h-[420px]
          md:w-[420px]
        "
      />

      {/* FLOATING DECORATION */}
      <div
        className="
          absolute
          left-6
          top-10
          h-6
          w-6
          bg-[#ffd6ea]
          opacity-70

          md:h-8
          md:w-8
        "
      />

      <div
        className="
          absolute
          bottom-16
          right-10
          h-4
          w-4
          bg-[#e7ddff]
          opacity-70

          md:h-6
          md:w-6
        "
      />

      {/* CHARACTER CONTAINER */}
      <div
        className="
          relative
          z-10

          h-[260px]
          w-[180px]

          sm:h-[320px]
          sm:w-[220px]

          md:h-[420px]
          md:w-[280px]
        "
      >

        {/* BODY */}
        <img
          src="./src/assets/body/base1.png"
          alt="body"
          className="
            pixel-art
            absolute
            inset-0
            h-full
            w-full
            object-contain
          "
        />

        {/* HAIR */}
        <img
          src={hair}
          alt="hair"
          className="
            pixel-art
            absolute
            inset-0
            h-full
            w-full
            object-contain
          "
        />

        {/* OUTFIT */}
        <img
          src={outfit}
          alt="outfit"
          className="
            pixel-art
            absolute
            inset-0
            h-full
            w-full
            object-contain
          "
        />

      </div>

      {/* FLOOR SHADOW */}
      <div
        className="
          absolute
          bottom-10
          h-6
          w-40
          rounded-full
          bg-[#e7ddff]
          opacity-40
          blur-xl

          md:w-56
        "
      />

    </section>
  );
}
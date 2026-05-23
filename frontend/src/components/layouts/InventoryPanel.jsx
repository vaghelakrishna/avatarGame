import { useState } from "react";



import useAvatarStore from "../../store/useAvatarStore";
import hairItems from "../data/hair";
import outfitItems from "../data/outfits";
import bindiItems from "../data/bindi";

export default function InventoryPanel() {

  const [selected, setSelected] = useState(0);

  const {
    activeTab,
    setHair,
    setOutfit,
    setBindi,
  } = useAvatarStore();

  let items = [];

  if (activeTab === "hair") {
    items = hairItems;
  }

  if (activeTab === "outfit") {
    items = outfitItems;
  }

  if (activeTab === "bindi") {
    items = bindiItems;
  }

  return (
    <section
      className="
        pixel-border
        flex-1
        overflow-hidden
        bg-[#fffdfd]
        p-3

        md:p-4
      "
    >

      {/* SCROLL AREA */}
      <div
        className="
          hide-scrollbar
          h-full
          overflow-y-auto
        "
      >

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-3
            gap-3

            sm:grid-cols-4

            lg:grid-cols-3
            xl:grid-cols-4
          "
        >

          {items.map((item, index) => {

            const isSelected = selected === index;

            return (
              <button
                key={index}
                onClick={() => {

                  setSelected(index);

                  if (activeTab === "hair") {
                    setHair(item);
                  }

                  if (activeTab === "outfit") {
                    setOutfit(item);
                  }

                  if (activeTab === "bindi") {
                    setBindi(item);
                  }

                }}
                className={`
                  pixel-border
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  bg-[#f4f1f6]
                  p-2
                  transition-all
                  duration-200

                  ${isSelected
                    ? `
                        -translate-y-1
                        bg-[#efe7ff]
                      `
                    : `
                        hover:-translate-y-1
                      `
                  }
                `}
              >

                {/* SELECTED CORNER */}
                {isSelected && (
                  <div
                    className="
                      absolute
                      right-1
                      top-1
                      h-3
                      w-3
                      bg-pink-300
                    "
                  />
                )}

                {/* ITEM IMAGE */}
                <img
                  src={item}
                  alt=""
                  className="
                    pixel-art
                    h-full
                    w-full
                    object-contain
                    transition-transform
                    duration-200

                    group-hover:scale-105
                  "
                />

              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
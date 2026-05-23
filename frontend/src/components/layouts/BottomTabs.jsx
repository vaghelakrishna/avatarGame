import { useState } from "react";

const tabs = [
  {
    id: "outfit",
    label: "Outfit",
  },
  {
    id: "hair",
    label: "Hair",
  },
  {
    id: "saree",
    label: "Saree",
  },
  {
    id: "kurti",
    label: "Kurti",
  },
  {
    id: "bindi",
    label: "Bindi",
  },
  {
    id: "jhumka",
    label: "Jhumka",
  },
];

export default function BottomTabs({ desktop }) {

  const [active, setActive] = useState("outfit");

  return (
    <section
      className={`
        ${desktop
          ? ""
          : "px-2 pb-2"
        }
      `}
    >

      <div
        className="
          hide-scrollbar
          flex
          gap-3
          overflow-x-auto
        "
      >

        {tabs.map((tab) => {

          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`
                pixel-border
                relative
                min-w-[100px]
                whitespace-nowrap
                px-4
                py-3
                text-sm
                transition-all
                duration-200

                ${isActive
                  ? `
                      -translate-y-1
                      bg-[#e7ddff]
                    `
                  : `
                      bg-white
                      hover:-translate-y-1
                    `
                }

                md:min-w-[120px]
              `}
            >

              {/* ACTIVE DOT */}
              {isActive && (
                <div
                  className="
                    absolute
                    -top-1
                    left-1/2
                    h-2
                    w-2
                    -translate-x-1/2
                    bg-pink-300
                  "
                />
              )}

              {tab.label}

            </button>
          );
        })}
      </div>
    </section>
  );
}
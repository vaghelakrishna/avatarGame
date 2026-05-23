import TopBar from "../layouts/TopBar";
import CharacterStage from "../layouts/CharacterStage";
import InventoryPanel from "../layouts/InventoryPanel";
import BottomTabs from "../layouts/BottomTabs";
import RightActions from "../layouts/RightActions";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#f5f2f8]">

      {/* MOBILE */}
      <div className="flex h-full flex-col lg:hidden">

        <TopBar />

        <div className="relative flex-1">
          <CharacterStage />
          <RightActions mobile />
        </div>

        <BottomTabs />
        <InventoryPanel />

      </div>

      {/* DESKTOP */}
      <div className="hidden h-full lg:flex lg:flex-col">

        <TopBar />

        <main className="
          grid
          flex-1
          grid-cols-[1.1fr_0.9fr]
          gap-6
          overflow-hidden
          px-6
          pb-6
        ">

          {/* LEFT */}
          <div className="relative">
            <CharacterStage />
          </div>

          {/* RIGHT */}
          <section className="
            flex
            flex-col
            gap-4
            overflow-hidden
          ">
            <BottomTabs desktop />
            <InventoryPanel />
            <RightActions />
          </section>

        </main>

      </div>

    </div>
  );
}
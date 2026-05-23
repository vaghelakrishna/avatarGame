import { create } from "zustand";

const useAvatarStore = create((set) => ({
  hair: "/avatar/hair/hair-1.png",
  outfit: "/avatar/outfits/kurti-1.png",

  setHair: (hair) => set({ hair }),

  setOutfit: (outfit) => set({ outfit }),
}));

export default useAvatarStore;
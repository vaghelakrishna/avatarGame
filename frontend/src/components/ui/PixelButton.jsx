export default function PixelButton({ children }) {
  return (
    <button className="
      pixel-border
      flex
      h-14
      w-14
      items-center
      justify-center
      bg-white
      text-xl
      transition-all
      hover:-translate-y-1
    ">
      {children}
    </button>
  );
}
import { useState, useEffect } from "react";
import Blob1 from "../public/blobs/blob1.svg";
import Blob2 from "../public/blobs/blob2.svg";
import Blob3 from "../public/blobs/blob3.svg";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Set position of mouse
  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed hidden h-80 w-80 sm:hidden"
      style={{ left: position.x - 150, top: position.y - 150 }}
    >
      <Blob1 className="absolute top-0 -left-10 animate-blob fill-current text-gradient-start opacity-70 blur-xl filter" />
      <Blob2 className="animation-delay-2000 absolute animate-blob self-center fill-current text-gradient-middle opacity-70 blur-xl filter" />
      <Blob3 className="animation-delay-4000 absolute -bottom-8 left-20 animate-blob fill-current text-gradient-end opacity-70 blur-xl filter" />
    </div>
  );
}

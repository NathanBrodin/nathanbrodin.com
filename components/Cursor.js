import { useState, useEffect } from "react";
import Blob1 from "../public/blobs/blob1.svg";
import Blob2 from "../public/blobs/blob2.svg";
import Blob3 from "../public/blobs/blob3.svg";


export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Set position of mouse
    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY});
    };

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

  return (
    <div className="fixed w-80 h-80" style={{ left: position.x - 150, top: position.y - 150 }}>
        <Blob1 className="absolute text-gradient-start fill-current top-0 -left-10 filter blur-xl opacity-70 animate-blob"/>
        <Blob2 className="absolute text-gradient-middle fill-current self-center filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
        <Blob3 className="absolute text-gradient-end fill-current -bottom-8 left-20 filter blur-xl opacity-70 animate-blob animation-delay-4000"/>
    </div>
  )
}
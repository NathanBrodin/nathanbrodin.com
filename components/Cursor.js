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
    <div className="fixed w-80 h-80 z-0" style={{ left: position.x - 150, top: position.y - 150 }}>
        <Blob1 className="absolute text-gradient-start fill-current top-0 -left-10 filter blur-xl opacity-70 animate-blob"/>
        <Blob2 className="absolute text-gradient-middle fill-current self-center filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
        <Blob3 className="absolute text-gradient-end fill-current -bottom-8 left-20 filter blur-xl opacity-70 animate-blob animation-delay-4000"/>
    </div>
  )
}

/*
<div class="cursor" style="translate: none; rotate: none; scale: none; transform: translate(-50%, -50%); left: 1145px; top: 298px;">
            <div class="colorOne"></div>
            <div class="colorTwo"></div>
            <div class="colorThree"></div>
        </div>

.cursor {
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
    opacity: .85;
}

.cursor div:nth-child(1) {
    top: calc(50% - 15rem);
    left: calc(50% - 15rem);
}

@media (max-width: 480px)
.cursor div {
    width: 40rem;
    height: 40rem;
}

.cursor div {
    position: fixed;
    z-index: -1;
    width: 50rem;
    height: 50rem;
}

.colorOne {
    animation: 5s colorOne linear infinite;
    background-image: -webkit-radial-gradient(50% 50%, circle contain, #ff873c, rgba(255, 135, 60, 0) 100%);
}

.colorTwo {
    animation: colorTwo 4s linear infinite;
    background-image: -webkit-radial-gradient(50% 50%, circle contain, #c7003b, rgba(199, 0, 59, 0) 100%);
}

.colorThree {
    animation: colorThree 6s linear infinite;
    background-image: -webkit-radial-gradient(50% 50%, circle contain, #900c3e, rgba(144, 12, 62, 0) 100%);
}
*/
// import { Float } from "@react-three/drei";
import { useState } from "react";

interface BubbleProps {
    pos: [number, number, number];
    colour: string;
}
export function Bubble(props: BubbleProps) {
    const [size, setSize] = useState(0.5);

    function changeBubbleSize(){
        const increaseSize = size + 0.1;
        return setSize(increaseSize)
    }

    return (
        // <Float speed={1}>
        <mesh position={props.pos} scale={size} onClick={changeBubbleSize}>
            <sphereBufferGeometry />
            <meshStandardMaterial color={props.colour} />
        </mesh>
        // </Float>
    );
}

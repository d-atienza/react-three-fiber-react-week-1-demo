import { useState } from "react";
import { oneFullRotation } from "./unimportantMaths";

interface SpinnyBoxProps {
    pos: [number, number, number];
}
export function SpinnyBox(props: SpinnyBoxProps) {
    const [rotationSteps, setRotationSteps] = useState(0);

    function handleCubeClicked() {
        setRotationSteps((prev) => prev + 1);
    }
    return (
        <mesh
            position={props.pos}
            onClick={handleCubeClicked}
            rotation-y={rotationSteps * (oneFullRotation / 16)}
        >
            <boxBufferGeometry />
            <meshStandardMaterial color={"white"} />
        </mesh>
    );
}

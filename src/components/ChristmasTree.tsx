import { Sparkles } from "@react-three/drei";

interface ChristmasTreeProps {
    pos: [number, number, number];
}

export function ChristmasTree(props: ChristmasTreeProps) {
    return (
        
        <group position={props.pos}>
           
            {/* top cone of tree */}
            <mesh position={[0, 3.4, 0]} scale={[0.7, 2 * 0.7, 0.7]}>
            <Sparkles count={25} scale={2} size={6} speed={0.4}/>
                <coneGeometry />
                {/* <meshStandardMaterial color={"forestgreen"} /> */}
                <meshStandardMaterial color={"orange"} />
            </mesh>
            {/* middle cone of tree */}
            <mesh position={[0, 2.7, 0]} scale={[0.8, 2 * 0.8, 0.8]}>
                <coneGeometry />
                <meshStandardMaterial color={"red"} />
            </mesh>
            {/* bottom cone of tree */}
            <mesh position={[0, 2, 0]} scale={[1, 2, 1]}>
                <coneGeometry />
                <meshStandardMaterial color={"pink"} />
            </mesh>
            {/* cyclinder for trunk */}
            <mesh position={[0, 0.5, 0]} scale={[0.4, 1, 0.4]}>
                <cylinderGeometry />
                <meshStandardMaterial color={"#000000"} />
            </mesh>
        </group>
        
    );
}

interface ChristmasTreeProps {
    pos: [number, number, number];
}

export function ChristmasTree(props: ChristmasTreeProps) {
    return (
        <group position={props.pos}>
            {/* top cone of tree */}
            <mesh position={[0, 3.4, 0]} scale={[0.7, 2 * 0.7, 0.7]}>
                <coneGeometry />
                <meshStandardMaterial color={"forestgreen"} />
            </mesh>
            {/* middle cone of tree */}
            <mesh position={[0, 2.7, 0]} scale={[0.8, 2 * 0.8, 0.8]}>
                <coneGeometry />
                <meshStandardMaterial color={"forestgreen"} />
            </mesh>
            {/* bottom cone of tree */}
            <mesh position={[0, 2, 0]} scale={[1, 2, 1]}>
                <coneGeometry />
                <meshStandardMaterial color={"forestgreen"} />
            </mesh>
            {/* cyclinder for trunk */}
            <mesh position={[0, 0.5, 0]} scale={[0.4, 1, 0.4]}>
                <cylinderGeometry />
                <meshStandardMaterial color={"#403029"} />
            </mesh>
        </group>
    );
}

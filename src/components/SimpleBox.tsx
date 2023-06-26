interface SimpleBoxProps {
    pos: [number, number, number];
}
export function SimpleBox(props: SimpleBoxProps) {
    return (
        <mesh position={props.pos}>
            <boxBufferGeometry />
            <meshStandardMaterial color={"tomato"} />
        </mesh>
    );
}

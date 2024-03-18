import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { ChristmasTree } from "./ChristmasTree";
import { SimpleBox } from "./SimpleBox";
import { SpinnyBox } from "./SpinnyBox";

/** A component demo'ing some react-three-fiber basics. */
function App() {
    return (
        <div className="App">
            <Canvas>
                {/* OrbitControls lets you rotate the camera with the mouse */}
                <OrbitControls autoRotate={false} />

                {/* Red = x, Green = y, Blue = z.  Out from the centre is positive.  */}
                <axesHelper scale={2} position={[0, 1, 0]} />

                {/* A grid with unit markers, on the x-z plane (ground plane).  */}
                <gridHelper position={[0, 0, 0]} />

                {/* A white light that shines from the top front*/}
                <pointLight position={[10, 10, 10]} />
                {/* and a blue light, too */}
                <pointLight position={[-3, 2, -3]} color={"blue"} />

                <SimpleBox pos={[3, 0.5, 2]} />

                <ChristmasTree pos={[-2, 0, -2]} />
                <ChristmasTree pos={[3, 0, 0]} />

                {/* some boxes that you can click on */}
                <SpinnyBox pos={[1, 0.5, -5]} />
                <SpinnyBox pos={[3, 4, -2]} />
                <SpinnyBox pos={[-4, -3, 3]} />
            </Canvas>
        </div>
    );
}

export default App;

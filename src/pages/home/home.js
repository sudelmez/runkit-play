import './home.css';
import React, { useEffect, useState } from 'react';
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

function HomePage() {
    const [loc, setLoc] = useState(null);
    const getData = async () => {
        try {
            const res = await fetch("https://hellorunkit-onog2rtymt8o.runkit.sh/map", {
                method: 'GET',
            });
            const json = await res.json();
            const locs = json.iss_position;
            setLoc(locs);
            console.log("response:");
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <Viewer full>
                <Entity
                    name="tokyo"
                    position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
                    // position={Cartesian3.fromDegrees(loc.longitude.parseInt(), loc.latitude.parseInt(), 100)}
                    point={{ pixelSize: 10 }}>
                    test
                </Entity>
            </Viewer>
        </div>
    );
}
export default HomePage;
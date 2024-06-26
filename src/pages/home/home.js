import './home.css';
import React, { useEffect, useState } from 'react';
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

function HomePage() {
    const [loc, setLoc] = useState(null);
    const [entity, setEntity] = useState(null);
    const getData = async () => {
        try {
            const res = await fetch("https://hellorunkit-onog2rtymt8o.runkit.sh/map", {
                method: 'GET',
                headers: { "content-type": "application/json" }
            });
            const json = await res.json().then(() => {
                const locs = json.iss_position;
                console.log(locs);
                setLoc(locs);
                setEntity(
                    <Entity
                        name="tokyo"
                        // position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
                        position={Cartesian3.fromDegrees(parseInt(loc.longitude), parseInt(loc.latitude), 100)}
                        point={{ pixelSize: 10 }}>
                    </Entity>
                )
            });
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
                {entity !== null && entity}
            </Viewer>
        </div>
    );
}
export default HomePage;
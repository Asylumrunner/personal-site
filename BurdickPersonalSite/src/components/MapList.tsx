import MapItem from "./MapItem"
import {v4 as uuidv4} from 'uuid';

function MapList({section}) {
    const mapItems = section.items.map((item) => {
        return <MapItem key={uuidv4()} listItem={item}/>
    })
    return (
        <div>
            <p>{section.header}</p>
            {mapItems}
            <br/>
        </div>
    )
}

export default MapList
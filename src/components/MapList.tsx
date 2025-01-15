import MapItem from "./MapItem"
import {v4 as uuidv4} from 'uuid';

function MapList({section} : {section: any}) {
    const mapItems = section.items.map((item: any) => {
        return <MapItem key={uuidv4()} listItem={item}/>
    })
    return (
        <div>
            <p className="font-oswald text-2xl mb-4">{section.header}</p>
            {mapItems}
            <br/>
        </div>
    )
}

export default MapList
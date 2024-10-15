import Tag from './Tag'
import {v4 as uuidv4} from 'uuid';


function MapItem({listItem}) {
    var sideheader_content;
    if (listItem.side_header) {
        sideheader_content = (<p>{listItem.side_header}</p>)
    } else {
        sideheader_content = (<img src={listItem.image} />)
    }

    const tags = listItem.tags.map((tag) => {
        return <Tag key={uuidv4()} text={tag} />
    })

    return (
        <div className="flex flex-row">
            <div className="basis-1/3">
                {sideheader_content}
            </div>
            <div className="basis-2/3">
                <p>{listItem.header}</p>
                <p>{listItem.subheader}</p>
                <p>{listItem.text}</p>
                <div className="flex flex-row">{tags}</div>
            </div>
            <br/>
        </div>
    )
}

export default MapItem
import Tag from './Tag'
import {v4 as uuidv4} from 'uuid';


function MapItem({listItem}) {
    var sideheader_content;
    if (listItem.side_header) {
        sideheader_content = (<p className="text-slate-400">{listItem.side_header}</p>)
    } else {
        sideheader_content = (<img src={listItem.image} />)
    }

    const tags = listItem.tags.map((tag: any) => {
        return <Tag key={uuidv4()} text={tag} />
    })

    return (
        <div className="flex flex-col md:flex-row mb-5">
            <div className="md:basis-1/3">
                {sideheader_content}
            </div>
            <div className="md:basis-2/3">
                <p className="text-xl">{listItem.header}</p>
                <p className="text-lg mb-1">{listItem.subheader}</p>
                <p className="mb-1">{listItem.text}</p>
                <div className="flex flex-row">{tags}</div>
            </div>
        </div>
    )
}

export default MapItem
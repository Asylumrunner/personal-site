import BodyBlock from "./BodyBlock"
import MapList from "./MapList"
import * as feedData from "../assets/raw_text.json"
import {v4 as uuidv4} from 'uuid';


function ScrollFeed() {

    const feedContent = feedData.main_feed.map((section) => {
        if (section.type == "block") {
            return <BodyBlock key={uuidv4()} section={section}/>
        } else if (section.type == "list") {
            return <MapList key={uuidv4()} section={section}/>
        }
    });

    return (
        <div className="text-left">
            {feedContent}
        </div>
    )
}

export default ScrollFeed
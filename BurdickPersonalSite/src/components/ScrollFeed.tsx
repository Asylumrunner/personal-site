import BodyBlock from "./BodyBlock"
import MapList from "./MapList"

function ScrollFeed() {
    return (
        <div>This is the scroll feed.
            <div>It contains one or more Body Blocks</div>
            <BodyBlock />
            <div>And one or more Map Lists</div>
            <MapList />
        </div>
    )
}

export default ScrollFeed
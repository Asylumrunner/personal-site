import textData from '../assets/raw_text.json'
import image from '../assets/photo.jpg'
import SocialButtons from './SocialButtons'

function Sidebar() {

    const sidebarText = textData.sidebar

    return (
        <div className="text-left">
            <img src={image} alt="Michael Burdick" className="size-3/4"/>
            <p className="text-5xl font-oswald">{sidebarText.main_header}</p>
            <p className="text-2xl font-oswald">{sidebarText.subheader}</p>
            <br/>
            <p>{sidebarText.body_text}</p>
            <br/>
            <SocialButtons />
        </div>
    )
}

export default Sidebar
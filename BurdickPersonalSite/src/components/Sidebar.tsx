import textData from '../assets/raw_text.json'
import image from '../assets/photo.jpg'
import SocialButtons from './SocialButtons'

function Sidebar() {

    const sidebarText = textData.sidebar

    return (
        <div className="text-left">
            <img src={image} alt="Michael Burdick" className="size-1/2"/>
            <h1>{sidebarText.main_header}</h1>
            <h2>{sidebarText.subheader}</h2>
            <p>{sidebarText.body_text}</p>
            <SocialButtons />
        </div>
    )
}

export default Sidebar
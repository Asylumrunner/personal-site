import { SocialIcon } from 'react-social-icons'
import textData from '../assets/raw_text.json'
import {v4 as uuidv4} from 'uuid';


function SocialButtons() {
    const socials = textData.socials.map((social) => {
        return <SocialIcon key={uuidv4()} target="_blank" url={social.url} network={social.network_override} className="mr-2"/>
    })

    return (
        <div>{socials}</div>
    )
}

export default SocialButtons
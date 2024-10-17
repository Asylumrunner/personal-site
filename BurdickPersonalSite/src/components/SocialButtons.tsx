import { SocialIcon } from 'react-social-icons'
import textData from '../assets/raw_text.json'


function SocialButtons() {
    const socials = textData.socials.map((social) => {
        return <SocialIcon target="_blank" url={social.url} network={social.network_override} className="mr-2"/>
    })

    return (
        <div>{socials}</div>
    )
}

export default SocialButtons
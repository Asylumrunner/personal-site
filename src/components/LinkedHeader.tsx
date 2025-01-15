function LinkedHeader({section}) {
    return (<div>
        <a href={section.link}><p className="font-oswald text-xl mb-4">{section.header}</p></a>
    </div>)

}

export default LinkedHeader
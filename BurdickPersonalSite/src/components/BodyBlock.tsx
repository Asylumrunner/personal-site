function BodyBlock({section}) {
    return (
        <div>
            <p className="font-oswald text-2xl mb-4">{section.header}</p>
            <p>{section.text}</p>
            <br/>
        </div>
    )
}

export default BodyBlock
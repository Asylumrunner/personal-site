function BodyBlock({section}) {
    return (
        <div>
            <p>{section.header}</p>
            <p>{section.text}</p>
            <br/>
        </div>
    )
}

export default BodyBlock
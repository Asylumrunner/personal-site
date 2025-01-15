function BodyBlock({section}) {
    
    const text = section.text.map((block: string) => {
        return (<div>{block}<br/><br/></div>)
    })

    return (
        <div>
            <p className="font-oswald text-2xl mb-4">{section.header}</p>
            <p>{text}</p>
            <br/>
        </div>
    )
}

export default BodyBlock
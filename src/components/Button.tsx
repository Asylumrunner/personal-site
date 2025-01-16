function Button({section}: {section: any}) {
    return (
        <div>
            <a href={section.link}><p className="border border-solid border-white rounded-full py-2 text-center font-oswald text-xl mb-4">{section.header}</p></a>
        </div>
    )
}

export default Button;
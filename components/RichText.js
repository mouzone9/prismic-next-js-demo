import { PrismicRichText } from "@prismicio/react";

const RichText = ({ field, className, components }) => {
    console.log(components)
    return (
        field && (
            <div className={className}>
                <PrismicRichText 
                    field={field} 
                    components={components}
                />
            </div>
        )
    )
}

export default RichText

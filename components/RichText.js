import { PrismicRichText } from "@prismicio/react";

const RichText = ({ field, className, components }) => {
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

import { PrismicNextImage } from "@prismicio/next";

const SingleNextImage = ({ className, alt, field, priority }) => {
    return (
        field && (
            <div className={className}>
                <PrismicNextImage
                    alt={alt} 
                    field={field} 
                    priority={priority}
                />
            </div>
        )
    )
}

export default SingleNextImage

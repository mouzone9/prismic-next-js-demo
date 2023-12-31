import { PrismicNextImage } from "@prismicio/next";

const NextImage = ({ className, alt, field, priority }) => {
    return (
        field && (
            <div>
                <PrismicNextImage
                    className={className}
                    alt={alt} 
                    field={field} 
                    priority={priority}
                />
            </div>
        )
    )
}

export default NextImage

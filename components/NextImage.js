import { PrismicNextImage } from "@prismicio/next";

const NextImage = ({ className, alt, field }) => {
    return (
        field && (
            <div className={className}>
                <PrismicNextImage alt={alt} field={field}/>
            </div>
        )
    )
}

export default NextImage

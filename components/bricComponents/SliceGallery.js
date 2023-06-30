import { Carousel } from "@material-tailwind/react"
import NextImage    from "../NextImage"

const SliceGallery = ({slices}) => {
    if (!slices) {
        return null;
    }

    return <>
        <div className="flex flex-wrap -mx-2 justify-center items-center">
            {slices?.items?.map((item, i) => {
                return <div className="grid grid-cols-1 hover:grid-cols-6" key={i}>
                    <NextImage
                        classNameDiv="object-cover m-2 h-48 w-96"
                        className="object-cover m-2 h-48 w-96"
                        alt={item.blogimage.alt} 
                        field={item.blogimage}
                        priority={false} 
                    />
                </div>  
                }
            )}
        </div>
    </>
}

export default SliceGallery;



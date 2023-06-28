import { Carousel } from "@material-tailwind/react"
import { CreateClient } from "@prismicio/client"
import NextImage from "../NextImage"

const PrismicCarrousel = ({slices}) => {
    return <>
        <Carousel
            className="rounded-xl"
        >
        {slices?.items?.map((item, i) => {
            <NextImage className="h-full w-full object-cover" field={item.blogimage}/>
        })}
        </Carousel>
    </>
}

export default PrismicCarrousel


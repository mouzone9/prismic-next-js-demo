import React           from "react"
import SingleNextImage from "../SingleNextImage"
import RichText        from "../RichText"
import NextImage       from "../NextImage"
import { useRouter }   from "next/router"
import {stringify}     from "flatted"

const Card = ({slices, navbar}) => {
    if (!slices && navbar) {
        return null;
    }

    const router = useRouter()

    const goToSingleService = (serviceData) => {
        const serializedData = stringify(serviceData);
        const SerializedNavbar = stringify(navbar)
        localStorage.setItem("singleService", serializedData)
        localStorage.setItem("navbar", SerializedNavbar)
        router.push(`/service/${serviceData.slug}`);
    }

    return <div className="flex flex-wrap -mx-2 justify-center items-center">
       {slices.map((slice, i) => {
            return <div 
                    onClick={()=> goToSingleService(slice)} 
                    key={i} 
                    className="grid m-2 p-2 grid-cols-1 hover:grid-cols-6">
                <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <NextImage
                        priority={false}
                        alt={slice?.cardimg?.alt}
                        field={slice?.cardimg}
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {slice?.cardname}
                        </h5>
                        <RichText 
                            className="mb-3 font-normal text-gray-700 dark:text-gray-400" 
                            field={slice?.carddescription}
                        />
                    </div>
                </a>
            </div>
       })}
    </div>
}

export default Card

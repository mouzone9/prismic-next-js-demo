import React, {
    useEffect,
    useState
}                    from "react";
import Layout        from "../../components/PageComponents/Layout";
import { useRouter } from "next/router";
import {parse}       from "flatted";
import NextImage     from "../../components/NextImage";
import RichText      from "../../components/RichText";

const SingleServices = () => {
    const router = useRouter();
    const [sliceObject, setSliceObject] = useState(null);
    const [navbarObject, setNavbarObject] = useState(null);

    useEffect(() => {
        const jsonSlice = localStorage.getItem('singleService');
        const navbarSlice = localStorage.getItem('navbar')
        const parsedSliceObject = jsonSlice ? parse(jsonSlice) : null;
        const parsedNavbarObject = navbarSlice ? parse(navbarSlice) : null;
        setSliceObject(parsedSliceObject);
        setNavbarObject(parsedNavbarObject)
    }, [])

    useEffect(() => {
        if (typeof localStorage === "undefined") {
          router.push("/");
        }
    }, []);

    if(!navbarObject && !sliceObject) {
        return null;
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="space-y-96">
                    <div className="section bg-gray-200 text-center">
                        <h1>{sliceObject?.cardname}</h1>
                        <div>
                            <RichText field={sliceObject?.carddescription}/>
                        </div>
                        <div className="flex justify-center items-center">
                            <NextImage
                                className="object-contain h-96 w-96"
                                alt={sliceObject?.cardimg?.alt}
                                field={sliceObject?.cardimg} 
                            />
                        </div>
                    </div>
                </div>
            </div>

        <Layout navbar={navbarObject}/>
        </>
    )
}

export default SingleServices

import React                from "react";
import { createClient }     from "../prismicio";
import { components }       from "../slices";
import { SliceZone }        from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText             from "../components/RichText";
import SliceGallery         from "../components/bricComponents/SliceGallery";
import SingleNextImage      from "../components/SingleNextImage";
import Layout               from "../components/PageComponents/Layout";

const Home = ({home, navbar}) => {
    if(!home && !navbar) {
        return null;
    }

    const text = home?.data?.test[0]

    return <>
        <div className="container mx-auto px-4">
            <div className="space-y-96">
                <section className='section bg-gray-200 text-center'>
                    <RichText field={home.data.title}/>
                    <div className="pb-8 columns-3 ...">
                        <p>{text.text1}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <SingleNextImage className="object-contain h-48 w-96" alt="" field={home.data.pix}/>
                    </div>
                </section>
                <section className='end-10 section  bg-gray-400 text-center'>
                    <RichText field={home.data.title2}/>
                    <div className="pb-8 columns-3 ...">
                        <p>{text.text2}</p>
                    </div>
                    <SliceGallery slices={home?.data?.slices?.[0]}/>
                </section>
            </div>
        </div>
        <Layout navbar={navbar}/>
    </>
}

export default Home

export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData });

    const home = await client.getSingle('home');
    const navbar = await client.getSingle('navigation');
    
    return {
        props: {
            home,
            navbar
        },
    };
}

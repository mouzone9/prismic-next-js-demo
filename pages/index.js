import React from "react";
import Head from "next/head";
import { createClient } from "../prismicio";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../components/RichText";
import NextImage from "../components/NextImage";
import Navbar from "../components/bricComponents/Navbar";
import PrismicCarrousel from "../components/bricComponents/Carrousel";

const Home = ({home}) => {
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
                        <NextImage className="object-contain h-48 w-96" alt="" field={home.data.pix}/>
                    </div>
                </section>
                <section className='end-10 section  bg-gray-400 text-center'>
                    <RichText field={home.data.title2}/>
                    <div className="pb-8 columns-3 ...">
                        <p>{text.text2}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <PrismicCarrousel slices={home?.data?.slices[0]}/>
                    </div>
                </section>
            </div>
        </div>
        <Navbar />
    </>
}

export default Home

export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData });

    const home = await client.getSingle('home');
  
    return {
      props: {
        home,
      },
    };
}
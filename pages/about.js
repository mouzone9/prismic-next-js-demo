import Layout           from "../components/PageComponents/Layout"
import { createClient } from "../prismicio"
import SliceGallery     from "../components/bricComponents/SliceGallery"
import RichText         from "../components/RichText"

const About = ({about, navbar}) => {
    if(!about && !navbar) {
        return null
    }

    const text = about?.data?.text[0]

    return <>
        <div className="container mx-auto px-4">
            <div className="space-y-96">
                <section className='section bg-gray-200 text-center'>
                    <RichText field={about.data.title}/>
                    <div className="pb-8 columns-3 ...">
                        <p className="subpixel-antialiased">
                            {text.text1}
                        </p>
                    </div>
                </section>
                <section className='end-10 section  bg-gray-400 text-center'>
                    <RichText field={about.data.title2}/>
                    <div className="pb-8 columns-3 ...">
                        <p>{text.text2}</p>
                    </div>
                    <SliceGallery slices={about?.data?.slices?.[0]}/>
                </section>
            </div>
        </div>
        <Layout navbar={navbar}/>
    </>
}

export default About

export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData });

    const about = await client.getSingle('about');
    const navbar = await client.getSingle('navigation');

    return {
        props: {
            about,
            navbar
        },
    };
}

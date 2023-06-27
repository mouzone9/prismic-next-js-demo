import React from "react";
import Head from "next/head";
import { createClient } from "../prismicio";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";

const Home = ({page}) => {
    console.log(page)
    return <SliceZone slices={page.data.slices} components={components} />
}

export default Home

export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData });

    const page = await client.getSingle('navigation');
  
    return {
      props: {
        page,
      },
    };
  }
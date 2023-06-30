import React from "react";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { SliceZone } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../../components/RichText";
import SliceGallery from "../../components/bricComponents/SliceGallery";
import SingleNextImage from "../../components/SingleNextImage";
import Layout from "../../components/PageComponents/Layout";


/**
 * @typedef {import("@prismicio/client").Content.HomeSliceSlice} HomeSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeSliceSlice>} HomeSliceProps
 * @param {HomeSliceProps}
 */
const HomeSlice = ({ slice }) => {
    return (
    <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
    </section>
    );
};

export default HomeSlice;

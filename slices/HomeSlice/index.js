import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect } from "react";

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
        <PrismicRichText field={slice.primary.title}/>
        <PrismicRichText field={slice.primary.description}/>
    </section>
    );
};

export default HomeSlice;

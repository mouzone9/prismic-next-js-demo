import { PrismicRichText } from "@prismicio/react";


const Homepage = ({ slice }) => {
  return (
    <section
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.body} />
    </section>
  );
};

export default Homepage;

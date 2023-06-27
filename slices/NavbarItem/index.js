/**
 * @typedef {import("@prismicio/client").Content.NavbarSlice} NavbarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavbarSlice>} NavbarProps
 * @param {NavbarProps}
 */
const Navbar = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for navbar (variation: {slice.variation}) Slices
    </section>
  );
};

export default Navbar;

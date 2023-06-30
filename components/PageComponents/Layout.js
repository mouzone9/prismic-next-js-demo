import Footer from "../bricComponents/Footer";
import Navbar from "../bricComponents/Navbar";

const Layout = ({navbar}) => {
    if(!navbar) {
        return null;
    }

    return <>
        <Footer />
        <Navbar navbar={navbar} />
    </>
}

export default Layout;

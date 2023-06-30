import Navbar           from "../components/bricComponents/Navbar";
import { createClient } from "../prismicio";
import Card             from "../components/bricComponents/Card";
import Layout           from "../components/PageComponents/Layout";

const Services = ({services, navbar}) => {
    if(!services && !nvabr) {
        return null;
    }

    return <>
        <section className="section">
            <div className="justify-center items-center">
                <Card 
                    slices={services?.data?.card} 
                    navbar={navbar}
                /> 
            </div>
        </section>
 
        <Layout navbar={navbar}/>
    </>
}

export default Services

export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData });

    const services = await client.getSingle('services');
    const navbar = await client.getSingle('navigation');

    return {
        props: {
            services,
            navbar
        },
    };
}

import Navbar from "../components/bricComponents/Navbar";
import { createClient } from "../prismicio";
import Card from "../components/bricComponents/Card";

const Services = ({services}) => {
    console.log(services)
    return <>
        <section className="section">
            <div className="justify-center items-center">
                <Card slices={services?.data?.card}/> 
            </div>
        </section>
 
        <Navbar />
    </>
}

export default Services

export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData });

    const services = await client.getSingle('services');
  
    return {
        props: {
            services,
        },
    };
}

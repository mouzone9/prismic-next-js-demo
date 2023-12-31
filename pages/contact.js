import Layout           from "../components/PageComponents/Layout"
import { createClient } from "../prismicio"

const Contact = ({contact, navbar}) => {
    if(!contact && !navbar) {
        return null;
    }

    const text = contact?.data?.formtext[0]

    return <>
        <div className="container mx-auto px-4">
            <div className="space-y-96">
                <section  className='section bg-gray-200 text-center'>
                    <form className="container mx-auto px-60">
                        <div className="mb-6">
                            <label 
                                htmlFor="email" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {text.emailfield}
                            </label>
                            <input 
                                type="text" 
                                id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>
                        <div className="mb-6">
                            <label 
                                htmlFor="namefield" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                               {text.firstnamefield}
                            </label>
                            <input 
                                type="text" 
                                id="firstName" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>
                        <div className="mb-6">
                            <label 
                                htmlFor="name" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {text.namefield}
                            </label>
                            <input 
                                type="text" 
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>
                        <div className="mb-6">
                            <label 
                                htmlFor="message" 
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {text.messsagefield}
                            </label>
                            <textarea 
                                id="message"
                                rows="4" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment...">
                            </textarea>
                        </div>
                        <div className="mb-6">
                            <button 
                                type="button" 
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    Submit
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
        <Layout navbar={navbar}/>
    </>
}

export default Contact

export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData });

    const contact = await client.getSingle('contact');
    const navbar = await client.getSingle('navigation');

    return {
        props: {
            contact,
            navbar
        },
    };
}

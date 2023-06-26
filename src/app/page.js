import Image from 'next/image'
import styles from './page.module.css'
import { createClient } from '../../prismicio'

export default function Home({page}) {
  console.log("the page",page)
  return (
    <div>
        <h1>
          Prismic Demo
        </h1>
        <p>A nice description</p>
    </div>
  )
}

export async function getStaticProps({ params, previewData }) {

  const client = createClient({ previewData });

  const page = await client.getSingle('/');

  return {
    props: { page },
  };
}
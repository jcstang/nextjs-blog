// import Head from 'next/head';
// import Link from 'next/link';
// import { getSortedPostsData } from '../lib/posts';
import App from './app';

export default function Home({ allPostsData }) {
  return (
    <div>
      <h1>This is my app!!!!</h1>
      <App allPostsData={allPostsData}/>
    </div>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

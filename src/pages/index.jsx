import Head from 'next/head';
import LandingParallax from '../components/LandingParallax';

export default function Home() {
  return (
    <>
      <Head>
        <title>TensorGeeks</title>
        <meta name="description" content="Data intelligence solutions from TensorGeeks." />
      </Head>
      <LandingParallax />
    </>
  );
}

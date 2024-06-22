import React from 'react';
import Head from 'next/head';
import Layout from '../layout';
import AboutUs from '@/components/aboutpagecomp/AboutUs';
import Navbar from '@/components/navbar';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>About Us - Arasaki Games Studio</title>
        <meta name="description" content="Learn more about Arasaki Games Studio and our mission to create unique, engaging, and unforgettable gaming experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <AboutUs />
    </Layout>
  );
};

export default AboutPage;

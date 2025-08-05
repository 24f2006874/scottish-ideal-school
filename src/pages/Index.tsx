
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import WelcomeSection from '@/components/home/WelcomeSection';
import QuickLinks from '@/components/home/QuickLinks';
import CallToAction from '@/components/home/CallToAction';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Scottish Ideal School </title>
        <meta name="description" content="Welcome to Scottish Ideal School, providing quality education from Nursery to Class IX since 2015. Excellence through knowledge." />
      </Helmet>
      
      <HeroSection />
      <WelcomeSection />
      <QuickLinks />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;

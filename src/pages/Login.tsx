
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Helmet } from 'react-helmet-async';
import LoginPortal from '@/components/login/LoginPortal';

const Login = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Login Portal - Scottish Ideal School</title>
        <meta name="description" content="Access the student, teacher, and admin portal of Scottish Ideal School. View academic records, attendance, and other important information." />
      </Helmet>
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center">Login Portal</h1>
        <LoginPortal />
      </div>
    </MainLayout>
  );
};

export default Login;

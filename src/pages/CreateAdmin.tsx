
import React from 'react';
import AdminCreator from '@/components/AdminCreator';

const CreateAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Setup Admin Account</h1>
        <AdminCreator />
        <p className="text-sm text-gray-600 text-center mt-4">
          This page is for initial setup only. After creating the admin account, 
          you can access the admin panel through the regular sign-in flow.
        </p>
      </div>
    </div>
  );
};

export default CreateAdmin;

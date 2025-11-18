import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 h-full shadow-lg z-10 fixed left-0 top-0 bottom-0">
        <Sidebar />
      </div>
      <main className="flex-1 h-full overflow-y-auto ml-64">
        <Outlet />
      </main>
    </div>
  );
}
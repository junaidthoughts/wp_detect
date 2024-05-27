import React from 'react';
import { Route, Routes, Navigate } from 'react-router';

import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import Dashboard from '../../pages/Dashboard';



function AdminRoutes() {
  return (
    <>
      <Sidebar />
      <TopBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='*' element={<Navigate to="/orders" />} />
      </Routes>
    </>
  )
}

export default AdminRoutes

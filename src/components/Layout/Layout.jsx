import { Suspense } from 'react';
// import { lazy } from 'react';

import { Loader } from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}

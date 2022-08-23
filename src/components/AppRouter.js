import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

function AppRouter() {
  const user = false;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} key={Date.now()}/>
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} key={Date.now()} />
      ))}
    </Routes>
  );
}

export default AppRouter;

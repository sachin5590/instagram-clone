import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

// Route components
import Home from './pages/home';
const Profile = lazy(() => import ('./pages/profile'));
const Activity = lazy(() => import ('./pages/activity'));
const Account = lazy(() => import('./pages/accounts/Accounts'));
const Login = lazy(() => import ('./pages/accounts/login/Login'));
const Register = lazy(() => import ('./pages/accounts/signup/Signup'));

const Routes = ({ authenticated }: { authenticated: boolean }): JSX.Element => {

    const getRoutes = () => {
        if (authenticated) {
            return (
                <>
                    <Route
                        path="/profile"
                        element={
                            <Suspense fallback={<>...</>}>
                                <Profile />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/activity"
                        element={
                            <Suspense fallback={<>...</>}>
                                <Activity />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<>...</>}>
                                <Home />
                            </Suspense>
                        }
                    />
                </>
            )
        }
        return (
            <>
                <Route
                    path="/account/*"
                    element={
                        <Suspense fallback={<>...</>}>
                            <Account />
                        </Suspense>        
                    }
                />
            </>
        );
    }

    return (
        // TODO: Use Loader in place of Loading text
        <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                {getRoutes()}
            </Switch>
        </Suspense>
    );
};

export default Routes;

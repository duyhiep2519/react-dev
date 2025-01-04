import { Routes, Route } from 'react-router';
import { ROUTES } from './consts';
import Home from '../../pages/Home';
import { About } from '@/pages/About';
import { NotFound } from '@/pages/404';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.Home} element={<Home />} />
            <Route path={ROUTES.About} element={<About />} />
            <Route element={<NotFound />} />
        </Routes>
    );
};

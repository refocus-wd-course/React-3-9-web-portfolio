import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact, { contactAction } from './pages/Contact';
import NotFound from './pages/NotFound';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route
                path='contact'
                element={<Contact />}
                action={contactAction}
            />
            <Route path='services' element={<Services />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

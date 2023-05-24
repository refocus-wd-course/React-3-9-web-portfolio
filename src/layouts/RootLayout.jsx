import { NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='services'>Services</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='contact'>Contact</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;

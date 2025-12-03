import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    // Inline styles object
    const styles = {
        navbar: {
            backgroundColor: '#343a40', // Equivalent to bg-dark
            marginBottom: '1rem', // Equivalent to mb-4 (approximating 1rem for Bootstrap spacing)
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
        },
        container: {
            maxWidth: '1140px', // Standard container max width
            margin: '0 auto', // Center the container
            paddingLeft: '15px',
            paddingRight: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        navbarBrand: {
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1.25rem',
            lineHeight: 'inherit',
        },
        navbarNav: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto', // Equivalent to ms-auto
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        navLink: {
            color: 'rgba(255, 255, 255, 0.75)', // Light grey color
            textDecoration: 'none',
            padding: '0.5rem 1rem', // Standard link padding
            display: 'block',
        },
        navLinkHover: {
            color: '#fff', // White on hover
        }
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.container}>
                <Link style={styles.navbarBrand} to="/">ChainTech</Link>
                <div style={styles.navbarNav}>
                    {!user ? (
                        <>
                            <Link
                                style={styles.navLink}
                                to="/login"
                            // Note: Inline styles don't directly support :hover, 
                            // so this is a limitation compared to CSS classes.
                            >
                                Login
                            </Link>
                            <Link
                                style={styles.navLink}
                                to="/register"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <Link
                            style={styles.navLink}
                            to="/profile"
                        >
                            Profile
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
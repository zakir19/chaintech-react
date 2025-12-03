import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = login(email, password);

        if (result.success) {
            navigate('/profile'); // Redirect to profile on success
        } else {
            setError(result.message); // Show error message
        }
    };

    // --- Inline Styles for Simple/Sober UI ---
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh', // Centers the form vertically in the viewport
            padding: '20px',
        },
        card: {
            maxWidth: '400px', // A slightly smaller, focused card
            width: '100%',
            padding: '30px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
        },
        title: {
            textAlign: 'center',
            marginBottom: '25px',
            color: '#333333',
        },
        formGroup: {
            marginBottom: '18px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: '600',
            color: '#555555',
            fontSize: '14px',
        },
        input: {
            width: '100%',
            padding: '10px 12px',
            border: '1px solid #cccccc',
            borderRadius: '4px',
            boxSizing: 'border-box', // Ensures padding doesn't expand the element width
            fontSize: '16px',
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff', // Clean primary blue
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: '10px',
        },
        errorAlert: {
            padding: '10px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
            borderRadius: '4px',
            marginBottom: '15px',
            textAlign: 'center',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Account Login</h2>
                {error && <div style={styles.errorAlert}>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            style={styles.input}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            style={styles.input}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" style={styles.button}>Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
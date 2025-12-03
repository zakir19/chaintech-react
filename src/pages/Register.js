import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type === 'email' ? 'email' : e.target.type]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure all fields are filled before attempting to register
        if (!formData.name || !formData.email || !formData.password) {
            alert('Please fill out all fields.');
            return;
        }

        register(formData);
        alert('Registration Successful! Please Login.');
        navigate('/login');
    };

    // --- Consistent Inline Styles ---
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh', // Centers the form vertically in the viewport
            padding: '20px',
        },
        card: {
            maxWidth: '400px', // Matches Login card width
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
            backgroundColor: '#007bff', // Clean primary blue (Matches Login button)
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Name</label>
                        <input
                            type="text"
                            style={styles.input}
                            required
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            style={styles.input}
                            required
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            style={styles.input}
                            required
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                    <button type="submit" style={styles.button}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { user, updateUser, logout } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);

    // Ensure user is defined before accessing properties
    const initialEditData = user ? { name: user.name, email: user.email } : { name: '', email: '' };
    const [editData, setEditData] = useState(initialEditData);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUser(editData);
        setIsEditing(false);
    };

    // --- Consistent Inline Styles ---
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start', // Align to top of screen
            minHeight: '80vh',
            padding: '20px',
        },
        card: {
            maxWidth: '600px', // Wider card for profile info
            width: '100%',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            marginTop: '30px',
        },
        cardHeader: {
            padding: '15px 30px',
            backgroundColor: '#f8f9fa', // Light gray header
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
        },
        cardBody: {
            padding: '30px',
        },
        title: {
            color: '#333333',
            margin: 0,
            fontSize: '1.5rem',
        },
        // VIEW MODE STYLES
        userInfo: {
            marginBottom: '15px',
            fontSize: '16px',
        },
        nameLabel: {
            fontWeight: 'bold',
            color: '#555555',
            marginRight: '5px',
        },
        // EDIT MODE STYLES (MATCHING LOGIN FORM)
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
            boxSizing: 'border-box',
            fontSize: '16px',
        },
        // BUTTON STYLES
        primaryButton: { // Edit button (primary blue)
            padding: '10px 18px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
        },
        successButton: { // Save button (same blue as Login button)
            padding: '10px 18px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            marginRight: '10px',
        },
        secondaryButton: { // Cancel button
            padding: '10px 18px',
            backgroundColor: '#6c757d', // Gray secondary
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
        },
        dangerButton: { // Logout button
            padding: '8px 15px',
            backgroundColor: 'transparent',
            color: '#dc3545', // Danger red outline effect
            border: '1px solid #dc3545',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
        }
    };
    // ---------------------------------------------

    // Handle case where user might be null (though ProtectedRoute should prevent this)
    if (!user) {
        return <div style={styles.container}>Loading user data...</div>;
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.cardHeader}>
                    <h3 style={styles.title}>Account Information</h3>
                    <button
                        onClick={logout}
                        style={styles.dangerButton}
                    >
                        Logout
                    </button>
                </div>
                <div style={styles.cardBody}>
                    {!isEditing ? (
                        // View Mode
                        <div>
                            <p style={styles.userInfo}>
                                <strong style={styles.nameLabel}>Name:</strong> {user.name}
                            </p>
                            <p style={styles.userInfo}>
                                <strong style={styles.nameLabel}>Email:</strong> {user.email}
                            </p>
                            <button
                                style={styles.primaryButton}
                                onClick={() => {
                                    setEditData({ name: user.name, email: user.email }); // Reset data when entering edit mode
                                    setIsEditing(true);
                                }}
                            >
                                Edit Information
                            </button>
                        </div>
                    ) : (
                        // Edit Mode
                        <form onSubmit={handleUpdate}>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Name</label>
                                <input
                                    type="text"
                                    style={styles.input}
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Email</label>
                                <input
                                    type="email"
                                    style={styles.input}
                                    value={editData.email}
                                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                />
                            </div>
                            <button type="submit" style={styles.successButton}>Save</button>
                            <button
                                type="button"
                                style={styles.secondaryButton}
                                onClick={() => setIsEditing(false)}
                            >
                                Cancel
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
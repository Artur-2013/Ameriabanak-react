import React from 'react';

export default function LoginCard({ children }) {
  return (
    <div
      style={{
        background: '#fff',
        padding: '40px 45px',
        borderRadius: '4px',
        boxShadow: '0 12px 35px rgba(0,0,0,0.12)',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {children}
    </div>
  );
}
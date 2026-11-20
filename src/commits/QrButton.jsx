import React from 'react';

export default function QrButton() {
  return (
    <button
      type="button"
      style={{
        width: '100%',
        height: '42px',
        background: 'transparent',
        border: '1px solid #d0d0d0',
        borderRadius: '4px',
        fontSize: '13px',
        color: '#444',
        cursor: 'pointer',
        marginBottom: '22px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}
    >
      <i className="fa-solid fa-qrcode"></i> Մուտք QR կոդով
    </button>
  );
}
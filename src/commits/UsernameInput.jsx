import React from 'react';

export default function UsernameInput({ value, onChange }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '6px', fontWeight: '500' }}>
        Մուտքանուն
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          height: '42px',
          backgroundColor: '#f4f5f7',
          border: '1px solid #dcdcdc',
          borderRadius: '4px',
          padding: '0 12px',
          outline: 'none',
          fontSize: '14px',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
}
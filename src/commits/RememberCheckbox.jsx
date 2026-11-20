import React from 'react';

export default function RememberCheckbox({ checked, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '13px', color: '#555' }}>
      <input
        type="checkbox"
        id="remember"
        checked={checked}
        onChange={onChange}
        style={{ width: '16px', height: '16px', accentColor: '#4b9b21', cursor: 'pointer' }}
      />
      <label htmlFor="remember" style={{ cursor: 'pointer' }}>Հիշել ինձ</label>
    </div>
  );
}
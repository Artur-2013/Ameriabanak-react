import React, { useState } from 'react';

export default function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '6px', fontWeight: '500' }}>
        Գաղտնաբառ
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          style={{
            width: '100%',
            height: '42px',
            backgroundColor: '#f4f5f7',
            border: '1px solid #dcdcdc',
            borderRadius: '4px',
            padding: '0 40px 0 12px',
            outline: 'none',
            fontSize: '14px',
            boxSizing: 'border-box'
          }}
        />
        <span
          onClick={() => setShow(!show)}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            fontSize: '12px',
            color: '#4b9b21',
            fontWeight: '600'
          }}
        >
          {show ? 'Թաքցնել' : 'Ցույց տալ'}
        </span>
      </div>
    </div>
  );
}
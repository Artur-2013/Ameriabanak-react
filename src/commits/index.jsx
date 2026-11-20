import React, { useState } from 'react';
import LoginTitle from './LoginTitle';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import RememberCheckbox from './RememberCheckbox';
import SubmitButton from './SubmitButton';
import QrButton from './QrButton';
import ForgotPasswordLink from './ForgotPasswordLink';
import RegisterLink from './RegisterLink';
import LoginCard from './LoginCard';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#52b322',
        overflowX: 'hidden'
      }}
    >
      {/* 1. ՎԵՐԵՎԻ ՀԱՏՎԱԾ */}
      <div
        style={{
          width: '100%',
          padding: '24px 50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px' }}>
          <img
            src="https://assets.myameria.am/authAsset/logo.svg"
            alt="MyAmeria Logo"
            style={{ height: '32px', objectFit: 'contain' }}
          />
        </div>

        <select
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '4px',
            padding: '6px 14px',
            fontSize: '13px',
            outline: 'none',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          <option value="hy" style={{ color: '#000' }}>ՀԱՅ</option>
          <option value="en" style={{ color: '#000' }}>ENG</option>
          <option value="ru" style={{ color: '#000' }}>РУС</option>
        </select>
      </div>

      {/* 2. ՄԵՋՏԵՂԻ ՀԱՏՎԱԾ (320px հեռավորությամբ) */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          width: '100%',
          maxWidth: '1620px',
          margin: '0 auto',
          padding: '20px 60px 55px 60px',
          gap: '320px',
          boxSizing: 'border-box',
          flexWrap: 'wrap'
        }}
      >
        {/* Ձախ կողմ */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '420px', maxWidth: '100%', flexShrink: 0 }}>
          <LoginCard>
            <LoginTitle />
            <form onSubmit={(e) => e.preventDefault()}>
              <UsernameInput value={username} onChange={(e) => setUsername(e.target.value)} />
              <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
              <RememberCheckbox checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <SubmitButton />
              <QrButton />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '15px' }}>
                <ForgotPasswordLink />
                <RegisterLink />
              </div>
            </form>
          </LoginCard>

          {/* Հեռախոս և Էլ. փոստ */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '24px',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '500',
              padding: '0 4px'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.6)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                </svg>
              </span>
              +374 10 56 11 11
            </span>

            <span style={{ opacity: 0.4, fontSize: '20px' }}>|</span>

            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.6)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              info@ameriabank.am
            </span>
          </div>
        </div>

        {/* Աջ կողմ */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '45px 50px',
            borderRadius: '4px',
            width: '540px',
            maxWidth: '100%',
            color: '#1a2e10',
            marginBottom: '12px',
            boxSizing: 'border-box'
          }}
        >
          <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '18px', color: '#111' }}>
            Բարի գալուստ MyAmeria
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.65', marginBottom: '30px', color: '#223318' }}>
            Այս հարթակից կարող են օգտվել միայն ֆիզիկական անձ հաճախորդները MyAmeria-ի իրենց մուտքանունով և գաղտնաբառով: Օնլայն բանկինգի նախկին տարբերակից օգտվելու համար սեղմեք կոճակը
          </p>
          <button
            style={{
              backgroundColor: '#4a8bbe',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            Օնլայն բանկինգ
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 3. ՍՊԻՏԱԿ FOOTER */}
      <footer
        style={{
          backgroundColor: '#ffffff',
          padding: '20px 50px',
          borderTop: '1px solid #eaeaea',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          boxSizing: 'border-box',
          width: '100%',
          marginTop: 'auto'
        }}
      >
        <div>
          <a href="#terms" style={{ display: 'block', fontSize: '12px', color: '#666', textDecoration: 'none', marginBottom: '10px' }}>
            Պայմաններ և դրույթներ
          </a>
          <div style={{ display: 'flex', gap: '14px', color: '#555', alignItems: 'center' }}>
            <a href="#fb" style={{ color: '#555', display: 'inline-flex' }} aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
              </svg>
            </a>
            <a href="#li" style={{ color: '#555', display: 'inline-flex' }} aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 8.5H3.56V19.5h3.38V8.5zM5.25 3.5a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 13.02c0-2.76-1.47-4.04-3.44-4.04-1.58 0-2.29.87-2.69 1.48V8.5h-3.38c.04.96 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.89.27-.66.87-1.35 1.89-1.35 1.33 0 1.87 1.02 1.87 2.51V19.5h3.38v-6.48z" />
              </svg>
            </a>
            <a href="#x" style={{ color: '#555', display: 'inline-flex' }} aria-label="X">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#ig" style={{ color: '#555', display: 'inline-flex' }} aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', lineHeight: '1.4' }}>
          <div>© 2026 Ameriabank ՓԲԸ</div>
          <div>Ամերիաբանկ ՓԲԸ-ն վերահսկվում է ՀՀ ԿԲ կողմից</div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ backgroundColor: '#000', color: '#fff', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.05.62-2.71 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.07-.52 2.71-1.3z" />
            </svg>
            App Store
          </div>
          <div style={{ backgroundColor: '#000', color: '#fff', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
            </svg>
            Google Play
          </div>
        </div>
      </footer>
    </div>
  );
}
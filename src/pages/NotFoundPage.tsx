import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout title="Strona nie znaleziona">
      <div style={{
        textAlign: 'center',
        padding: '50px',
        marginTop: '20px',
        background: 'var(--bs-secondary-color)',
        borderRadius: '15px',
        width: '80%',
        margin: 'auto'
      }}>
        <h1 style={{ color: 'var(--bs-body-bg)', marginBottom: '20px' }}>404 - Strona nie znaleziona</h1>
        <p style={{ color: 'var(--bs-body-bg)', fontSize: '18px', marginBottom: '30px' }}>
          Przepraszamy, strona której szukasz nie istnieje.
        </p>
        <Link 
          to="/" 
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: '#995e43',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            transition: 'background 0.3s'
          }}
        >
          Wróć do strony głównej
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-dark" style={{
      height: '129px',
      margin: 'auto',
      marginTop: '0px',
      transform: 'rotate(0deg)',
      paddingBottom: '0px',
      marginBottom: '-35px',
      borderRadius: '4px',
    }}>
      <div className="container text-white pt-2" style={{
        width: '100vw',
        height: 'auto',
        margin: 'auto',
        marginTop: '0px',
        marginBottom: '0px',
      }}>
        <ul className="list-inline" style={{
          paddingBottom: '0px',
          marginBottom: '-0px'
        }}>
          <li className="list-inline-item me-4" style={{ marginBottom: '5%' }}>
            <a href="https://www.facebook.com/profile.php?id=61566859973402">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook text-light mt-2" style={{ fontSize: '29px' }}>
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <a href="https://fexcode.pl/">
        <em className="" style={{ color: 'var(--bs-body-bg)' }}>Powered by Fexcode - 2024</em>
      </a>
    </footer>
  );
};

export default Footer;

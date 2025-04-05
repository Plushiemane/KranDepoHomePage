import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import MenuItem from '../../components/MenuItem';

const NapojePage: React.FC = () => {
  return (
    <Layout title="Napoje">
      <section style={{
        width: '80%',
        height: '40%',
        opacity: 1,
        marginBottom: '2.5%',
        marginRight: '10%',
        marginLeft: '10%',
        background: "url('https://indieground.net/wp-content/uploads/2022/07/Freebie-VintagePaperTextures-Preview-05.jpg') round, #dca471",
        borderRadius: '63px',
        border: '10px solid #995e43',
        borderTop: '10px solid #995f45'
      }}>
        <div style={{ margin: 'auto', marginTop: '2%', marginBottom: '2%' }}>
          <img style={{ width: '30%', height: '15%', marginRight: '35%', marginLeft: '35%' }} 
               src="/assets/img/sigma.webp" width="358" height="239" alt="Logo Kran Nadziei" />
          <div style={{
            margin: 'auto',
            marginTop: '2%',
            marginBottom: '2%',
            marginRight: 'auto',
            marginLeft: 'auto',
            background: '#d08d4e',
            textAlign: 'center',
            borderRadius: '108px',
            borderTopWidth: '9px',
            borderTopColor: 'var(--bs-emphasis-color)',
            width: '80%',
            height: '10%'
          }}>
            <Link to="/menu">
              <h3 className="fs-1 text-center" data-bss-hover-animate="pulse" style={{
                fontFamily: "'Alegreya Sans SC', sans-serif",
                fontSize: '63px',
                margin: 'auto',
                width: '60%',
                height: '10%'
              }}><strong><span style={{ color: 'rgb(0, 0, 0)' }}>Menu</span></strong></h3>
            </Link>
          </div>
        </div>
        
        <h1 style={{
          textAlign: 'center',
          fontFamily: 'Alkatra, serif',
          borderBottom: '10px solid rgb(208,143,82)',
          color: 'var(--bs-emphasis-color)'
        }}>Napoje</h1>
        
        <div className="container" style={{ margin: 'auto', marginLeft: 'auto', color: 'var(--bs-emphasis-color)' }}>
          <MenuItem 
            name="Coca Cola" 
            defaultPrice="6.00zł" 
            description="0.25 l" 
            image="/assets/img/photo-1599475143531-695b4f4b5fa8.jpg" 
          />
          
          <MenuItem 
            name="Fanta" 
            defaultPrice="6.00zł" 
            description="0.25 l" 
            image="/assets/img/Fanta-Pomaranczowa-250ml.webp" 
          />
          
          <MenuItem 
            name="Sprite" 
            defaultPrice="6.00zł" 
            description="0.25 l" 
            image="/assets/img/Sprite-250ml.jpg" 
          />
          
          <MenuItem 
            name="Woda gazowana" 
            defaultPrice="5.00zł" 
            description="0.5 l" 
          />
          
          <MenuItem 
            name="Woda niegazowana" 
            defaultPrice="5.00zł" 
            description="0.5 l" 
          />
          
          <MenuItem 
            name="Soki Cappy" 
            defaultPrice="8.00zł" 
            description="0.25 l" 
          />
          
          <MenuItem 
            name="Oshee" 
            defaultPrice="9.00zł" 
            description="0.75 l" 
          />
          
          <MenuItem 
            name="Fuze Tea" 
            defaultPrice="8.00zł" 
            description="0.5 l" 
          />
          
          <MenuItem 
            name="Tiger" 
            defaultPrice="9.00zł" 
            description="0.25 l" 
          />
        </div>
      </section>
    </Layout>
  );
};

export default NapojePage;

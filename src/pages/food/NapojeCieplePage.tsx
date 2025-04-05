import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import MenuItem from '../../components/MenuItem';

const NapojeCieplePage: React.FC = () => {
  return (
    <Layout title="Napoje ciepłe">
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
        }}>Napoje ciepłe</h1>
        
        <div className="container" style={{ margin: 'auto', marginLeft: 'auto', color: 'var(--bs-emphasis-color)' }}>
          <MenuItem 
            name="Kawa czarna" 
            defaultPrice="10.00zł" 
            image="/assets/img/photo-1631305588811-3f8c5a222317.jpg" 
          />
          
          <MenuItem 
            name="Kawa biała" 
            defaultPrice="10.00zł" 
            image="/assets/img/pexels-photo-17391565.jpeg" 
          />
          
          <MenuItem 
            name="Herbata (wiele smaków)" 
            defaultPrice="10.00zł" 
            image="/assets/img/g01cd5e8eee30732ae90af629b2ec751d47857209bb7678752de49bf08e7713eb1015fcb714c55423e0e9a6579531d4f595df2db6fd4782dc35f0660317749a5d_640.webp" 
          />
          
          <MenuItem 
            name="Grzaniec" 
            defaultPrice="15.00zł" 
            image="/assets/img/Grzaniec-Polish-Mulled-Wine-1600sq-o.webp" 
          />
        </div>
      </section>
    </Layout>
  );
};

export default NapojeCieplePage;

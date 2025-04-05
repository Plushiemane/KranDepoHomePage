import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { useMenu } from '../../context/MenuContext';

interface MenuItemProps {
  name: string;
  description?: string;
  image?: string;
  dataItemName: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, image, dataItemName }) => {
  const { menuItems } = useMenu();
  const item = menuItems.find(item => item.nazwa.toLowerCase() === dataItemName.toLowerCase());
  const price = item ? `${item.cena.toFixed(2)}zł` : '28.00zł'; // Default price if not found
  
  return (
    <div className="row" style={{
      marginBottom: '5%',
      marginTop: '5%',
      borderWidth: '2px',
      borderStyle: 'dashed',
      borderRadius: '25px',
      marginRight: '2%',
      marginLeft: '2%'
    }}>
      <div className="col-md-6 col-xxl-6">
        <div className="card" style={{
          background: 'rgba(255,255,255,0)',
          marginTop: '2.5%',
          marginBottom: '2.5%',
          borderColor: 'transparent',
          marginRight: 'auto'
        }}>
          <div className="card-body" style={{
            borderRadius: '34px',
            border: '7px double #d08f52',
            background: 'var(--bs-secondary-color)',
            width: '100%',
            marginTop: '25%',
            marginBottom: '25%',
            marginRight: '0'
          }}>
            <h4 className="card-title" style={{ color: 'var(--bs-body-bg)' }}>{name}</h4>
            {description && (
              <h1 style={{ fontSize: '14px' }}><span style={{ color: 'rgb(255, 255, 255)' }}>{description}</span></h1>
            )}
            <div style={{
              background: '#212529e1',
              borderRadius: '20px',
              margin: 'auto',
              width: '40%',
              marginRight: '80%',
              display: 'inline-block'
            }}>
              <h6 className="text-muted mb-2" style={{
                background: 'transparent',
                textAlign: 'center',
                margin: 'auto',
                color: '#ffffff'
              }}>
                <span className="price-value" data-item-name={dataItemName} style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                  {price}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      
      {image && (
        <div className="col-md-6 d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center" style={{
          background: "url('/assets/img/ga2368c7bacbea5c862b5a0dcf5b6c1c5e3be67c5e43d0c1273f072fef8dacc9918875c11cfdcf5817c5f0aa9bb27d834e92ce6a76154e4f587b1b155b15c10fe_640-2.webp')",
          borderRadius: '25px'
        }}>
          <img src={image} width="110" height="353" style={{
            borderRadius: '25px',
            marginTop: '10%',
            marginBottom: '10%',
            marginRight: '40%',
            marginLeft: '40%',
            borderWidth: '4px',
            borderStyle: 'solid',
            width: '80%',
            height: 'auto'
          }} alt={name} />
        </div>
      )}
    </div>
  );
};

const DlaDzieciPage: React.FC = () => {
  return (
    <Layout title="Dla dzieci">
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
               src="/assets/img/sigma.webp" width="358" height="239" alt="Logo" />
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
        }}>Dla dzieci</h1>
        
        <div className="container" style={{ marginLeft: 'auto', color: 'var(--bs-emphasis-color)' }}>
          <MenuItem 
            name="Nuggetsy z frytkami" 
            description="(Drób, 200g)" 
            image="/assets/img/nuggetsy.webp" 
            dataItemName="Nuggetsy z frytkami" 
          />
          
          <MenuItem 
            name="Naleśniki na słodko" 
            description="(2szt. i gałka lodów)" 
            dataItemName="Naleśniki na słodko" 
          />
        </div>
      </section>
    </Layout>
  );
};

export default DlaDzieciPage;

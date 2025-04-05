import React from 'react';
import { useMenu } from '../context/MenuContext';
import { findItemPrice } from '../services/api';

interface MenuItemProps {
  name: string;
  defaultPrice: string;
  description?: string;
  quantity?: string;
  image?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, defaultPrice, description, quantity, image }) => {
  const { menuItems } = useMenu();
  
  // Try to find the price from the API, otherwise use the default price
  const apiPrice = findItemPrice(menuItems, name);
  const displayPrice = apiPrice !== undefined ? `${apiPrice.toFixed(2)}zł` : defaultPrice;
  
  return (
    <div className="row" style={{
      marginBottom: '5%',
      marginTop: '5%',
      marginRight: '2%',
      marginLeft: '2%',
      borderRadius: '25px',
      border: '2px dashed var(--bs-body-color)'
    }}>
      <div className="col-md-6">
        <div className="card" style={{
          background: 'rgba(255,255,255,0)',
          marginTop: '2.5%',
          marginBottom: '2.5%',
          borderColor: 'transparent'
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
            {quantity && (
              <h1 style={{ fontSize: '14px' }}><span style={{ color: 'rgb(255, 255, 255)' }}>{quantity}</span></h1>
            )}
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
                <span className="price-value" data-item-name={name} style={{ color: 'rgba(255, 255, 255, 0.75)' }}>{displayPrice}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      
      {image && (
        <div className="col-md-6 d-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center" style={{
          background: "url('/assets/img/ga2368c7bacbea5c862b5a0dcf5b6c1c5e3be67c5e43d0c1273f072fef8dacc9918875c11cfdcf5817c5f0aa9bb27d834e92ce6a76154e4f587b1b155b15c10fe_640-2.webp')",
          borderRadius: '25px'
        }}>
          <img src={image} style={{
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

export default MenuItem;

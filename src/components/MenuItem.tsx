import React from 'react';
import { useMenu } from '../context/MenuContext';

interface MenuItemProps {
  name: string;
  description?: string;
  image?: string;
  dataItemName: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, image, dataItemName }) => {
  const { menuItems, loading } = useMenu();
  const item = menuItems.find(item => item.nazwa.toLowerCase() === dataItemName.toLowerCase());
  const price = item ? `${item.cena.toFixed(2)}zł` : loading ? 'Ładowanie...' : 'Cena niedostępna';
  
  return (
    <div className="row mb-[5%] mt-[5%] border-2 border-dashed rounded-[25px] mx-[2%]">
      <div className="col-md-6 col-xxl-6">
        <div className="card bg-transparent mt-[2.5%] mb-[2.5%] border-transparent mr-auto">
          <div className="card-body rounded-[34px] border-7 border-double border-[#d08f52] bg-[var(--bs-secondary-color)] w-full my-[25%] mr-0">
            <h4 className="card-title text-[var(--bs-body-bg)]">{name}</h4>
            {description && (
              <h1 className="text-sm"><span className="text-white">{description}</span></h1>
            )}
            <div className="bg-[#212529e1] rounded-[20px] mx-auto w-[40%] mr-[80%] inline-block">
              <h6 className="text-muted mb-2 bg-transparent text-center mx-auto text-white">
                <span 
                  className="price-value text-white/75" 
                  data-item-name={dataItemName}
                >
                  {price}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      
      {image && (
        <div className="col-md-6 flex justify-center items-center content-center self-center justify-xxl-center rounded-[25px] bg-[url('/assets/img/ga2368c7bacbea5c862b5a0dcf5b6c1c5e3be67c5e43d0c1273f072fef8dacc9918875c11cfdcf5817c5f0aa9bb27d834e92ce6a76154e4f587b1b155b15c10fe_640-2.webp')]">
          <img 
            src={image} 
            className="rounded-[25px] my-[10%] mx-[40%] border-4 border-solid w-[80%] h-auto"
            alt={name} 
          />
        </div>
      )}
    </div>
  );
};

export default MenuItem;

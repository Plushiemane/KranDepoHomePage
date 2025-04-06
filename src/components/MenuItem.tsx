import React from 'react';

interface MenuItemProps {
  name: string;
  description?: string;
  dataItemName: string;
  price?: number;
  imageUrl?: string;
}

// Map of default prices for common items when API price is missing
const fallbackPrices: Record<string, number> = {
  'Woda niegazowana': 5.00,
  'Woda gazowana': 5.00,
  'Soki Cappy': 8.00,
  'Fuze Tea': 8.00,
  'Tiger': 9.00,
  'Coca Cola': 6.00,
  'Fanta': 6.00,
  'Sprite': 6.00
};

const MenuItem: React.FC<MenuItemProps> = ({ 
  name, 
  description, 
  dataItemName, 
  price,
  imageUrl 
}) => {
  // Try to get price from props, then from fallback map, then default to "Cena niedostępna"
  const effectivePrice = price !== undefined ? price : 
    (name in fallbackPrices ? fallbackPrices[name] : undefined);
  
  const formattedPrice = effectivePrice !== undefined ? 
    `${effectivePrice.toFixed(2)}zł` : 'Cena niedostępna';
  
  const hasImage = imageUrl && imageUrl.trim() !== '';
  
  return (
    <div className="row mb-[5%] mt-[5%] border-2 border-dashed rounded-[25px] mx-[2%]">
      {/* First column: Name, description, price */}
      <div className="col-md-6 col-xxl-6">
        <div className="card bg-transparent mt-[2.5%] mb-[2.5%] border-transparent mr-auto">
          <div className="card-body rounded-[34px] border-7 border-double border-[#d08f52] bg-[var(--bs-secondary-color)] w-full my-[25%] mr-0">
            <h4 className="card-title text-white font-bold text-xl">{name}</h4>
            {description && (
              <p className="text-xs text-white/80 mt-1 mb-2">{description}</p>
            )}
            <div className="bg-[#212529e1] rounded-[20px] mx-auto w-[40%] mr-[80%] inline-block">
              <h6 className="text-muted mb-2 bg-transparent text-center mx-auto text-white">
                <span 
                  className="price-value text-white/75" 
                  data-item-name={dataItemName}
                >
                  {formattedPrice}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second column: Photo or empty space */}
      <div className="col-md-6 flex justify-center items-center content-center self-center justify-xxl-center rounded-[25px] bg-[url('/assets/img/ga2368c7bacbea5c862b5a0dcf5b6c1c5e3be67c5e43d0c1273f072fef8dacc9918875c11cfdcf5817c5f0aa9bb27d834e92ce6a76154e4f587b1b155b15c10fe_640-2.webp')]">
        {hasImage && (
          <>
            {console.log(`Trying to load image from: ${imageUrl}`)}
            <img
              src={imageUrl}
              className="rounded-[25px] my-[10%] mx-[40%] border-4 border-solid w-[80%] h-auto"
              alt={name}
              onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
          console.warn(`Failed to load image from: ${imageUrl}`);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MenuItem;

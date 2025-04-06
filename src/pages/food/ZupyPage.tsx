import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import MenuItem from '../../components/MenuItem';
import { useMenu, MenuCategory } from '../../context/MenuContext';

const ZupyPage: React.FC = () => {
  const { loading, error, getCategoryItems } = useMenu();
  
  // Get items from category 3 (Zupy)
  const zupy = getCategoryItems(MenuCategory.Zupy);

  return (
    <Layout title="Zupy">
      <section className="w-[80%] min-h-fit mx-auto mb-8 py-6 px-4
                         bg-[#dca471] bg-[url('/assets/img/Freebie-VintagePaperTextures-Preview-05.webp')] 
                         rounded-[63px] border-[10px] border-[#995e43] border-t-[10px] border-t-[#995f45]">
        <div className="mx-auto my-[2%] text-center">
          <img className="w-[30%] max-w-[250px] mx-auto" 
               src="/assets/img/sigma.webp" alt="Logo 'Kranu Nadziei'" />
          <div className="mx-auto my-[2%] bg-[#d08d4e] text-center rounded-[108px] 
                          border-t-[9px] border-t-[var(--bs-emphasis-color)] w-[80%] py-2">
            <Link to="/menu">
              <h3 className="text-center font-['Alegreya_Sans_SC'] text-[63px]" data-bss-hover-animate="pulse">
                <strong><span className="text-black">Menu</span></strong>
              </h3>
            </Link>
          </div>
        </div>
        
        <h1 className="text-center font-['Alkatra'] border-b-[10px] border-[rgb(208,143,82)] text-[var(--bs-emphasis-color)]">
          Zupy
        </h1>
        
        <div className="container mx-auto text-[var(--bs-emphasis-color)]">
          {loading ? (
            <p className="text-center p-8 text-white font-bold text-xl">Ładowanie menu...</p>
          ) : error ? (
            <p className="text-center p-8 text-red-500 font-bold">Błąd ładowania menu: {error}</p>
          ) : zupy.length > 0 ? (
            zupy.map((item, index) => (
              <MenuItem 
                key={item.id || index}
                name={item.nazwa}
                description={item.opis}
                dataItemName={item.nazwa}
                price={item.cena}
                imageUrl={item.linkdofoto}
              />
            ))
          ) : (
            <p className="text-center p-8 text-white font-bold">Obecnie brak zup w menu.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ZupyPage;

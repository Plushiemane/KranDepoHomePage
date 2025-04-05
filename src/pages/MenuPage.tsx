import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

interface MenuCategoryProps {
  href: string;
  imageSrc: string;
  altText: string;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ href, imageSrc, altText }) => {
  return (
    <Link to={href} className="w-1/2 p-1 sm:p-1 flex justify-center">
      <img 
        data-bss-disabled-mobile="true" 
        data-bss-hover-animate="pulse" 
        className="w-full h-auto max-w-[250px] hover:scale-105 transition-transform"
        src={imageSrc} 
        alt={altText} 
      />
    </Link>
  );
};

const MenuPage: React.FC = () => {
  return (
    <Layout title="Menu">
      {/* Main container - removed height constraints */}
      <section className="w-[100%] min-h-fit opacity-100 my-[2.5%] mx-[0.0%] rounded-[63px] 
                          border-[10px] border-[#995e43] border-t-[10px] border-t-[#995f45] 
                          bg-[#dca471] bg-[url('/assets/img/Freebie-VintagePaperTextures-Preview-05.webp')]">
        <div className="mx-auto my-[2%]">
          <img 
            className="w-[25%] mx-auto" 
            src="/assets/img/sigma.webp" 
            alt="Logo Kran Nadziei"
          />
          <div className="mx-auto my-[2%] bg-[#d08d4e] text-center rounded-[108px] 
                          border-t-[9px] border-t-[var(--bs-emphasis-color)] w-[80%] py-2">
            <h3 className="text-center font-['Alegreya_Sans_SC'] text-[63px] mx-auto">
              <strong><span className="text-black">Menu</span></strong>
            </h3>
          </div>
        </div>
        
        <div>
          <div className="container mx-auto mb-0 w-full p-0">
            {/* First row of menu categories */}
            <div className="text-center mx-auto mr-[1.25%] ml-[1.25%] mb-[2%] w-[97.5%]">
              <div className="w-[80%] mx-auto rounded-[25px] border-[9px] border-[rgb(153,95,69)] border-style-groove
                              p-2 bg-[url('/assets/img/ga2368c7bacbea5c862b5a0dcf5b6c1c5e3be67c5e43d0c1273f072fef8dacc9918875c11cfdcf5817c5f0aa9bb27d834e92ce6a76154e4f587b1b155b15c10fe_640-1.webp')]">
                <div className="flex flex-wrap justify-center">
                  <MenuCategory 
                    href="/potrawy/daniaglowne" 
                    imageSrc="/assets/img/daniaglowne_v1.png" 
                    altText="Dania Główne" 
                  />
                  <MenuCategory 
                    href="/potrawy/salatki" 
                    imageSrc="/assets/img/salatki_v1.png" 
                    altText="Sałatki" 
                  />
                </div>
              </div>
            </div>
            
            {/* Second row of menu categories */}
            <div className="text-center mx-auto mr-[1.25%] ml-[1.25%] mb-[2%] w-[97.5%]">
              <div className="w-[80%] mx-auto rounded-[25px] border-[9px] border-[rgb(153,95,69)] border-style-groove
                              p-2 bg-[url('/assets/img/ga2368c7bacbea5c862b5a0dcf5b6c1c5e3be67c5e43d0c1273f072fef8dacc9918875c11cfdcf5817c5f0aa9bb27d834e92ce6a76154e4f587b1b155b15c10fe_640-1.webp')]">
                <div className="flex flex-wrap justify-center">
                  <MenuCategory 
                    href="/potrawy/zupy" 
                    imageSrc="/assets/img/ZUPY_V1.png" 
                    altText="Zupy" 
                  />
                  <MenuCategory 
                    href="/potrawy/przekaski" 
                    imageSrc="/assets/img/przekaski_v1.png" 
                    altText="Przekąski" 
                  />
                </div>
              </div>
            </div>
            
            {/* Additional menu categories */}
            <div className="w-[97.5%] mx-[1.25%]">
              <div className="w-[80%] mx-auto rounded-[25px] border-[9px] border-[rgb(153,95,69)] border-style-groove
                             p-2 mb-[2%] text-center bg-[url('/assets/img/ga2368c7bacbea5c862b5a0dcf5b6c1c5e3be67c5e43d0c1273f072fef8dacc9918875c11cfdcf5817c5f0aa9bb27d834e92ce6a76154e4f587b1b155b15c10fe_640-1.webp')]">
                <div className="flex flex-wrap justify-center">
                  <MenuCategory 
                    href="/potrawy/dladzieci" 
                    imageSrc="/assets/img/DLADZIECI_V1.png" 
                    altText="Dla Dzieci" 
                  />
                  <MenuCategory 
                    href="/potrawy/desery" 
                    imageSrc="/assets/img/DESERY_V1.png" 
                    altText="Desery" 
                  />
                </div>
              </div>
            </div>
            
            {/* More menu categories */}
            <div className="text-center mx-auto mr-[1.25%] ml-[1.25%] mb-[2%] w-[97.5%]">
              <div className="w-[80%] mx-auto rounded-[25px] border-[9px] border-[rgb(153,95,69)] border-style-groove
                             p-2 bg-[url('/assets/img/ga2368c7bacbea5c862b5a0dcf5b6c1c5e3be67c5e43d0c1273f072fef8dacc9918875c11cfdcf5817c5f0aa9bb27d834e92ce6a76154e4f587b1b155b15c10fe_640-1.webp')]">
                <div className="flex flex-wrap justify-center">
                  <MenuCategory 
                    href="/potrawy/dodatki" 
                    imageSrc="/assets/img/DODATKI_V1.png" 
                    altText="Dodatki" 
                  />
                  <MenuCategory 
                    href="/potrawy/alkohole" 
                    imageSrc="/assets/img/ALKOHOLE_V1.png" 
                    altText="Alkohole" 
                  />
                </div>
              </div>
            </div>
            
            {/* Final row with napoje */}
            <div className="text-center mx-auto mr-[1.25%] ml-[1.25%] mb-[5%] w-[97.5%]">
              <div className="w-[80%] mx-auto rounded-[25px] border-[9px] border-[rgb(153,95,69)] border-style-groove
                             p-2 bg-[url('/assets/img/ga2368c7bacbea5c862b5a0dcf5b6c1c5e3be67c5e43d0c1273f072fef8dacc9918875c11cfdcf5817c5f0aa9bb27d834e92ce6a76154e4f587b1b155b15c10fe_640-1.webp')]">
                <div className="flex flex-wrap justify-center">
                  <MenuCategory 
                    href="/potrawy/napojecieple" 
                    imageSrc="/assets/img/NAPOJE_CIEPLE_V1.png" 
                    altText="Napoje Ciepłe" 
                  />
                  <MenuCategory 
                    href="/potrawy/napoje" 
                    imageSrc="/assets/img/NAPOJE_V1.png" 
                    altText="Napoje" 
                  />
                </div>
              </div>
            </div>
            
            {/* Allergen information */}
            <div className="text-center mx-auto mr-[1.25%] ml-[1.25%] mb-[5%] w-[97.5%]">
              <div className="col">
                <h1 className="text-sm  mb-[1%] mt-[5%]" style={{ fontFamily: 'Alkatra', color: 'var(--bs-emphasis-color)', fontSize: '12px' }}>
                  O alergeny występujące w naszych daniach, prosimy pytać załogę.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;

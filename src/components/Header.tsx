import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Kran Nadziei" }) => {
  return (
    <section className="mx-auto my-4 px-6 py-2 bg-[var(--bs-tertiary-color)] text-white w-[95%] rounded-[20px] overflow-visible z-10 h-auto">
      <div className="flex justify-center items-center mb-6">
        <img 
          data-aos="fade-down" 
          data-aos-delay="500" 
          src="/assets/img/sigma.webp" 
          className="w-[258px] h-auto max-w-full"
          alt="Logo Kran Nadziei"
        />
      </div>
      
      <div data-aos="fade-down" className="mb-0 py-0">
        <header>
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
        </header>
      </div>
      
      <p className="text-center mt-4 font-bold text-lg">Siedlecka 2b, 72-010 Police</p>
    </section>
  );
};

export default Header;

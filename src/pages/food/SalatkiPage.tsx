import React from 'react';

const SalatkiPage: React.FC = () => {
  return (
    <div className="food-category-page">
      <h1>Sałatki</h1>
      <div className="food-items-container">
        <p>Lista sałatek będzie tutaj wyświetlona.</p>
        {/* Food items would be mapped and displayed here */}
      </div>
    </div>
  );
};

export default SalatkiPage;

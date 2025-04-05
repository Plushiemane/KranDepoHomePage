import React from 'react';

const DaniaGlownePage: React.FC = () => {
  return (
    <div className="food-category-page">
      <h1>Dania Główne</h1>
      <div className="food-items-container">
        <p>Lista dań głównych będzie tutaj wyświetlona.</p>
        {/* Food items would be mapped and displayed here */}
      </div>
    </div>
  );
};

export default DaniaGlownePage;

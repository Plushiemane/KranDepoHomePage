import React from 'react';

const ZupyPage: React.FC = () => {
  return (
    <div className="food-category-page">
      <h1>Zupy</h1>
      <div className="food-items-container">
        <p>Lista zup będzie tutaj wyświetlona.</p>
        {/* Food items would be mapped and displayed here */}
      </div>
    </div>
  );
};

export default ZupyPage;

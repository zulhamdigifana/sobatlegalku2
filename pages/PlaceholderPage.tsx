import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PlaceholderPage: React.FC = () => {
  const location = useLocation();
  const pageNumber = location.pathname.replace('/', '');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-500 p-4">
      <h1 className="text-6xl font-display font-bold text-gray-300 mb-4">{pageNumber}</h1>
      <p className="text-lg mb-8">Halaman ini belum tersedia.</p>
      
      {pageNumber !== '1' ? (
        <Link to="/1" className="text-brand-600 hover:underline font-bold">
          Kembali ke Halaman Utama
        </Link>
      ) : (
        <Link to="/2" className="text-brand-600 hover:underline font-bold">
          Lihat Halaman 2 (Sobat Legalku)
        </Link>
      )}
    </div>
  );
};

export default PlaceholderPage;
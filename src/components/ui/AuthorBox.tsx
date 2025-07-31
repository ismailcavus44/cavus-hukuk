import React from 'react';
import OptimizedImage from './OptimizedImage';

interface AuthorBoxProps {
  className?: string;
}

const AuthorBox: React.FC<AuthorBoxProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gray-50 rounded-lg p-6 border border-gray-200 ${className}`}>
      <div className="flex items-start space-x-4">
        {/* Yazar Resmi */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-200">
            <OptimizedImage
              src="/images/ismail-cavus.jpg"
              alt="Av. İsmail Çavuş"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Yazar Bilgileri */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Av. İsmail Çavuş
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ankara'da, müvekkillerimize en yüksek kalitede hukuki danışmanlık hizmeti sunuyoruz. 
            Boşanma, ceza, iş, gayrimenkul hukuku alanlarında müvekkillerimizin hukuki süreçlerinde 
            yanlarında yer almaktayız. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorBox; 
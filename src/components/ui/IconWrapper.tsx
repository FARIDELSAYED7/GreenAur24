import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-green-100 p-3 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default IconWrapper;
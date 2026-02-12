import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  fullWidth = false,
  href
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-bold text-sm md:text-base transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-brand-500/30",
    secondary: "bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/20",
    outline: "border-2 border-brand-600 text-brand-600 bg-transparent hover:bg-brand-50 shadow-none hover:shadow-none",
    white: "bg-white text-brand-600 hover:bg-gray-50",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    // @ts-ignore
    <Component 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <MessageCircle size={20} className={variant === 'white' ? 'text-brand-600' : 'text-current'} />
      {children}
    </Component>
  );
};

export default Button;
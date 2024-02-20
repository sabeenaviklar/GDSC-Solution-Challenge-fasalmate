import React from 'react';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/constants';

// components/Footer.js


const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
    }}>
      <p>&copy; 2024 FasalMate. All rights reserved.</p>
    </footer>
  );
};



export default Footer;

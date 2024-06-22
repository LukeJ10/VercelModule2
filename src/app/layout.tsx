import React from 'react';
import './globals.css'; // Import the global CSS file

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-900">
        {children}
      </body>
    </html>
  );
};

export default Layout;

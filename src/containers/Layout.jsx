import React from 'react';
import Header from '@componentes/Header';

const Layout = ({children}) => {
    return(
        <div className="Layout">
            {children}
        </div>
    );
};

export default Layout;
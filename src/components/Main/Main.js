import React from 'react';

export const Main = ({ classNames = '', children }) => {
    return (
        <main className={classNames}>
            {children}
        </main>
    );
};

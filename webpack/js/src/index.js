import React from 'react';
import {createRoot} from 'react-dom/client';

const App = function () {
    return (
        <div className="alert alert-secondary" role="alert">
            <blockquote className="blockquote">
                <p>Nel mezzo del cammin di nostra vita</p>
                <p>mi ritrovai per una selva oscura,</p>
                <p>ché la diritta via era smarrita.</p>
            </blockquote>
        </div>
    );
};

createRoot(document.getElementById('app')).render(<App />);

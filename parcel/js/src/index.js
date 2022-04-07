import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.getElementById('app'));

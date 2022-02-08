import React from 'react';
import ReactDOM from 'react-dom';

const App = function (props) {
    return (
        <>
            <p>Nel mezzo del cammin di nostra vita</p>
            <p>mi ritrovai per una selva oscura,</p>
            <p>ché la diritta via era smarrita.</p>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

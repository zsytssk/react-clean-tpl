import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.less';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div className="App">
            <div className="wrap">
                <img src={logo} className="inner" alt="logo" />
                <button onClick={() => setCount(count + 1)}>{count}</button>
            </div>
        </div>
    );
}

export default App;

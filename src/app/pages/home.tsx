import React, { useRef, useState, useEffect } from 'react';
import Child from './child';

const Home = (): JSX.Element => {
    const check = useRef<any>();
    const render = useRef(1);
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        render.current = render.current + 1;
    });

    useEffect(() => {
        console.log('check : ', check);
        if (username === 'Sach') {
            check.current.style.marginLeft = check.current.style.left + 25 + 'px';
        }
    }, [username]);

    return (
        <div ref={check} className="checking">
            <h2>In Home</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            Number of times rendered: {render.current}
            <Child />
        </div>
    );
}
export default Home;
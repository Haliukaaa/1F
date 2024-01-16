import { useState } from 'react';

export default function Index() {

    const [on, setOn] = useState(true);
    
    const handleClick = () => {
        setOn(!on);
    };
    

    if (on) {
        return (
            <button style={{ backgroundColor: 'red' }} onClick={handleClick}>OFF</button>
        );
    } else {
        return (
            <button style={{backgroundColor: 'green'}} onClick={handleClick}>ON</button>
        )
    }
};
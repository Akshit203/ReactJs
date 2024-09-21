import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // Memoized calculation to check if 'count' is even or odd
    // This prevents recalculating the result on every render unless 'count' changes

    const isEven = useMemo(() => {
        // Expensive calculation
        for (let i = 0; i < 100000000; i++) {}
        // Return true if 'count' is even, false if odd
        return count % 2 === 0;
    }, [count]);  // Only re-run this code when 'count' changes

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount2(count2 - 1);
    };

    return (
        <div>
            <br />

            <button className='border-2 border-black p-2 m-3' onClick={increment}>
                Button First {count}
            </button>

            {/* Display if the current count is even or odd */}
            {isEven ? 'even' : 'odd'}

            <button className='border-2 border-black p-2 m-3' onClick={decrement}>
                Button Second {count2}
            </button>
            
        </div>
    );
}

export default UseMemo;

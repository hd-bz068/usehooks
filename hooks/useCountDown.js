import { useState, useEffect, useRef } from 'react';

/** 
 * @param {number} n - Number for countdown
 * @param {number} t - timespan for countdown
 * @param {number} d - accumulattor - default 200
 * @return {number}
 */

const useCountDown = (n, t, d = 200) => {
    const [state, setstate] = useState(null);
    const ref = useRef(n);

    const upper = n / d;

    const updateState = () => {
        if (ref.current > 0) {
            const result = Math.ceil(ref.current - upper);
            if (result < 0) return setstate(0);
            setstate(result);
            ref.current = result;
        }

        setTimeout(updateState, t);
    };

    useEffect(() => {
        updateState();
    }, [n, t]);

    return state;
};

export default useCountDown;

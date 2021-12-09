import { useState, useEffect, useRef } from 'react';

/** 
 * @param {number} n - Number for countdown
 * @param {number} t - timespan for countdown
 * @param {number} d - accumulattor - default 200
 * @return {number}
 */

const useCountUp = (n, t, d = 200) => {
    const [state, setstate] = useState(null);
    const ref = useRef(0);

    const upper = n / d;

    const updateState = () => {
        if (ref.current < n) {
            const result = Math.ceil(ref.current + upper);
            if (result > n) return setstate(n);
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

export default useCountUp;

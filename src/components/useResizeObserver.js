import React, {useEffect, useState} from "react";

const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState(null)
    useEffect(() => {
        const observeTarget = ref.current
        const resizeObserver = new ResizeObserver((entries) => {
            console.log(entries)
            entries.forEach(entry => {
                setDimensions(entry.contentRect)
            })
            // set resized dimensions here
        });
        resizeObserver.observe(observeTarget);
        return () => {
            resizeObserver.unobserve(observeTarget)
        }
    }, [ref])
    return dimensions;
}

export default useResizeObserver;
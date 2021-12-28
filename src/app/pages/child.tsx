import React, { useRef, useState, useEffect, memo } from 'react';

const Child = (): JSX.Element => {
    const render = useRef(1);

    useEffect(() => {
        render.current = render.current + 1;
    });
    return (
        <>
            <h2>In Child</h2>
            Number of times rendered: {render.current}
        </>
    );
}
export default memo(Child);
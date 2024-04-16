import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function RadioInput({ type = 'radio', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                '' +
                className
            }
            ref={input}
        />
    );
});

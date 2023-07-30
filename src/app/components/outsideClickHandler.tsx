import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export function ClickAwayCallback (props: any) {
    const ref:any = useRef(null);

    const handleClickOutside = (event: any) => {
        const { trigger } = props;
        if (!trigger) return;
        if (ref.current && !ref.current.contains(event.target)) {
            props.closeIt();
        }
    };

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const { as, className } = props;
    const Component = as;

    return (
        <Component
            className={`closeOnOutsideClick ${className}`}
            ref={ref}
        >
            {props.children}
        </Component>
    );
}
ClickAwayCallback.propTypes = {
    closeIt: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    trigger: PropTypes.bool,
    as: PropTypes.string,
    className: PropTypes.string
};
ClickAwayCallback.defaultProps = {
    closeIt: () => { },
    trigger: true,
    as: "div",
    className: ""
};

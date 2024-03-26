"use client"

import { useEffect, useState, useRef } from "react";

const ThemeController = ({ children }: { children?: React.ReactElement }) => {
    const [dark, setDark] = useState(false);
    const hasWindowRef = useRef(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            hasWindowRef.current = true;

            const darkStorage = localStorage.getItem("dark");
            setDark(darkStorage ? JSON.parse(darkStorage) : false);
        }
    }, []);

    useEffect(() => {
        if (hasWindowRef.current) {
            document.getElementsByTagName("html")[0].classList.toggle("dark", dark);
        }
    }, [dark]);

    return (
        <>{children}</>
    );
};

export default ThemeController;

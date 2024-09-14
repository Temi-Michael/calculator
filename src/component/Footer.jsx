import { useState, useEffect } from 'react'

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000); // Update every second

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p>{time}</p>
    );
}

export default function Footer() {
    return (
        <div className="footer">
            <p className="footertext">
                Temi Michael  •  © 2024
                <Time />
            </p>
        </div>
    )
};

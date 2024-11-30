import React, { useEffect } from 'react';

const Calendar = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embed.styledcalendar.com/assets/parent-window.js';
        script.async = true;
        script.type = 'module';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <iframe
            src="https://embed.styledcalendar.com/#TAMEFk5dQJgCKrbrdmAA"
            title="Styled Calendar"
            className="styled-calendar-container"
            style={{
                width: '100%',
                border: 'none',
                height: '600px',
                marginTop: '20px',
            }}
            data-cy="calendar-embed-iframe"
        ></iframe>
    );
};

export default Calendar;


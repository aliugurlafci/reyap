import React from 'react';

export const MapComponent = () => {
    return (
        <div className='map-component' style={{ height: '100vh', width: '100%' }}>
            <iframe
                width="100%"
                height="356"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                title='reyap-map'
                src="https://maps.google.com/maps?width=520&amp;height=356&amp;hl=en&amp;q=Sultanbeyli%20Istanbul+(Our%20Office)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
        </div>
    );
}
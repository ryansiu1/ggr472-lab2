mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbnNpdSIsImEiOiJjbGRtMHJneGgwNHRxM3B0Ym5tb251bDg3In0.gJy3-nzKDytiGCJoqi1Y6w'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'map', // Add div container ID for your map
    style: 'mapbox://styles/mapbox/dark-v11', // Add link to style URL, I used a deafult styling offered by Mapbox
    projection: 'globe', // Displays the web map as a globe, instead of the default Web Mercator
    center: [-79.454, 43.716], // starting position [longitude, latitude]
    zoom: 9.95, // starting zoom
});

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style, this adds the 'foggy' like feature when fully zoomed out
});

map.on('load', () => {
    //Adding the city halls point layer
    map.addSource('city-halls', {
        type: 'geojson',
        // Use a URL from Lab 1.
        data: 'https://ryansiu1.github.io/ggr472-lab1/Lab_1_GeoJSON.geojson'
    });

    map.addLayer({
        'id': 'city-halls-layer',
        'type': 'circle',
        'source': 'city-halls',
        'paint': {
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-color': 'blue',
            'circle-stroke-color': 'grey'
        }
    });
    //Adding the public art point layer
    map.addSource('art-points', {
        type: 'geojson',
        // Use a URL for the art layer
        data: 'https://ryansiu1.github.io/ggr472-lab2/Public%20Art.geojson'
    });

    map.addLayer({
        'id': 'art-points-layer',
        'type': 'circle',
        'source': 'art-points',
        'paint': {
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-color': 'yellow',
            'circle-stroke-color': 'grey'
        }
    });
});
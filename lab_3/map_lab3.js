var mymap = L.map("map").setView([49.01477,-94.294498], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2Nob2VuMzkzMCIsImEiOiJja3o3aG9jcXcxYW1zMnZueGV5ZDl4ZXd3In0.rtn_VaAltcpsKr0cG6Yn5A', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([49.01477, -94.29498])
    .addTo(mymap);

L.marker([18.34144193849841, -64.83936978029998])
    .addTo(mymap);

L.marker([33.77623923322386, -118.19575285719075])
    .addTo(mymap);

L.marker([48.970606091606165, 2.2615622987359454])
    .addTo(mymap);

L.marker([52.18537861272845, 4.509593975452323])
    .addTo(mymap);

L.marker([45.695711906489706, -73.837883903834])
    .addTo(mymap);

L.marker([-37.81517826806655, 144.94862743864076])
    .addTo(mymap);

L.marker([36.39429562649356, 25.460200488442958])
    .addTo(mymap);

L.marker([-34.549807860807874, -58.3784877370499])
    .addTo(mymap);

L.marker([64.18547682464221, -21.939671188461613])
    .addTo(mymap);
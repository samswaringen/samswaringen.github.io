var map;
mapboxgl.accessToken = '';

function inputToken(){
	let mapToken = document.getElementById('token').value;
	mapboxgl.accessToken = mapToken;
	document.getElementById('token').value = '';
	map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-71.104081, 42.365554],
	zoom: 14
	});
	addStops();
	run();
}
const busStops = [
      [-71.093729, 42.359244],
      [-71.094915, 42.360175],
      [-71.095800, 42.360698],
      [-71.099558, 42.362953],
      [-71.103476, 42.365248],
      [-71.106067, 42.366806],
      [-71.108717, 42.368355],
      [-71.110799, 42.369192],
      [-71.113095, 42.370218],
      [-71.115476, 42.372085],
      [-71.117585, 42.373016],
      [-71.118625, 42.374863]
    ];

addStops = ()=>{
	busStops.forEach((item)=>{
	busStopIcon = document.createElement('img');
	busStopIcon.src = 'busstop.png';
	busStopIcon.style.width = busStopIcon.style.height = '25px';
	new mapboxgl.Marker(busStopIcon).setLngLat([item[0],item[1]]).addTo(map);
	})
}
currBusMarkers = [];
busPopups =[];

async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);
	currBusMarkers.forEach((item)=>{
		item.remove();
	})
	locations.forEach((item)=>{
		let busIcon = document.createElement('div');
		busIcon.className = 'bus-marker';
		if(item.attributes.occupancy_status === 'FEW_SEATS_AVAILABLE'){
			busIcon.style.width = busIcon.style.height = '40px';
			busIcon.style.backgroundImage = 'url(redbus.png)';
		}else if(item.attributes.occupancy_status === 'MANY_SEATS_AVAILABLE'){
			busIcon.style.backgroundImage = 'url(greenbus.png)';
		}else {
			busIcon.style.width = busIcon.style.height = '40px';
		}
		busLong = item.attributes.longitude;
		busLat = item.attributes.latitude;
		busIcon.addEventListener('mouseover', function () {
		let labelPopup = new mapboxgl.Popup()
			.setLngLat([item.attributes.longitude, item.attributes.latitude])
			.setHTML(` BUS ID: ${item.attributes.label}<br> CURRENT STOP: ${item.attributes.current_stop_sequence}`)
			.addTo(map);
		busPopups.push(labelPopup);
		});
		busIcon.addEventListener('mouseleave', function () {
			busPopups.forEach((item)=>{
				item.remove();
			})
		});
 
		marker = new mapboxgl.Marker(busIcon).setLngLat([busLong,busLat]).addTo(map);
		currBusMarkers.push(marker);
	});
	// timer
	setTimeout(run, 15000);
}


// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}


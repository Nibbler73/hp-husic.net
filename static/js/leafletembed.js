var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// cleanup DIV for map

	// set up the map
	map = new L.Map('mapid');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		

	// start the map in Cologne
	map.setView(new L.LatLng(50.9412, 6.9194), 12);
	map.addLayer(osm);
}

initmap();

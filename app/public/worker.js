
importScripts('papaparse.min.js');

onmessage = function(e) {
    const csv = e.data;
    const data = Papa.parse(csv,{
    	header: true,
    }).data;
	postMessage(data);
}

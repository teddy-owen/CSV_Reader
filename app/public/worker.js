// Carries out parse process in a worker
importScripts('papaparse.min.js');

onmessage = function(e) {
    const csv = e.data;
    const data = Papa.parse(csv,{
    	header: true,
    	skipEmptyLines: true,
    }).data;
	postMessage(data);
}

'use strict';
if ('serviceWorker' in navigator) {
	console.log('Service Worker is supported');
 	navigator.serviceWorker.register('/sw.js').then(function(reg) {
   		console.log(':^)', reg);
   		reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function(sub) {
        	var endpointSections = sub.endpoint.split('/');
        	var subscriptionId = endpointSections[endpointSections.length - 1];
            console.log('subscriptionId:', subscriptionId);
        });
 	}).catch(function(err) {
   		console.log(':^(', err);
 	});
}

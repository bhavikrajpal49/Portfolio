if ('serviceWorker' in navigator) 
{ navigator.serviceWorker.register('/service_worker.js') .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope); })
    .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
    });
    }
    navigator.serviceWorker.register('/service_worker.js', { scope: '/app/'});
    navigator.serviceWorker.register('/app/service_worker.js', { scope: '/app'});
    
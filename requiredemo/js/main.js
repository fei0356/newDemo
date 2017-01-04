require.config({
    paths: {
        jquery:'jquery-1.10.1.min'
    }
});
require([jquery], function($) {
    alert(1);
});



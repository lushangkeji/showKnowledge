require.config({
	baseUrl:'../js',
	paths : {
        jquery : '../js/jquery',
        angular:'../js/angular.min',
        angularAMD : '../js/angularAMD',
        uiRouter : '../js/angular-ui-router'
    },
     shim : {
        angular : {
            exports : 'angular',
            deps : ['jquery']
        },
        angularAMD:{
        	deps:['angular']
        },
        uiRouter : {
            exports : 'ui-router',
            deps : ['angularAMD']
        },
        app : {
            deps : ['uiRouter']
        },
        routerShowList : {
            deps : ['app']
        }
    }
});
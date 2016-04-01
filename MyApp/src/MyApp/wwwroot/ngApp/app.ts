namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('blogs', {
                url: '/blogs',
                templateUrl: '/ngApp/blogs.html',
                controller: MyApp.Controllers.BlogsController,
                controllerAs: 'controller'
            })
            .state('blogDetail', {
                url: '/blogs/:id',
                templateUrl: '/ngApp/blog-detail.html',
                controller: MyApp.Controllers.BlogDetailController,
                controllerAs: 'controller'
            })
            .state('createBlog', {
                url: '/createBlog',
                templateUrl: '/ngApp/blog-create.html',
                controller: MyApp.Controllers.BlogCreateController,
                controllerAs: 'controller'
            });
            //.state('notFound', {
            //    url: '/notFound',
            //    templateUrl: '/ngApp/notFound.html'
            //});

        // Handle request for non-existent route
        //$urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}

namespace MyApp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }



    // BlogsController
    export class BlogsController {
        // container that will hold a list of blog
        public blogs;

        constructor(private blogService: MyApp.Services.BlogService) {
            // as soon as BlogsController is called, call the getBlogs service in the blogService to get a list of blog
            this.blogs = this.blogService.getBlogs();
        }
    }

    // BlogDetailController
    export class BlogDetailController {
        public blog;
        public comment;

        constructor(
            private blogService: MyApp.Services.BlogService,
            private $stateParams: angular.ui.IStateParamsService,
            private commentService: MyApp.Services.CommentService) {

            // as soon as blogDetails controller is called, call the getBlog() method
            this.getBlog();
        }

        getBlog() {
            // extract the blog id information by using the $stateParams
            let blogId = this.$stateParams['id'];
            // call the getBlog method in the blogService while passing the blogId information
            this.blog = this.blogService.getBlog(blogId);
        }

        saveComment() {
            this.comment.blogId = this.blog.id;
            this.commentService.saveComment(this.comment).then(() => {
                this.getBlog();
            });
        }
    }

    // BlogCreateController
    export class BlogCreateController {
        public blogToCreate;

        constructor(
            private blogService: MyApp.Services.BlogService,
            private $state: angular.ui.IStateService) {

        }

        saveBlog() {
            this.blogService.saveBlog(this.blogToCreate).then(() => {
                this.$state.go('blogs');
            });
        }

    }
}

namespace MyApp.Services {
    //BlogService
    export class BlogService {
        private blogResource;

        constructor(private $resource:angular.resource.IResourceService) {
            this.blogResource = this.$resource("/api/blogs/:id");
        }

        // gets a list of blogs
        getBlogs() {
            return this.blogResource.query();
        }
        // gets a single blog
        getBlog(id) {
            return this.blogResource.get({ id: id });
        }
        // create a new blog
        saveBlog(blogToSave) {
            return this.blogResource.save(blogToSave).$promise;
        }
    }
    angular.module("MyApp").service('blogService', BlogService);

    //CommentService
    export class CommentService {
        private commentResource;

        constructor(private $resource:angular.resource.IResourceService) {
            this.commentResource = $resource('/api/comments/:id');
        }

        saveComment(commentToSave) {
            return this.commentResource.save(commentToSave).$promise;
        }
    }
    angular.module("MyApp").service('commentService', CommentService);
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MyApp.Models;
using Microsoft.Data.Entity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyApp.API
{
    [Route("api/[controller]")]
    public class CommentsController : Controller
    {
        ApplicationDbContext _db;
        public CommentsController(ApplicationDbContext db)
        {
            this._db = db;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]CommentViewModel value)
        {
            // save blog id into blogId
            var blogId = value.BlogId;
            // create a new instance of a comment object with the message that came from the client side
            var commentToCreate = new Comment { Message = value.Message };
            // load up the original blog with all the comments associated with it
            var blog = _db.Blogs.Where(b => b.Id == blogId).Include(b => b.Comments).FirstOrDefault();
            // add commentToCreate to the blog.Comments
            blog.Comments.Add(commentToCreate);
            _db.SaveChanges();

            return Ok();

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

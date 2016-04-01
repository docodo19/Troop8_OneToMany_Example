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
    public class BlogsController : Controller
    {
        ApplicationDbContext _db;
        public BlogsController(ApplicationDbContext db)
        {
            this._db = db;
        }

        // GET: api/blogs
        [HttpGet]
        public IEnumerable<Blog> Get()
        {
            var blogs = _db.Blogs.ToList();
            return blogs;
        }

        // GET api/blogs/5
        [HttpGet("{id}")]
        public Blog Get(int id)
        {
            var blog = _db.Blogs.Where(b => b.Id == id).Include(b => b.Comments).FirstOrDefault();
            return blog;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Blog value)
        {
            _db.Blogs.Add(value);
            _db.SaveChanges();
            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

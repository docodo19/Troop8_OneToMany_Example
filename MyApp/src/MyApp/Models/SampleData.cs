using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace MyApp.Models
{
    public class SampleData
    {
        public static void Initialize(IServiceProvider sp)
        {
            var db = sp.GetService<ApplicationDbContext>();

            #region Seed Blogs
            if (!db.Blogs.Any())
            {
                var blogs = new Blog[]
                {
                    new Blog {
                        Title = "JavaScript",
                        Message = "JavaScrip is coool!",
                        Comments = new List<Comment> {
                            new Comment { Message = "Thanks for the aweseom blog." },
                            new Comment { Message = "Thanks for your input!" },
                            new Comment { Message = "I don't understand line 55..." }
                        }
                    },
                    new Blog
                    {
                        Title = "Angular in TypeScrpt",
                        Message = "You can totally write angular in Typescript.. blah blah.",
                        Comments = new List<Comment>
                        {
                            new Comment { Message = "I don't understand how you created a controller.. can you please explain one more time" },
                            new Comment { Message = "This is so cool!" },
                            new Comment { Message = "I look forward seeing more of this." },
                            new Comment { Message = "This was exactly what I was looking for. Thanks..." }
                        }
                    }
                };
                db.Blogs.AddRange(blogs);
                db.SaveChanges();
            }
            #endregion
        }
    }
}

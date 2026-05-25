using Microsoft.AspNetCore.Mvc;
using WebApp.Data;

namespace WebApp.Controllers
{
    public class PostsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public PostsController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var post = _context.Posts.ToList();

            return View(post);
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Details()
        {

            //var post = _db.Posts.Find(id)
            var post = _context.Posts.ToList();
            return View(post);
        }

    }
}

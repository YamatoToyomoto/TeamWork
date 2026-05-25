using Microsoft.AspNetCore.Mvc;
using WebApp.Data;
using System.Linq;

namespace WebApp.Controllers
{
    public class DummyPostController : Controller
    {
        private readonly ApplicationDbContext _context;

        //public DummyPostController(ApplicationDbContext context)
        //{
        //    _context = context;
        //}

        public IActionResult DummyIndex()
        {
            var posts = _context.Posts.ToList();

            return View(posts);
        }
    }
}
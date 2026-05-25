using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Data;
using WebApp.Models;
using WebApp.ViewModels;

namespace WebApp.Controllers
{
    public class PostsController : Controller
    {
        //DB操作を行うための変数
        private readonly ApplicationDbContext _db;

        //ApplicationDbContext を受け取る
        public PostsController(ApplicationDbContext db)
        {
            _db = db;
        }

        //投稿一覧画面を表示
        public IActionResult Index()
        {
            //DBのPostsテーブルから全件取得
            var post = _db.Posts.ToList();

            return View(post);
        }

        [HttpGet]
        public IActionResult Create()
        {

            return View();
        }

        [HttpPost]
        public IActionResult Create(Post post)
        {
            //入力チェック    
            if(!ModelState.IsValid)
            {
                return View(post);
            }

            //投稿日時を現在時刻に設定
            post.CreatedAt = DateTime.UtcNow;

            //テーブルに追加
            _db.Posts.Add(post);

            //DBに保存
            _db.SaveChanges();


            return RedirectToAction("Index");
        }

        public IActionResult Details(int id)
        {

            var post = _db.Posts
               .FirstOrDefault(p => p.Id == id);

            if (post == null)
            {
                return NotFound();
            }

            var comments = _db.Comments
               .Where(c => c.PostId == id)
               .ToList();

            var viewModel = new PostDetailsViewModel
            {
                Post = post,
                Comments = comments
            };


            return View(viewModel);
        }

    }
}

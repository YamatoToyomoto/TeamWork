using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Data;
using WebApp.Models;
using WebApp.ViewModels;
using Microsoft.AspNetCore.Http;

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
            var post = _db.Posts
                .Include(p => p.User)
                .ToList();

            return View(post);
        }


        //投稿画面表示
        [HttpGet]
        public IActionResult Create()
        {
            var userId = HttpContext.Session.GetInt32("UserId");

            if (userId == null)
            {
                return RedirectToAction("Login", "Account" ,
                    new { returnUrl = Request.Path });
            }

            return View();
        }

        //投稿
        [HttpPost]
        public IActionResult Create(Post post, IFormFile imageFile)
        {
            var userId = HttpContext.Session.GetInt32("UserId");

            if (userId == null)
            {
                return RedirectToAction("Login", "Account");
            }

            //入力チェック    
            if (!ModelState.IsValid)
            {
                return View(post);
            }


            if (imageFile != null)
            {
                // ファイル名取得
                string fileName = imageFile.FileName;

                //保存パス
                string path = Path.Combine(
                    Directory.GetCurrentDirectory(),
                    "wwwroot/images",
                    fileName);

                //フォルダに保存
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    imageFile.CopyTo(stream);
                }

                //DBへ保存するパス
                post.ImagePath = "/images/" + fileName;

            }

            //投稿日時を現在時刻に設定
            post.CreatedAt = DateTime.UtcNow;

            post.UserId = userId.Value;

            //テーブルに追加
            _db.Posts.Add(post);

            //DBに保存
            _db.SaveChanges();


            return RedirectToAction("Index");
        }


        public IActionResult Details(int id)
        {

            var post = _db.Posts
                .Include(p => p.User)
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


        //削除
        public IActionResult Delete(int id)
        {
            var post = _db.Posts.Find(id);

            if (post == null)
            {
                return NotFound();
            }

            var loginUserId = HttpContext.Session.GetInt32("UserId");

            if (loginUserId == null)
            {
                return RedirectToAction("Login", "Account");
            }

            //画像パスがある場合
            if (!string.IsNullOrEmpty(post.ImagePath))
            {
                //wwwrootからの物理パス生成
                string imagePath = Path.Combine(
                    Directory.GetCurrentDirectory(),
                    "wwwroot",
                    post.ImagePath.TrimStart('/')
                    );

                // ファイル存在確認
                if (System.IO.File.Exists(imagePath))
                {
                    // ファイル削除
                    System.IO.File.Delete(imagePath);
                }
            }

            // DBから削除
            _db.Posts.Remove(post);
            _db.SaveChanges();

            return RedirectToAction("Index");
        }


        //編集表示
        [HttpGet]
        public IActionResult Edit(int id)
        {
            var post = _db.Posts.Find(id);
            if (post == null)
            {
                return NotFound();
            }

            var loginUserId = HttpContext.Session.GetInt32("UserId");

            if (loginUserId == null)
            {
                return RedirectToAction("Login", "Account");
            }

            if (post.UserId != loginUserId.Value)
            {
                return Unauthorized();
            }

            return View(post);
        }

        [HttpPost]
        public IActionResult Edit(Post post)
        {
            if (!ModelState.IsValid)
            {
                return View(post);
            }

            // DBから取得
            var dbPost = _db.Posts.Find(post.Id);

            if (dbPost == null)
            {
                return NotFound();
            }

            // ログイン確認
            var loginUserId = HttpContext.Session.GetInt32("UserId");

            if (loginUserId == null)
            {
                return RedirectToAction("Login", "Account");
            }

            // 投稿者本人か確認
            if (dbPost.UserId != loginUserId.Value)
            {
                return Unauthorized();
            }

            // 編集可能項目だけ更新
            dbPost.PlaceName = post.PlaceName;
            dbPost.LocationText = post.LocationText;


            // 必要なら画像も
            dbPost.ImagePath = post.ImagePath;

            _db.SaveChanges();

            return RedirectToAction("Details", new { id = dbPost.Id });
        }


        [HttpPost]
        //コメントの追加
        public IActionResult AddComment(int postId, string? commentText)
        {
            if (string.IsNullOrWhiteSpace(commentText))
            {
                TempData["ErrorMessage"]
                    = "コメントを入力してください";

                return RedirectToAction(
                    "Details",
                    new { id = postId });
            }

            var comment = new Comment
            {
                PostId = postId,
                CommentText = commentText,
                //CreatedAt = DateTime.UtcNow
            };

            comment.CreatedAt = DateTime.UtcNow;

            _db.Comments.Add(comment);

            _db.SaveChanges();

            return RedirectToAction("Details", new { id = postId });
        }


        [HttpPost]
        //コメントの削除
        public IActionResult DeleteComment(int id, int postId)
        {
            var comment = _db.Comments
                .FirstOrDefault(c => c.Id == id);

            if (comment != null)
            {
                _db.Comments.Remove(comment);

                _db.SaveChanges();
            }

            return RedirectToAction("Details", new { id = postId });
        }
    }
}

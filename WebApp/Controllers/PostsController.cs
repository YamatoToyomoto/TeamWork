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

        private readonly IWebHostEnvironment _environment;

        //ApplicationDbContext を受け取る
        public PostsController(ApplicationDbContext db, IWebHostEnvironment environment)
        {
            _db = db;
            _environment = environment;
        }

        //投稿一覧画面を表示
        public IActionResult Index()
        {
            //DBのPostsテーブルから全件取得
            var post = _db.Posts.ToList();

            return View(post);
        }


        //投稿画面表示
        [HttpGet]
        public IActionResult Create()
        {

            return View();
        }

        //投稿
        [HttpPost]
        public IActionResult Create(Post post, IFormFile imageFile)
        {
            //入力チェック    
            if(!ModelState.IsValid)
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


        //削除
        public IActionResult Delete(int id)
        {
            var post = _db.Posts.Find(id);
            if (post == null)
            {
                return NotFound();
            }

            //画像パスがある場合
            if(!string.IsNullOrEmpty(post.ImagePath))
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

            return View(post);
        }

        [HttpPost]
        public IActionResult Edit(Post post)
        {
            if (!ModelState.IsValid)
            {
                return View(post);
            }

            if (post.DeleteImage && post.ImageFile == null)
            {
                ModelState.AddModelError(
                    "ImageFile",
                    "画像を削除する場合は新しい画像を選択してください"
                );

                return View(post);
            }

            var target = _db.Posts.Find(post.Id);

            if (target == null)
            {
                return NotFound();
            }

            // テキスト更新
            target.PlaceName = post.PlaceName;
            target.LocationText = post.LocationText;

            // 画像削除
            if (post.DeleteImage)
            {
                if (!string.IsNullOrEmpty(target.ImagePath))
                {
                    string oldPath = Path.Combine(
                        _environment.WebRootPath,
                        target.ImagePath.TrimStart('/'));

                    if (System.IO.File.Exists(oldPath))
                    {
                        System.IO.File.Delete(oldPath);
                    }
                }

                target.ImagePath = "";
            }

            // 新しい画像
            if (post.ImageFile != null)
            {
                string fileName =
                    Guid.NewGuid().ToString()
                    + Path.GetExtension(post.ImageFile.FileName);

                string savePath = Path.Combine(
                    _environment.WebRootPath,
                    "images",
                    fileName);

                using (var stream =
                    new FileStream(savePath, FileMode.Create))
                {
                    post.ImageFile.CopyTo(stream);
                }

                target.ImagePath =
                    "/images/" + fileName;
            }

            _db.SaveChanges();

            return RedirectToAction(
                "Details",
                new { id = target.Id });
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

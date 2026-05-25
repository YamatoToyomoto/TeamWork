using System;

namespace WebApp.Models
{

    using System.ComponentModel.DataAnnotations.Schema;

    [Table("comments")]

    public class Comment
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("post_id")]
        public int PostId { get; set; }

        [Column("comment_text")]
        public string CommentText { get; set; }

        [Column("created_at")]
        public DateTime CreatedAt { get; set; }

        public Post Post { get; set; }
    }
}

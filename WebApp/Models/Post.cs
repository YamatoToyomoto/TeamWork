using System;

namespace WebApp.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("posts")]

    public class Post
    {

        [Column("id")]
        public int Id { get; set; }

        [Column("place_name")]
        [Required(ErrorMessage = "観光地名を入力してください")]
        [StringLength(100, ErrorMessage = "100文字以内で入力してください")]
        public string PlaceName { get; set; } = string.Empty;

        [Column("location_text")]
        [Required(ErrorMessage = "場所説明を入力してください")]
        [StringLength(300, ErrorMessage = "300文字以内で入力してください")]
        public string LocationText { get; set; } = string.Empty;

        [Column("image_path")]
        public string ImagePath { get; set; } = string.Empty;

        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
    }
}
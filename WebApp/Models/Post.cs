using System;

namespace WebApp.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using Microsoft.AspNetCore.Http;

    [Table("posts")]

    public class Post
    {

        [Column("id")]
        public int Id { get; set; }

        [Column("place_name")]
        

        public string PlaceName { get; set; } = string.Empty;

        [Column("location_text")]
        [Required(ErrorMessage = "場所説明を入力してください")]
        [StringLength(300, ErrorMessage = "300文字以内で入力してください")]
        public string LocationText { get; set; } = string.Empty;

        [Column("image_path")]
        public string ImagePath { get; set; } = string.Empty;

        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
        public List<Comment>? Comments { get; set; }

        [NotMapped]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public bool DeleteImage { get; set; }
    }
}
using System;

namespace WebApp.Models
{
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("posts")]

    public class Post
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("place_name")]
        public string PlaceName { get; set; } = string.Empty;

        [Column("location_text")]
        public string LocationText { get; set; } = string.Empty;

        [Column("image_path")]
        public string ImagePath { get; set; } = string.Empty;

        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
    }
}
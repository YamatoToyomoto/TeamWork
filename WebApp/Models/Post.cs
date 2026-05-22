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
        public string PlaceName { get; set; }

        [Column("location_text")]
        public string LocationText { get; set; }

        [Column("image_path")]
        public string ImagePath { get; set; }

        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
    }
}
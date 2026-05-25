using System.Collections.Generic;
using WebApp.Models;


namespace WebApp.ViewModels
{
    public class PostDetailsViewModel
    {
        public Post Post { get; set; }

        public List<Comment> Comments { get; set; }
    }
}

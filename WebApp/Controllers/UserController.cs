using Microsoft.AspNetCore.Mvc;
using Npgsql;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class UserController : Controller
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            var users = new List<User>();

            var connectionString =
                _configuration.GetConnectionString("DefaultConnection");

            using var connection =
                new NpgsqlConnection(connectionString);

            connection.Open();

            var sql = "SELECT id, name FROM users";

            using var command =
                new NpgsqlCommand(sql, connection);

            using var reader = command.ExecuteReader();

            while (reader.Read())
            {
                users.Add(new User
                {
                    Id = reader.GetInt32(0),
                    Name = reader.GetString(1)
                });
            }

            return View(users);
        }
    }
}
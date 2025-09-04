using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class LoginDto
{
    [Required]
    [JsonPropertyName("username")]
    public string UserName { get; set; } = null!;
    [Required]
    [JsonPropertyName("password")]
    public string Password { get; set; } = null!;
}
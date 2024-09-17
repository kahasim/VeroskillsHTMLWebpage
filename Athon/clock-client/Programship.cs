using System;
using System.Net.Http;
using System.Threading.Tasks;

public class Program
{
    private readonly IHttpClientFactory _httpClientFactory;
    public static async Task Main(string[] args)
    {
        var client = _httpClientFactory.CreateClient();
        client.DefaultRequestHeaders.Add("X-PB-Developer-Partner-ID", "0oa1xn3rxxdGSd5b90h8");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer kP4PUyKj-dCjLGrj7bmDD4o_s3p1OVe55QU4MOBP8jSIjBbUDrng11uf4bCPJi7J);
        var request = await client.GetAsync("https://api-sandbox.sendpro360.pitneybowes.com/shipping/api/v1/carriers");
        var response = await request.Content.ReadAsStringAsync();

        Console.WriteLine(response);
    }
}
//Azure subscription = 10a0210d-9323-4ef6-bde1-c942584f7683
//Azure Resource Group = AzureAIResource

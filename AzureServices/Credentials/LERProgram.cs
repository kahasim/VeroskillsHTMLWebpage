using Azure;
using System;
using Azure.AI.TextAnalytics;

namespace ProofOfConcept
{
    class Program
    {
        private static readonly AzureKeyCredential credentials = new AzureKeyCredential("");
        private static readonly Uri endpoint = new Uri("");

        static void RecognizeYourText(TextAnalyticsClient client)
        {
            string document = "Call our office at 312-555-1234 and ask for Graham Barnes, or send an email to support@contoso.com";
            var response = client.RecognizeEntities(document); //replace null with the correct method to recognize the requested information.
            var entities = response.Value
           // Console.WriteLine($"Redacted Text: {entities.RedactedText}");
            if (entities.Count > 0)
            {
                Console.WriteLine($"Recognized {entities.Count} the following entities {(entities.Count > 1 ? "ies" : "y" )}:");

                foreach(var entity in entities)
                {
                    Console.WriteLine($"Text: {entity.Text}, Category: {entity.Category}, Subcategory: {entity.SubCategory}, Confidence score: {entity.ConfidenceScore}");
                }
            }
            else
            {
                Console.WriteLine("No entites were found.");
            }
        }

        static void Main(string[] args)
        {
            var client = new TextAnalyticsClient(endpoint, credentials);
            RecognizeYourText(client);

            Console.Write("Press any key to exit.");
            Console.ReadKey();
        }
    }
}
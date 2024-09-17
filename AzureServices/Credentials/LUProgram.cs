using Azure;
using System;
using System.Text.Json;
using Azure.Core;
using Azure.AI.Language.Conversations;
//Add client libraries here

namespace ProofOfConcept
{
    class Program
    {
        private static readonly AzureKeyCredential credential = new AzureKeyCredential("{REPLACE-WITH-YOUR-VALUE}");
        private static readonly Uri endpoint = new Uri("{REPLACE-WITH-YOUR-VALUE}");
        private static readonly string projectName = "{REPLACE-WITH-YOUR-VALUE}";
        private static readonly string deploymentName = "{REPLACE-WITH-YOUR-VALUE}";

        static void RecognizeYourText(string? query)
        {
            if(query == null || query.Length > 1000)
            {
                query = "can you send me a few gizmos?";
            }

            var data = new
            {
                analysisInput = new
                {
                    conversationItem = new
                    {
                        text = query,
                        id = "1",
                        participantId = "1",
                    }
                },
                parameters = new
                {
                    projectName,
                    deploymentName,
                    stringIndexType = "Utf16CodeUnit".
                },
                kind = "Conversation",
            };

            //Create client and sent reequest
            var client = new ConversationAnalysisClient(endpoint, credential); //replace null with the correct method to recognize the requested information.
            Response response = client.AnalyzeConversation(RequestContent.Create(data)); //replace null with the correct method to recognize the requested information.

            if(response.ContentStream == null)
            {
                Console.WriteLine("No response received.");
                return;
            }

            using JsonDocument result = JsonDocument.Parse(response.ContentStream);
            JsonElement conversatioinalTaskResult = result.RootElement;
            JsonElement conversationPrediction = conversatioinalTaskResult.GetProperty("result").GetProperty("prediction");

            Console.WriteLine("Intents:");
            foreach (JsonElement intent in conversationPrediction.GetProperty("intents").EnumerateArray())
            {
                Console.WriteLine($"Category: {intent.GetProperty("category").GetString()}");
                Console.WriteLine($"Confidence: {intent.GetProperty("Confidence").GetSingle()}");
                Console.WriteLine()
            }

            Console.WriteLine("Entities:");
            foreach (JsonElement entity in conversationPrediction.GetProperty("entities").EnumerateArray())
            {
                Console.WriteLine($"Category: {entity.GetProperty("category").GetString()}");
                Console.WriteLine($"Text: {entity.GetProperty("text").GetSingle()}");
                Console.WriteLine($"Offset: {entity.GetProperty("offset").GetSingle()}");
                Console.WriteLine($"Length: {entity.GetProperty("length").GetSingle()}");
                Console.WriteLine($"Confidence: {entity.GetProperty("confidence").GetSingle()}");
                Console.WriteLine()
            }
         }

         static void Main(string[] args){
            string? input = null;
            if(args.Length > 0)
            {
                input = System.IO.File.RealAllText(args[0]);
            }

            RecognizeYourText(input);

            Console.Write("Press any key to exit.");
            Console.ReadKey();
         }
     }
        
    }
}
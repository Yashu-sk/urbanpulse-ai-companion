import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AIAssistant = () => {
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const { toast } = useToast();

  const exampleQuestions = [
    "What's the best time to drive to the airport tomorrow?",
    "Which park will be least crowded this Saturday?",
    "When should I leave to avoid rush hour?",
    "What's the air quality forecast for this week?"
  ];

  const aiResponses: Record<string, string> = {
    "What's the best time to drive to the airport tomorrow?": "Based on historical traffic patterns, I recommend leaving between 2:00 PM - 3:30 PM tomorrow. Traffic is typically 40% lighter during this window, and you'll avoid both the lunch rush and evening commute. Current weather forecasts show clear conditions.",
    "Which park will be least crowded this Saturday?": "Riverside Park is predicted to be 65% less crowded than usual this Saturday. Based on event calendars and historical data, most people will be at the Downtown Music Festival. I recommend visiting between 9:00 AM - 11:00 AM for the best experience.",
    "When should I leave to avoid rush hour?": "To avoid peak traffic, consider leaving either before 6:30 AM or after 9:30 AM for morning commutes. For evening, travel before 3:00 PM or after 7:00 PM. Current traffic levels show Highway 101 is moving 25% slower than usual.",
    "What's the air quality forecast for this week?": "Air quality will be Good (AQI 30-50) Monday through Wednesday. Thursday may see Moderate levels (AQI 55-70) due to increased winds from the west. I recommend outdoor activities early in the week. Friday should improve back to Good levels."
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      toast({
        title: "Please enter a question",
        description: "Type a question about your city to get AI-powered insights.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setResponse("");

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const aiAnswer = aiResponses[question] || 
      `Based on analyzing historical data and current trends, I can help you with "${question}". This feature uses predictive analytics to provide personalized recommendations. For real-time predictions, connect to live city data sources.`;

    setResponse(aiAnswer);
    setIsLoading(false);

    toast({
      title: "AI Analysis Complete",
      description: "Your personalized recommendation is ready.",
    });
  };

  const handleExampleClick = async (exampleQuestion: string) => {
    setQuestion(exampleQuestion);
    setResponse("");
    
    // Auto-submit the question
    setTimeout(async () => {
      if (!isLoading) {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const aiAnswer = aiResponses[exampleQuestion];
        setResponse(aiAnswer);
        setIsLoading(false);

        toast({
          title: "AI Analysis Complete",
          description: "Your personalized recommendation is ready.",
        });
      }
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleAskQuestion();
    }
  };

  return (
    <section id="ai-assistant" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elevated">
              <Bot className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              AI Predictive <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Assistant</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask questions about your city and get smart recommendations based on historical data and real-time analysis
            </p>
          </div>

          <Card className="p-8 shadow-elevated border-border/50">
            <div className="space-y-6">
              <div className="flex gap-3">
                <Input
                  placeholder="Ask me anything about your city..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="flex-1 h-12 text-base border-border/50"
                />
                <Button 
                  size="lg" 
                  onClick={handleAskQuestion}
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary/90 h-12 px-6"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>

              {response && (
                <Card className="p-6 bg-primary/5 border-primary/20 animate-fade-in">
                  <div className="flex gap-3">
                    <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">AI Assistant</p>
                      <p className="text-muted-foreground leading-relaxed">{response}</p>
                    </div>
                  </div>
                </Card>
              )}

              {isLoading && (
                <Card className="p-6 bg-muted/30 border-border/30 animate-pulse">
                  <div className="flex gap-3 items-center">
                    <Loader2 className="w-5 h-5 text-primary animate-spin" />
                    <p className="text-sm text-muted-foreground">Analyzing data and generating insights...</p>
                  </div>
                </Card>
              )}

              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">Try asking:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exampleQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleExampleClick(q)}
                      disabled={isLoading}
                      className="text-left p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all text-sm text-foreground border border-border/30 hover:border-primary/30 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;

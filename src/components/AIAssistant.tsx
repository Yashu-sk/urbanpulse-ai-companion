import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";
import { useState } from "react";

const AIAssistant = () => {
  const [question, setQuestion] = useState("");

  const exampleQuestions = [
    "What's the best time to drive to the airport tomorrow?",
    "Which park will be least crowded this Saturday?",
    "When should I leave to avoid rush hour?",
    "What's the air quality forecast for this week?"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
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
                  className="flex-1 h-12 text-base border-border/50"
                />
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-6">
                  <Send className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">Try asking:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exampleQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuestion(q)}
                      className="text-left p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm text-foreground border border-border/30 hover:border-primary/30"
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

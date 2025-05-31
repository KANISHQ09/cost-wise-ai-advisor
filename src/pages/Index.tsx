
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { BarChart, Zap, TrendingDown, Users, Monitor, Database, Settings, Info, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'ai', message: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!chatMessage.trim()) return;

    const userMessage = chatMessage.trim();
    setChatMessage("");
    setIsLoading(true);

    // Add user message to chat history
    setChatHistory(prev => [...prev, { type: 'user', message: userMessage }]);

    try {
      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-vaeODYHab23xkcK86nfzePj729EUooSp'
        },
        body: JSON.stringify({
          user_id: "demo-user@costadvisor.com",
          agent_id: "683a8243c446a3a00dfef1ea",
          session_id: "683a8243c446a3a00dfef1ea-demo-session",
          message: userMessage
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      // Add AI response to chat history
      setChatHistory(prev => [...prev, { 
        type: 'ai', 
        message: data.response || data.message || "I received your message and I'm here to help optimize your AI costs!"
      }]);

    } catch (error) {
      console.error('Error calling AI Cost Advisor API:', error);
      toast({
        title: "Connection Error",
        description: "Unable to connect to the AI Cost Advisor. Please try again.",
        variant: "destructive"
      });
      
      // Add error message to chat
      setChatHistory(prev => [...prev, { 
        type: 'ai', 
        message: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AI Cost Advisor</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#try-advisor" className="text-gray-600 hover:text-blue-600 transition-colors">Try Advisor</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            AI Cost Optimization
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Optimize Your AI Costs with
            <span className="text-blue-600"> Smart Analytics</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Analyze token usage, track spending patterns, and reduce AI costs by up to 40% 
            with our intelligent cost advisor. Get real-time insights and optimization recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              Start Free Analysis
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-3">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand, monitor, and optimize your AI usage costs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Token Usage Analytics</CardTitle>
                <CardDescription>
                  Track token consumption across different models and identify usage patterns
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Cost Optimization</CardTitle>
                <CardDescription>
                  Get personalized recommendations to reduce costs without sacrificing performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Real-time Monitoring</CardTitle>
                <CardDescription>
                  Monitor your AI costs in real-time with detailed dashboards and alerts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Multi-Model Support</CardTitle>
                <CardDescription>
                  Analyze costs across GPT, Claude, Gemini, and other popular AI models
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Team Management</CardTitle>
                <CardDescription>
                  Track usage by team members and set spending limits and budgets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Smart Alerts</CardTitle>
                <CardDescription>
                  Receive notifications when spending exceeds thresholds or unusual patterns occur
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple three-step process to start optimizing your AI costs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Connect Your APIs</h4>
              <p className="text-gray-600 leading-relaxed">
                Securely connect your OpenAI, Anthropic, Google, and other AI service APIs to start tracking usage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Analyze Usage Patterns</h4>
              <p className="text-gray-600 leading-relaxed">
                Our AI analyzes your token usage, frequency patterns, and model performance to identify optimization opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Implement Recommendations</h4>
              <p className="text-gray-600 leading-relaxed">
                Follow personalized recommendations to reduce costs while maintaining or improving performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Try the Advisor Section */}
      <section id="try-advisor" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Try the AI Cost Advisor</h3>
            <p className="text-xl text-gray-600">
              Get instant cost analysis and optimization recommendations
            </p>
          </div>
          
          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
              <CardTitle className="text-2xl text-center">AI Cost Advisor Chat</CardTitle>
              <CardDescription className="text-center">
                Describe your AI usage and get personalized cost optimization advice
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg min-h-[300px] max-h-[400px] overflow-y-auto">
                  {chatHistory.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-500 text-center">
                        <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        Start a conversation with the AI Cost Advisor
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {chatHistory.map((chat, index) => (
                        <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-3 rounded-lg ${
                            chat.type === 'user' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-white border border-gray-200 text-gray-800'
                          }`}>
                            <p className="text-sm whitespace-pre-wrap">{chat.message}</p>
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-white border border-gray-200 text-gray-800 p-3 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span className="text-sm">AI Cost Advisor is thinking...</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Textarea
                    placeholder="Ask about your AI costs, usage patterns, or optimization strategies..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 resize-none border-blue-200 focus:border-blue-400"
                    rows={3}
                    disabled={isLoading}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-blue-600 hover:bg-blue-700 px-6"
                    disabled={!chatMessage.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 text-center">
                  Example: "I'm using GPT-4 for content generation with 10,000 tokens daily. How can I reduce costs?"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-gray-600">
              Everything you need to know about AI Cost Advisor
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 text-blue-600 mr-2" />
                  How much can I save on AI costs?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Users typically save 20-40% on their AI costs by optimizing model selection, reducing unnecessary API calls, 
                  and implementing efficient caching strategies based on our recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 text-blue-600 mr-2" />
                  Which AI models are supported?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We support all major AI providers including OpenAI (GPT-3.5, GPT-4), Anthropic (Claude), 
                  Google (Gemini), and many others. Our system continuously adds support for new models.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 text-blue-600 mr-2" />
                  Is my data secure?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we only analyze usage metadata and never store your actual content. 
                  All connections use secure APIs and we follow industry-standard security practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 text-blue-600 mr-2" />
                  How quickly will I see results?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You'll get initial insights within 24 hours of connecting your APIs. 
                  More detailed optimization recommendations become available after a week of data collection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold">AI Cost Advisor</h4>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Optimize your AI costs with intelligent analytics and personalized recommendations. 
              Start saving today.
            </p>
            <Separator className="bg-gray-700 mb-8" />
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-400">
              <p>&copy; 2024 AI Cost Advisor. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

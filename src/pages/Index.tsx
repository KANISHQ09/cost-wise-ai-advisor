
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Zap, BarChart, TrendingDown, Shield, Users, Clock, ChevronRight, MessageCircle, Send, X } from "lucide-react";
import { gsap } from "gsap";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations on page load
    const tl = gsap.timeline();
    
    tl.from(".hero-content", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    })
    .from(".hero-badge", {
      duration: 0.8,
      scale: 0,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(".hero-buttons", {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.3")
    .from(".feature-card", {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out"
    }, "-=0.5")
    .from(".stat-item", {
      duration: 0.8,
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.5");

    // Hover animations for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { duration: 0.3, scale: 1.05, ease: "power2.out" });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { duration: 0.3, scale: 1, ease: "power2.out" });
      });
    });

    // Chat button animation
    const chatButton = document.querySelector('.chat-button');
    if (chatButton) {
      gsap.set(chatButton, { scale: 0 });
      gsap.to(chatButton, { 
        scale: 1, 
        duration: 0.5, 
        ease: "back.out(1.7)",
        delay: 2
      });
    }
  }, []);

  const sendMessage = async () => {
    if (!chatMessage.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call for now
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message! Our AI advisor will respond shortly.",
      });
      setChatMessage("");
      setIsChatOpen(false);
    }, 1500);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    
    // Animate chat window
    if (!isChatOpen) {
      gsap.fromTo(".chat-window", 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
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
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/demo">Demo</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-4 py-20 text-center">
        <div className="hero-content max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hero-badge">
            AI-Powered Cost Optimization
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Reduce Your AI Costs by Up to{" "}
            <span className="text-blue-600">40%</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our intelligent platform analyzes your AI usage patterns and automatically optimizes 
            costs without compromising performance. Join thousands of companies saving millions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/signup">Start Free Analysis</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/demo">
                View Demo <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-item">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.5M+</div>
              <div className="text-gray-600">Saved for customers</div>
            </div>
            <div className="stat-item">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Companies trust us</div>
            </div>
            <div className="stat-item">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Average cost reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose AI Cost Advisor?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides everything you need to optimize your AI spending
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="feature-card border-blue-200">
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-lg w-fit">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Real-time Analytics</CardTitle>
              <CardDescription>
                Monitor your AI costs in real-time with detailed breakdowns and insights
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="feature-card border-green-200">
            <CardHeader>
              <div className="bg-green-100 p-3 rounded-lg w-fit">
                <TrendingDown className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Smart Optimization</CardTitle>
              <CardDescription>
                AI-driven recommendations to reduce costs while maintaining quality
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="feature-card border-purple-200">
            <CardHeader>
              <div className="bg-purple-100 p-3 rounded-lg w-fit">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Enterprise Security</CardTitle>
              <CardDescription>
                Bank-grade security with compliance certifications you can trust
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="feature-card border-orange-200">
            <CardHeader>
              <div className="bg-orange-100 p-3 rounded-lg w-fit">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription>
                Share insights and manage AI costs across your entire organization
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="feature-card border-pink-200">
            <CardHeader>
              <div className="bg-pink-100 p-3 rounded-lg w-fit">
                <Clock className="h-6 w-6 text-pink-600" />
              </div>
              <CardTitle>24/7 Monitoring</CardTitle>
              <CardDescription>
                Continuous monitoring with instant alerts for cost anomalies
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="feature-card border-indigo-200">
            <CardHeader>
              <div className="bg-indigo-100 p-3 rounded-lg w-fit">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle>Easy Integration</CardTitle>
              <CardDescription>
                Connect with popular AI platforms in minutes, not hours
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Saving on AI Costs?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies already optimizing their AI spending
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">AI Cost Advisor</span>
              </div>
              <p className="text-gray-400">
                Helping businesses optimize their AI costs with intelligent automation.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Cost Advisor. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <Button 
        onClick={toggleChat}
        className="chat-button fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
        size="icon"
      >
        {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl border z-40">
          <div className="p-4 border-b bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">AI Cost Advisor Chat</h3>
            <p className="text-sm opacity-90">How can we help you today?</p>
          </div>
          <div className="p-4 space-y-4">
            <Textarea
              placeholder="Ask about AI cost optimization..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              rows={3}
            />
            <Button 
              onClick={sendMessage}
              disabled={isLoading || !chatMessage.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

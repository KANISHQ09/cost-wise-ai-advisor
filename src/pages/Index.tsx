
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  TrendingDown, 
  Shield, 
  BarChart3, 
  Users, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  Settings,
  Lightbulb
} from "lucide-react";

const Index = () => {
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
          <div className="flex space-x-4">
            <Button asChild variant="outline">
              <Link to="/demo">Demo</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/auth">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-700">
          Save up to 40% on AI costs
        </Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Optimize Your AI Costs with{" "}
          <span className="text-blue-600">Smart Analytics</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Get real-time insights into your AI spending across all platforms. Our intelligent 
          optimization engine helps you reduce costs while maintaining performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/auth">
              Start Free Analysis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/demo">Watch Demo</Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
            <p className="text-gray-600">Average Cost Reduction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Companies Trust Us</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2M+</div>
            <p className="text-gray-600">Total Savings Generated</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to optimize AI costs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and insights to help you make informed decisions about your AI spending
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-blue-200">
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-lg w-fit">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Real-time Analytics</CardTitle>
              <CardDescription>
                Monitor your AI costs across all platforms with detailed breakdowns and trends
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-green-200">
            <CardHeader>
              <div className="bg-green-100 p-3 rounded-lg w-fit">
                <TrendingDown className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Smart Optimization</CardTitle>
              <CardDescription>
                AI-powered recommendations to reduce costs without compromising performance
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-purple-200">
            <CardHeader>
              <div className="bg-purple-100 p-3 rounded-lg w-fit">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Budget Controls</CardTitle>
              <CardDescription>
                Set spending limits and get alerts before you exceed your AI budget
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How AI Cost Advisor Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and start saving on your AI costs today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Your Services</h3>
              <p className="text-gray-600">
                Securely connect your AI platforms and services for comprehensive monitoring
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyze Usage</h3>
              <p className="text-gray-600">
                Get detailed insights into your AI spending patterns and usage metrics
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimize & Save</h3>
              <p className="text-gray-600">
                Implement our recommendations and watch your AI costs decrease
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to optimize your AI costs?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies already saving money with AI Cost Advisor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/auth">
                Start Free Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">AI Cost Advisor</span>
              </div>
              <p className="text-gray-400">
                Optimize your AI costs with smart analytics and intelligent recommendations.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <Link to="/demo" className="block text-gray-400 hover:text-white">
                  Demo
                </Link>
                <Link to="/cost-calculator" className="block text-gray-400 hover:text-white">
                  Cost Calculator
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <Link to="/contact" className="block text-gray-400 hover:text-white">
                  Contact
                </Link>
                <Link to="/privacy" className="block text-gray-400 hover:text-white">
                  Privacy
                </Link>
                <Link to="/terms" className="block text-gray-400 hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Get Started</h3>
              <div className="space-y-2">
                <Link to="/auth" className="block text-gray-400 hover:text-white">
                  Sign Up
                </Link>
                <Link to="/auth" className="block text-gray-400 hover:text-white">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Cost Advisor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

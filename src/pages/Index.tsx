
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart, DollarSign, TrendingDown, Calculator, Users, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">AI Cost Advisor</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/demo">Try Demo</Link>
            </Button>
            <Button asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            AI Cost Optimization Platform
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Optimize Your AI Costs with
            <span className="text-blue-600"> Intelligent Analytics</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Monitor, analyze, and reduce your AI infrastructure costs across OpenAI, Anthropic, AWS Bedrock, and more. 
            Save up to 40% on your AI spending with our advanced optimization algorithms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/auth">Start Free Analysis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to optimize AI costs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides comprehensive tools to monitor, analyze, and optimize your AI infrastructure spending.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-blue-200">
            <CardHeader>
              <div className="bg-blue-100 p-2 rounded-lg w-fit mb-4">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Real-time Analytics</CardTitle>
              <CardDescription>
                Monitor your AI costs in real-time with detailed breakdowns by service, model, and usage patterns.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <div className="bg-green-100 p-2 rounded-lg w-fit mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Cost Optimization</CardTitle>
              <CardDescription>
                Automatically identify cost-saving opportunities and receive personalized recommendations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-200">
            <CardHeader>
              <div className="bg-purple-100 p-2 rounded-lg w-fit mb-4">
                <TrendingDown className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Predictive Insights</CardTitle>
              <CardDescription>
                Forecast future costs and budget more effectively with AI-powered predictions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <div className="bg-orange-100 p-2 rounded-lg w-fit mb-4">
                <Calculator className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Cost Calculator</CardTitle>
              <CardDescription>
                Calculate potential savings before making changes to your AI infrastructure.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-indigo-200">
            <CardHeader>
              <div className="bg-indigo-100 p-2 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription>
                Share insights and collaborate with your team on cost optimization strategies.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <div className="bg-red-100 p-2 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Secure & Compliant</CardTitle>
              <CardDescription>
                Enterprise-grade security with SOC 2 compliance and data encryption.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <p className="text-gray-600">Average cost reduction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
              <p className="text-gray-600">Total savings achieved</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600">Companies optimized</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to optimize your AI costs?
          </h2>
          <p className="text-gray-600 mb-8">
            Start your free analysis today and discover how much you can save on your AI infrastructure.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/auth">Start Free Analysis</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">AI Cost Advisor</span>
              </div>
              <p className="text-gray-400">
                Optimize your AI infrastructure costs with intelligent analytics and automated recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/demo" className="hover:text-white">Demo</Link></li>
                <li><Link to="/cost-calculator" className="hover:text-white">Cost Calculator</Link></li>
                <li><Link to="/demo-dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@aicostadvisor.com" className="hover:text-white">Email Support</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
              </ul>
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

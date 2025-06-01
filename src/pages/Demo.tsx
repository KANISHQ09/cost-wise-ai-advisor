
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, BarChart, TrendingDown, ArrowLeft, Play } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AI Cost Advisor</h1>
          </Link>
          <Button asChild variant="outline">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700">
            Interactive Demo
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            See AI Cost Advisor in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore how our platform helps businesses reduce AI costs by up to 40% through intelligent optimization
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="border-blue-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Interactive Dashboard Demo</CardTitle>
                  <CardDescription>
                    Experience our real-time cost analytics dashboard
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <BarChart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Interactive dashboard demo would be embedded here
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Launch Demo Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingDown className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Cost Optimization Simulation</CardTitle>
                  <CardDescription>
                    See potential savings with your AI usage patterns
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <TrendingDown className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Cost optimization calculator demo would be embedded here
                </p>
                <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                  Try Cost Calculator
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to optimize your AI costs?
          </h3>
          <p className="text-gray-600 mb-6">
            Start your free analysis and discover how much you can save
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/signup">Start Free Analysis</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

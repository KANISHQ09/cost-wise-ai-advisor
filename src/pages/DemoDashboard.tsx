
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowLeft, TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const costData = [
  { month: "Jan", cost: 2400, savings: 800 },
  { month: "Feb", cost: 1398, savings: 1200 },
  { month: "Mar", cost: 9800, savings: 600 },
  { month: "Apr", cost: 3908, savings: 1400 },
  { month: "May", cost: 4800, savings: 1800 },
  { month: "Jun", cost: 3800, savings: 2200 }
];

const usageData = [
  { service: "OpenAI GPT-4", usage: 45, cost: 1200 },
  { service: "Anthropic Claude", usage: 30, cost: 890 },
  { service: "Google Gemini", usage: 20, cost: 560 },
  { service: "Other APIs", usage: 5, cost: 150 }
];

const DemoDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AI Cost Advisor</h1>
          </Link>
          <Button asChild variant="outline">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700">Demo Dashboard</Badge>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Cost Analytics Dashboard</h1>
          <p className="text-gray-600">Real-time insights into your AI spending and optimization opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Spend</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,800</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500">+2.1%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
              <TrendingDown className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$2,200</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+15.3%</span> optimization
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">API Calls</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,231</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+5.2%</span> efficiency gain
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost per Call</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$0.084</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">-8.4%</span> reduction
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cost Trends & Savings Over Time</CardTitle>
              <CardDescription>Monthly AI costs and achieved savings</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="cost" stroke="#3b82f6" strokeWidth={2} name="Cost ($)" />
                  <Line type="monotone" dataKey="savings" stroke="#10b981" strokeWidth={2} name="Savings ($)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Service Usage Breakdown</CardTitle>
              <CardDescription>Cost distribution across different AI services</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="service" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cost" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="inline-block">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Ready to see real results?</h3>
              <p className="text-gray-600 mb-4">Connect your AI services to start optimizing costs</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Connect Your Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DemoDashboard;

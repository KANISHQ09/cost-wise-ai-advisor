
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { DollarSign, TrendingDown, Zap, Clock } from "lucide-react";

const DemoDashboard = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [currentData, setCurrentData] = useState(0);

  const costData = [
    { month: 'Jan', current: 1200, optimized: 720 },
    { month: 'Feb', current: 1350, optimized: 810 },
    { month: 'Mar', current: 1180, optimized: 708 },
    { month: 'Apr', current: 1420, optimized: 852 },
    { month: 'May', current: 1380, optimized: 828 },
    { month: 'Jun', current: 1500, optimized: 900 },
  ];

  const usageData = [
    { model: 'GPT-4', usage: 45, cost: '$450' },
    { model: 'GPT-3.5', usage: 30, cost: '$90' },
    { model: 'Claude-3', usage: 15, cost: '$120' },
    { model: 'Gemini', usage: 10, cost: '$80' },
  ];

  useEffect(() => {
    if (isLaunched) {
      const interval = setInterval(() => {
        setCurrentData(prev => (prev + 1) % 100);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isLaunched]);

  const launchDemo = () => {
    setIsLaunched(true);
  };

  if (!isLaunched) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <BarChart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <p className="text-gray-600 mb-4">
          Interactive dashboard demo - see real-time cost analytics and optimization insights
        </p>
        <Button onClick={launchDemo} className="bg-blue-600 hover:bg-blue-700">
          Launch Demo Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,500</div>
            <p className="text-xs text-muted-foreground">Current month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
            <TrendingDown className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$600</div>
            <p className="text-xs text-muted-foreground">40% reduction</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Calls</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,230</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2s</div>
            <p className="text-xs text-muted-foreground">Optimized</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cost Optimization Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={costData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="current" stroke="#ef4444" strokeWidth={2} name="Current Cost" />
                <Line type="monotone" dataKey="optimized" stroke="#22c55e" strokeWidth={2} name="Optimized Cost" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Model Usage Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="model" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="usage" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button variant="outline" onClick={() => setIsLaunched(false)}>
          Reset Demo
        </Button>
      </div>
    </div>
  );
};

export default DemoDashboard;

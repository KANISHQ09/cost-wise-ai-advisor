
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, ArrowLeft, Calculator, TrendingDown } from "lucide-react";

const CostCalculator = () => {
  const [inputs, setInputs] = useState({
    monthlySpend: "",
    primaryService: "",
    callsPerMonth: "",
    avgTokens: ""
  });

  const [results, setResults] = useState({
    potentialSavings: 0,
    optimizedCost: 0,
    savingsPercentage: 0
  });

  const calculateSavings = () => {
    const monthlySpend = parseFloat(inputs.monthlySpend) || 0;
    const callsPerMonth = parseFloat(inputs.callsPerMonth) || 0;
    const avgTokens = parseFloat(inputs.avgTokens) || 0;

    // Simple calculation logic for demo purposes
    let optimizationFactor = 0.25; // Base 25% savings
    
    // Adjust based on service type
    if (inputs.primaryService === "openai-gpt4") optimizationFactor = 0.35;
    if (inputs.primaryService === "anthropic-claude") optimizationFactor = 0.30;
    if (inputs.primaryService === "google-gemini") optimizationFactor = 0.40;

    // Higher usage gets better optimization
    if (callsPerMonth > 100000) optimizationFactor += 0.10;
    if (callsPerMonth > 50000) optimizationFactor += 0.05;

    const potentialSavings = monthlySpend * optimizationFactor;
    const optimizedCost = monthlySpend - potentialSavings;
    const savingsPercentage = (potentialSavings / monthlySpend) * 100;

    setResults({
      potentialSavings: Math.round(potentialSavings),
      optimizedCost: Math.round(optimizedCost),
      savingsPercentage: Math.round(savingsPercentage)
    });
  };

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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">AI Cost Calculator</h1>
          </div>
          <p className="text-gray-600">Calculate your potential savings with our AI cost optimization platform</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Current AI Usage</CardTitle>
              <CardDescription>Enter your current AI spending details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="monthlySpend">Monthly AI Spend ($)</Label>
                <Input
                  id="monthlySpend"
                  type="number"
                  placeholder="e.g., 5000"
                  value={inputs.monthlySpend}
                  onChange={(e) => setInputs({...inputs, monthlySpend: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryService">Primary AI Service</Label>
                <Select value={inputs.primaryService} onValueChange={(value) => setInputs({...inputs, primaryService: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your main AI service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="openai-gpt4">OpenAI GPT-4</SelectItem>
                    <SelectItem value="openai-gpt3">OpenAI GPT-3.5</SelectItem>
                    <SelectItem value="anthropic-claude">Anthropic Claude</SelectItem>
                    <SelectItem value="google-gemini">Google Gemini</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="callsPerMonth">API Calls per Month</Label>
                <Input
                  id="callsPerMonth"
                  type="number"
                  placeholder="e.g., 50000"
                  value={inputs.callsPerMonth}
                  onChange={(e) => setInputs({...inputs, callsPerMonth: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avgTokens">Average Tokens per Call</Label>
                <Input
                  id="avgTokens"
                  type="number"
                  placeholder="e.g., 1500"
                  value={inputs.avgTokens}
                  onChange={(e) => setInputs({...inputs, avgTokens: e.target.value})}
                />
              </div>

              <Button 
                onClick={calculateSavings} 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!inputs.monthlySpend || !inputs.primaryService}
              >
                Calculate Savings
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Optimization Results</CardTitle>
              <CardDescription>Potential savings with AI Cost Advisor</CardDescription>
            </CardHeader>
            <CardContent>
              {results.potentialSavings > 0 ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ${results.potentialSavings.toLocaleString()}
                    </div>
                    <p className="text-gray-600">Potential Monthly Savings</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        ${results.optimizedCost.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-600">Optimized Cost</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        {results.savingsPercentage}%
                      </div>
                      <p className="text-sm text-gray-600">Cost Reduction</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingDown className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-green-800">Yearly Impact</h4>
                    </div>
                    <p className="text-green-700">
                      Save up to <strong>${(results.potentialSavings * 12).toLocaleString()}</strong> annually
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Optimization Strategies:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Model selection optimization</li>
                      <li>• Request batching and caching</li>
                      <li>• Token usage optimization</li>
                      <li>• Smart routing between providers</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Free Analysis
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Enter your usage details to see potential savings</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;

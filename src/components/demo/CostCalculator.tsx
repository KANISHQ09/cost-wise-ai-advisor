
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingDown, Calculator, Zap } from "lucide-react";

const CostCalculator = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    model: "",
    tokensPerDay: "",
    callsPerDay: "",
    currentCost: ""
  });

  const modelPricing = {
    "gpt-4": { input: 0.03, output: 0.06, name: "GPT-4" },
    "gpt-3.5": { input: 0.002, output: 0.002, name: "GPT-3.5 Turbo" },
    "claude-3": { input: 0.015, output: 0.075, name: "Claude-3 Sonnet" },
    "gemini": { input: 0.0007, output: 0.0021, name: "Gemini Pro" }
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 2000);
  };

  const calculateSavings = () => {
    const tokens = parseInt(formData.tokensPerDay) || 0;
    const current = parseFloat(formData.currentCost) || 0;
    
    // Simulate optimization savings
    const optimizedCost = current * 0.6; // 40% savings
    const monthlySavings = (current - optimizedCost) * 30;
    const yearlySavings = monthlySavings * 12;
    
    return {
      currentDaily: current,
      optimizedDaily: optimizedCost,
      dailySavings: current - optimizedCost,
      monthlySavings,
      yearlySavings
    };
  };

  const savings = showResults ? calculateSavings() : null;

  if (!showResults) {
    return (
      <div className="bg-gray-100 rounded-lg p-8">
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-center mb-6">
            <Calculator className="h-12 w-12 text-green-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">AI Cost Calculator</h3>
            <p className="text-gray-600 text-sm">Calculate your potential savings</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="model">Primary AI Model</Label>
              <Select onValueChange={(value) => setFormData({...formData, model: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your AI model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4</SelectItem>
                  <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="claude-3">Claude-3 Sonnet</SelectItem>
                  <SelectItem value="gemini">Gemini Pro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="tokens">Tokens per Day</Label>
              <Input
                id="tokens"
                type="number"
                placeholder="e.g., 10000"
                value={formData.tokensPerDay}
                onChange={(e) => setFormData({...formData, tokensPerDay: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="calls">API Calls per Day</Label>
              <Input
                id="calls"
                type="number"
                placeholder="e.g., 500"
                value={formData.callsPerDay}
                onChange={(e) => setFormData({...formData, callsPerDay: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="cost">Current Daily Cost ($)</Label>
              <Input
                id="cost"
                type="number"
                step="0.01"
                placeholder="e.g., 25.00"
                value={formData.currentCost}
                onChange={(e) => setFormData({...formData, currentCost: e.target.value})}
              />
            </div>

            <Button 
              onClick={handleCalculate}
              disabled={isCalculating || !formData.model || !formData.currentCost}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isCalculating ? (
                <>
                  <Zap className="animate-spin h-4 w-4 mr-2" />
                  Calculating...
                </>
              ) : (
                "Calculate Savings"
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <TrendingDown className="h-12 w-12 text-green-600 mx-auto mb-2" />
        <h3 className="text-lg font-semibold text-green-600">Optimization Results</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Daily Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${savings?.dailySavings.toFixed(2)}
            </div>
            <p className="text-xs text-gray-600">40% reduction</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              ${savings?.monthlySavings.toFixed(0)}
            </div>
            <p className="text-xs text-gray-600">Per month</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Yearly Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              ${savings?.yearlySavings.toFixed(0)}
            </div>
            <p className="text-xs text-gray-600">Annual total</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Optimization Recommendations:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Switch to GPT-3.5 Turbo for routine tasks (90% quality, 93% cost reduction)</li>
          <li>• Implement request batching to reduce API call frequency</li>
          <li>• Use prompt compression techniques to reduce token usage</li>
          <li>• Cache frequently requested responses</li>
        </ul>
      </div>

      <div className="text-center">
        <Button variant="outline" onClick={() => setShowResults(false)}>
          Calculate Again
        </Button>
      </div>
    </div>
  );
};

export default CostCalculator;

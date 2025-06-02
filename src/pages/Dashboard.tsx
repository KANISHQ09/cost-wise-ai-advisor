
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, User, BarChart, Calculator, LogOut, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
      return;
    }

    if (user && !user.email_confirmed_at) {
      toast({
        title: "Email Verification Required",
        description: "Please check your email and click the verification link to access all features.",
        variant: "destructive"
      });
    }

    const fetchProfile = async () => {
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
    };

    fetchProfile();
  }, [user, navigate, loading, toast]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="bg-blue-600 p-3 rounded-lg mb-4 inline-block">
            <Zap className="h-8 w-8 text-white animate-pulse" />
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AI Cost Advisor</h1>
          </div>
          <div className="flex items-center space-x-4">
            {!user.email_confirmed_at && (
              <Badge variant="outline" className="text-orange-600 border-orange-600">
                <Mail className="h-3 w-3 mr-1" />
                Email Unverified
              </Badge>
            )}
            <Button asChild variant="outline">
              <Link to="/profile">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Link>
            </Button>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {profile?.full_name || user.email}!
          </h2>
          <p className="text-gray-600">
            Ready to optimize your AI costs? Explore our tools below.
          </p>
          {!user.email_confirmed_at && (
            <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-orange-800">
                <strong>Email verification required:</strong> Please check your email and click the verification link to access all features.
              </p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-blue-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Demo Dashboard</CardTitle>
                  <CardDescription>
                    Experience our real-time cost analytics dashboard
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                asChild 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!user.email_confirmed_at}
              >
                <Link to="/demo-dashboard">
                  Launch Demo Dashboard
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Cost Calculator</CardTitle>
                  <CardDescription>
                    Calculate potential savings with your AI usage
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                asChild 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!user.email_confirmed_at}
              >
                <Link to="/cost-calculator">
                  Try Cost Calculator
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Your AI Cost Optimization Journey</CardTitle>
              <CardDescription>
                Track your progress and savings over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$0</div>
                  <p className="text-sm text-gray-600">Current Monthly Spend</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                  <p className="text-sm text-gray-600">Potential Savings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">0%</div>
                  <p className="text-sm text-gray-600">Optimization Score</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Badge variant="outline">
                  {user.email_confirmed_at 
                    ? "Connect your AI services to see real data" 
                    : "Verify your email to connect services"
                  }
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

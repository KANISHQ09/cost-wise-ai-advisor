
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Settings, 
  Plus, 
  CheckCircle, 
  ExternalLink,
  Key,
  Database,
  Zap,
  Brain,
  MessageSquare
} from "lucide-react";

const ConnectServices = () => {
  const [connections, setConnections] = useState([
    { id: 'openai', name: 'OpenAI', connected: false, icon: Brain },
    { id: 'anthropic', name: 'Anthropic Claude', connected: false, icon: MessageSquare },
    { id: 'google', name: 'Google Cloud AI', connected: false, icon: Database },
    { id: 'azure', name: 'Azure OpenAI', connected: false, icon: Zap },
  ]);
  
  const [showApiForm, setShowApiForm] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState("");
  const { toast } = useToast();

  const handleConnect = (serviceId: string) => {
    if (apiKey.trim()) {
      setConnections(prev => 
        prev.map(conn => 
          conn.id === serviceId 
            ? { ...conn, connected: true }
            : conn
        )
      );
      
      toast({
        title: "Service Connected",
        description: `Successfully connected to ${connections.find(c => c.id === serviceId)?.name}`,
      });
      
      setShowApiForm(null);
      setApiKey("");
    } else {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid API key",
        variant: "destructive"
      });
    }
  };

  const handleDisconnect = (serviceId: string) => {
    setConnections(prev => 
      prev.map(conn => 
        conn.id === serviceId 
          ? { ...conn, connected: false }
          : conn
      )
    );
    
    toast({
      title: "Service Disconnected",
      description: `Disconnected from ${connections.find(c => c.id === serviceId)?.name}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Settings className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Connect Your AI Services</h2>
          <p className="text-gray-600">Securely connect your AI platforms to start monitoring costs</p>
        </div>
      </div>

      <div className="grid gap-4">
        {connections.map((service) => {
          const IconComponent = service.icon;
          return (
            <Card key={service.id} className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription>
                        {service.connected ? "Connected and monitoring" : "Not connected"}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {service.connected ? (
                      <>
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDisconnect(service.id)}
                        >
                          Disconnect
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => setShowApiForm(service.id)}
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Connect
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {showApiForm === service.id && (
                <CardContent className="border-t bg-gray-50">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Key className="h-4 w-4" />
                      <span>Enter your API key to connect {service.name}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`api-key-${service.id}`}>API Key</Label>
                      <Input
                        id={`api-key-${service.id}`}
                        type="password"
                        placeholder="Enter your API key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleConnect(service.id)}
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Connect Service
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setShowApiForm(null);
                          setApiKey("");
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(getApiKeyUrl(service.id), '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Get API Key
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Settings className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Why Connect Your Services?</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Real-time cost monitoring across all platforms</li>
                <li>• Automatic usage tracking and analysis</li>
                <li>• Smart optimization recommendations</li>
                <li>• Budget alerts and spending forecasts</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const getApiKeyUrl = (serviceId: string) => {
  const urls = {
    openai: 'https://platform.openai.com/api-keys',
    anthropic: 'https://console.anthropic.com/account/keys',
    google: 'https://console.cloud.google.com/apis/credentials',
    azure: 'https://portal.azure.com'
  };
  return urls[serviceId as keyof typeof urls] || '#';
};

export default ConnectServices;

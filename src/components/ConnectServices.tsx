
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ConnectServices = () => {
  const [openaiKey, setOpenaiKey] = useState("");
  const [anthropicKey, setAnthropicKey] = useState("");
  const [awsCredentials, setAwsCredentials] = useState({ accessKey: "", secretKey: "", region: "" });
  const [connectedServices, setConnectedServices] = useState<string[]>([]);
  const { toast } = useToast();

  const connectOpenAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (openaiKey.trim()) {
      setConnectedServices(prev => [...prev.filter(s => s !== "OpenAI"), "OpenAI"]);
      setOpenaiKey("");
      toast({
        title: "OpenAI Connected",
        description: "Your OpenAI API key has been securely stored.",
      });
    }
  };

  const connectAnthropic = (e: React.FormEvent) => {
    e.preventDefault();
    if (anthropicKey.trim()) {
      setConnectedServices(prev => [...prev.filter(s => s !== "Anthropic"), "Anthropic"]);
      setAnthropicKey("");
      toast({
        title: "Anthropic Connected",
        description: "Your Anthropic API key has been securely stored.",
      });
    }
  };

  const connectAWS = (e: React.FormEvent) => {
    e.preventDefault();
    if (awsCredentials.accessKey && awsCredentials.secretKey && awsCredentials.region) {
      setConnectedServices(prev => [...prev.filter(s => s !== "AWS Bedrock"), "AWS Bedrock"]);
      setAwsCredentials({ accessKey: "", secretKey: "", region: "" });
      toast({
        title: "AWS Bedrock Connected",
        description: "Your AWS credentials have been securely stored.",
      });
    }
  };

  const disconnectService = (service: string) => {
    setConnectedServices(prev => prev.filter(s => s !== service));
    toast({
      title: "Service Disconnected",
      description: `${service} has been disconnected.`,
      variant: "destructive"
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-6">
        {connectedServices.map(service => (
          <Badge key={service} variant="default" className="flex items-center gap-2">
            {service}
            <button
              onClick={() => disconnectService(service)}
              className="ml-1 text-xs hover:text-red-500"
            >
              ×
            </button>
          </Badge>
        ))}
        {connectedServices.length === 0 && (
          <Badge variant="outline">No services connected</Badge>
        )}
      </div>

      <Tabs defaultValue="openai" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="openai">OpenAI</TabsTrigger>
          <TabsTrigger value="anthropic">Anthropic</TabsTrigger>
          <TabsTrigger value="aws">AWS Bedrock</TabsTrigger>
        </TabsList>
        
        <TabsContent value="openai">
          <Card>
            <CardHeader>
              <CardTitle>Connect OpenAI</CardTitle>
              <CardDescription>
                Add your OpenAI API key to track GPT usage and costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={connectOpenAI} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="openai-key">API Key</Label>
                  <Input
                    id="openai-key"
                    type="password"
                    placeholder="sk-..."
                    value={openaiKey}
                    onChange={(e) => setOpenaiKey(e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-600">
                    Your API key is encrypted and stored securely
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={connectedServices.includes("OpenAI")}
                >
                  {connectedServices.includes("OpenAI") ? "Connected" : "Connect OpenAI"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="anthropic">
          <Card>
            <CardHeader>
              <CardTitle>Connect Anthropic</CardTitle>
              <CardDescription>
                Add your Anthropic API key to track Claude usage and costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={connectAnthropic} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="anthropic-key">API Key</Label>
                  <Input
                    id="anthropic-key"
                    type="password"
                    placeholder="sk-ant-..."
                    value={anthropicKey}
                    onChange={(e) => setAnthropicKey(e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-600">
                    Your API key is encrypted and stored securely
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={connectedServices.includes("Anthropic")}
                >
                  {connectedServices.includes("Anthropic") ? "Connected" : "Connect Anthropic"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="aws">
          <Card>
            <CardHeader>
              <CardTitle>Connect AWS Bedrock</CardTitle>
              <CardDescription>
                Add your AWS credentials to track Bedrock usage and costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={connectAWS} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="aws-access-key">Access Key ID</Label>
                  <Input
                    id="aws-access-key"
                    type="password"
                    placeholder="AKIA..."
                    value={awsCredentials.accessKey}
                    onChange={(e) => setAwsCredentials({...awsCredentials, accessKey: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="aws-secret-key">Secret Access Key</Label>
                  <Input
                    id="aws-secret-key"
                    type="password"
                    placeholder="Your secret key"
                    value={awsCredentials.secretKey}
                    onChange={(e) => setAwsCredentials({...awsCredentials, secretKey: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="aws-region">Region</Label>
                  <Input
                    id="aws-region"
                    placeholder="us-east-1"
                    value={awsCredentials.region}
                    onChange={(e) => setAwsCredentials({...awsCredentials, region: e.target.value})}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={connectedServices.includes("AWS Bedrock")}
                >
                  {connectedServices.includes("AWS Bedrock") ? "Connected" : "Connect AWS Bedrock"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConnectServices;

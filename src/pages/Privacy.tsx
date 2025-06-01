
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowLeft, Shield } from "lucide-react";

const Privacy = () => {
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
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: December 2024
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Privacy Matters</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h3>
                <p className="text-gray-600 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support. This includes your name, email address, 
                  and AI usage data necessary for cost optimization analysis.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, 
                  including analyzing your AI usage patterns to provide cost optimization recommendations. 
                  We never sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. 
                  All data is encrypted in transit and at rest.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to access, update, or delete your personal information. 
                  You may also opt out of certain communications from us. 
                  Contact us at privacy@aicostadvisor.com to exercise these rights.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@aicostadvisor.com or through our contact page.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowLeft, FileText } from "lucide-react";

const Terms = () => {
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
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Last updated: December 2024
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Terms and Conditions</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Acceptance of Terms</h3>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using AI Cost Advisor, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Use License</h3>
                <p className="text-gray-600 leading-relaxed">
                  Permission is granted to temporarily access AI Cost Advisor for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Availability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive to provide continuous service availability, but we do not guarantee 
                  uninterrupted access to our platform. We may suspend service for maintenance 
                  or updates with reasonable notice.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Responsibilities</h3>
                <p className="text-gray-600 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials 
                  and for all activities that occur under your account. You agree to provide accurate 
                  and complete information when using our services.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall AI Cost Advisor or its suppliers be liable for any damages 
                  arising out of the use or inability to use the service, even if we have been 
                  notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at 
                  legal@aicostadvisor.com or through our contact page.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;

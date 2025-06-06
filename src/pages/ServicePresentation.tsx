
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ServicePresentation from "@/components/ServicePresentation";

const ServicePresentationPage = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const navigate = useNavigate();

  const validServiceTypes = ['website-design', 'seo', 'paid-advertising', 'cloud-hosting'];
  
  if (!serviceType || !validServiceTypes.includes(serviceType)) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The requested service presentation could not be found.</p>
          <Button onClick={() => navigate("/admin")} variant="branded">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Back Button - Hidden in print */}
      <div className="absolute top-4 left-4 z-10 print:hidden">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/admin")}
          className="bg-white/90 backdrop-blur-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Admin
        </Button>
      </div>

      <ServicePresentation serviceType={serviceType as any} />
    </div>
  );
};

export default ServicePresentationPage;

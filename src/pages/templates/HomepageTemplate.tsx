
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HomepageTemplate = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Your Main Headline Here</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your compelling value proposition and brief description of what you offer goes here.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
            Your Primary CTA
          </Button>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Service 1", "Service 2", "Service 3", "Service 4"].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service}</h3>
                  <p className="text-gray-600">
                    Brief description of {service.toLowerCase()} and its key benefits for your customers.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Feature/Benefit 1", "Feature/Benefit 2", "Feature/Benefit 3"].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                <p className="text-gray-600">
                  Detailed explanation of {feature.toLowerCase()} and how it helps your customers achieve their goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Call to Action</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compelling reason why visitors should take action now. Create urgency and highlight the value.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomepageTemplate;

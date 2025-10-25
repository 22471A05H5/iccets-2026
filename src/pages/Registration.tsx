import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const Registration = () => {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Registration Section */}
          <ContentBox>
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">Registration</h2>
            </div>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Registration Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="border border-border p-4 text-left font-semibold">Category</th>
                        <th className="border border-border p-4 text-left font-semibold">Registration Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="border border-border p-4 font-medium">Students / Research Scholars</td>
                        <td className="border border-border p-4">INR 750/-</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="border border-border p-4 font-medium">Academic Faculty Member</td>
                        <td className="border border-border p-4">INR 1250/-</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="border border-border p-4 font-medium">Industry Experts</td>
                        <td className="border border-border p-4">INR 1500/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-foreground text-base">
                    <strong>Important Note:</strong> Payment of fees must accompany all registration forms. Your registration WILL NOT be confirmed until payment is received in full. The Authors are requested to pay the Registration Fees using UPI (Google Pay, Phone Pe, etc.).
                  </p>
                </div>
              </CardContent>
            </Card>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registration;

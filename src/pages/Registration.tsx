import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users, DollarSign, ExternalLink } from "lucide-react";

const Registration = () => {
  const submissionGuidelines = [
    "Each paper can have a maximum of 6 authors",
    "Author names and affiliations must be entered during submission in the CMT portal and cannot be changed later",
    "The list of authors in the paper must exactly match the CMT submission",
    "Correspondence will be sent to all listed authors, so ensure that all email addresses in CMT are correct",
    "All authors are required to sign the copyright form",
    "Include a brief author contribution statement in each paper",
    "Papers must be at least 5 pages, excluding references",
    "Figures and images must have a resolution of at least 600 dpi",
    "Each paper must include a minimum of 15 references",
    "Only Scopus-indexed papers should be cited in the references",
    "Self-citations are not allowed. Papers containing self-citations will be rejected",
    "Authors not following these guidelines may face desk rejection before review"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Submission Section */}
          <ContentBox className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">Submission</h2>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Instructions to Authors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-6">
                    Authors are requested to follow these guidelines before submitting their papers:
                  </p>
                  <div className="grid gap-3">
                    {submissionGuidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-200">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground text-sm leading-relaxed">{guideline}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Template & Submission</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground">
                      We recommend authors to use WORD template. It is planned to publish the proceedings with "E3S Web of Conferences".
                    </p>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-between group">
                        MS Word Template
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button className="w-full justify-between group bg-primary hover:bg-primary/90">
                        Microsoft CMT Submission
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">CMT Account Creation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft.
                    </p>
                    <p className="text-foreground mb-4">
                      Authors need to register their email with CMT to submit papers to ICCETS 2026.
                    </p>
                    <Button variant="outline" className="w-full justify-between group">
                      Create CMT Account
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">Paper Submission & Review Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Authors are advised to submit their original and unpublished work (related to the conference theme).
                  </p>
                  <p className="text-foreground">
                    The review process takes into account both the quality of writing and the scientific impact of the work. Authors should clearly identify the problem, explain their contribution(s), and justify the state-of-the-art works.
                  </p>
                  <p className="text-foreground">
                    The ICCETS team takes care of plagiarism (even self-plagiarism) as serious professional misconduct. All papers will be screened for plagiarism.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Regular Paper (8–15 pages)</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      Authors are invited to submit original and unpublished research work related to the conference theme. Each paper should clearly identify the research problem or question, explain the novelty and significance of the contribution, describe the methodology and experimental or theoretical approach, and compare the proposed work with existing state-of-the-art techniques or research.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ContentBox>

          {/* Registration Section */}
          <ContentBox>
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Registration</h2>
            </div>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Registration Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="border border-border p-4 text-left font-semibold">Type of Author</th>
                        <th className="border border-border p-4 text-left font-semibold">Indian Authors</th>
                        <th className="border border-border p-4 text-left font-semibold">Foreign Authors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="border border-border p-4 font-medium">Faculty/Students</td>
                        <td className="border border-border p-4">Rs. 9000/-</td>
                        <td className="border border-border p-4">150 USD</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="border border-border p-4 font-medium">Industry</td>
                        <td className="border border-border p-4">Rs. 9000/-</td>
                        <td className="border border-border p-4">150 USD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-foreground text-sm">
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

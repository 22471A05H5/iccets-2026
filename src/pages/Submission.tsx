import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Download, ExternalLink } from "lucide-react";

const Submission = () => {
  const submissionGuidelines = [
    "Each paper can have a maximum of 6 authors.",
    "Author names and affiliations must be entered during submission in the CMT portal and cannot be changed later.",
    "The list of authors in the paper must exactly match the CMT submission.",
    "Correspondence will be sent to all listed authors, so ensure that all email addresses in CMT are correct.",
    "All authors are required to sign the copyright form.",
    "Include a brief author contribution statement in each paper.",
    "Papers must be at least 5 pages, excluding references.",
    "Figures and images must have a resolution of at least 600 dpi.",
    "Each paper must include a minimum of 15 references.",
    "Only Scopus-indexed papers should be cited in the references.",
    "Self-citations are not allowed. Papers containing self-citations will be rejected.",
    "Authors not following these guidelines may face desk rejection before review."
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <ContentBox className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Submission</h2>
            </div>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Instructions to Authors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-6">
                    Authors are requested to follow these guidelines before submitting their papers:
                  </p>
                  <div className="grid gap-3">
                    {submissionGuidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-200">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground text-base leading-relaxed">{guideline}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4 pt-6">
                  <p className="text-foreground text-lg">
                    We recommend authors to use WORD template. It is planned to publish the proceedings with "E3S Web of Conferences".
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                      className="w-full justify-between group bg-primary hover:bg-primary/90"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/src/assets/ICCETS 2026_Template_word.docx';
                        link.download = 'ICCETS 2026_Template_word.docx';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      Template: MS Word
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </Button>
                    <Button className="w-full justify-between group bg-primary hover:bg-primary/90">
                      Submission Link: Microsoft CMT
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-foreground text-base leading-relaxed mb-4">
                      The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                    </p>
                    <p className="text-foreground text-base leading-relaxed">
                      The authors will need to register their email with CMT to submit paper to ICCETS 2026. Here is a link how to create a CMT account: <a href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://cmt3.research.microsoft.com/docs/help/general/account-creation.html</a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-600">Paper Submission & Review Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground text-lg">
                    Authors are advised to submit their original and unpublished work (related to the conference theme).
                  </p>
                  <p className="text-foreground text-lg">
                    The review process takes into account both the quality of writing and the scientific impact of the work. Authors should clearly identify the problem, explain their contribution(s), and justify the state-of-the-art works. The program committee would like to review those who develop, argue, and provide results.
                  </p>
                  <p className="text-foreground text-lg">
                    Also, note that the (ICCETS) team takes care of plagiarism (even self-plagiarism) as serious professional misconduct. All papers will be screened for plagiarism, and the (ICCETS) team will reject them in case there exists significant overlap with the previously published papers/papers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Regular paper (8–15 pages):</h4>
                    <p className="text-foreground text-base leading-relaxed">
                      Authors are invited to submit original and unpublished research work related to the conference theme. Each paper should clearly identify the research problem or question, explain the novelty and significance of the contribution, describe the methodology and experimental or theoretical approach, and compare the proposed work with existing state-of-the-art techniques or research. The paper should present results in a clear and structured manner using appropriate figures, tables, and discussions, followed by meaningful conclusions that highlight key insights, implications, and possible directions for future work.
                    </p>
                  </div>
                  <p className="text-foreground text-lg">
                    All submissions must follow the formatting guidelines and instructions provided in the conference template.
                  </p>
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-2">Important Note</h4>
                    <p className="text-foreground text-base">
                      Regardless of submission types, authors are always advised to submit their original and unpublished work (related to the conference theme).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Submission;

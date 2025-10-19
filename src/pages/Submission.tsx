import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";

const Submission = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <ContentBox>
            <h2 className="text-3xl font-bold mb-6">Submission Guidelines</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Paper Format</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Papers must be submitted in IEEE format</li>
                  <li>• Maximum length: 6 pages including references</li>
                  <li>• Language: English</li>
                  <li>• File format: PDF only</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Submission Process</h3>
                <ol className="space-y-2 text-foreground list-decimal list-inside">
                  <li>Prepare your paper according to the IEEE template</li>
                  <li>Submit via Microsoft CMT platform</li>
                  <li>All submissions will undergo double-blind peer review</li>
                  <li>Authors will be notified of acceptance by 20 January 2026</li>
                  <li>Camera-ready papers due by 06 February 2026</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Publication</h3>
                <p className="text-foreground mb-4">
                  All accepted and registered papers will be published in the proceedings of E3S Web of Conferences, indexed in Scopus and other major databases.
                </p>
              </div>

              <div className="pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                  Submit via Microsoft CMT
                </Button>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-bold mb-3">Important Notes</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• At least one author must register for the conference</li>
                  <li>• Papers must be original and not under review elsewhere</li>
                  <li>• Plagiarism will result in immediate rejection</li>
                  <li>• Selected papers may be invited for journal publication</li>
                </ul>
              </div>
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Submission;

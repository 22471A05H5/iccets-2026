import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";

const AdvisoryCommittee = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">ADVISORY COMMITTEE</h1>
          </div>

          <ContentBox>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-8">Advisory Committee Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
                <div className="space-y-3">
                  <p className="text-lg text-foreground">Dr. A. Subbarami Reddy</p>
                  <p className="text-lg text-foreground">Dr. N. Sivarami Reddy</p>
                  <p className="text-lg text-foreground">Dr. M. Subba Rao</p>
                  <p className="text-lg text-foreground">Dr. D. Krishna Mohan Raju</p>
                  <p className="text-lg text-foreground">Dr. B. Jayarami Reddy</p>
                  <p className="text-lg text-foreground">Dr. N. R. Gowthami</p>
                  <p className="text-lg text-foreground">Dr. G. Suresh Babu</p>
                </div>
                <div className="space-y-3">
                  <p className="text-lg text-foreground">Dr. J. Chinna Babu</p>
                  <p className="text-lg text-foreground">Dr. P Phanindra Kumar Reddy</p>
                  <p className="text-lg text-foreground">Dr. N. Penchalaiah</p>
                  <p className="text-lg text-foreground">Dr. L. Obulapathi</p>
                  <p className="text-lg text-foreground">Dr T Navaneetha</p>
                  <p className="text-lg text-foreground">Dr. C. Madana Kumar Reddy</p>
                  <p className="text-lg text-foreground">Dr. Ragavan Kanagaraj</p>
                </div>
                <div className="space-y-3">
                  <p className="text-lg text-foreground">Dr. Chandrashekhar N. Bhende</p>
                  <p className="text-lg text-foreground">Dr. R. Gnanadass</p>
                  <p className="text-lg text-foreground">Dr. V. Sandeep</p>
                  <p className="text-lg text-foreground">Dr. Y. Chandrasekhar</p>
                  <p className="text-lg text-foreground">Dr. Prabu Mohandas</p>
                  <p className="text-lg text-foreground">Dr. Rajeswari Sridhar</p>
                  <p className="text-lg text-foreground">Dr. R. Mohan</p>
                </div>
              </div>
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdvisoryCommittee;

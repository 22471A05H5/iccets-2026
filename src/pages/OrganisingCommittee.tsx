import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";

const OrganisingCommittee = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">ORGANISING COMMITTEE</h1>
          </div>

          <ContentBox>
            <div className="space-y-8">
              {/* Chief Patrons and Patrons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-primary mb-4">Chief Patrons</h2>
                  <div className="space-y-2">
                    <p className="text-lg text-foreground">Dr. C. Gangi Reddy</p>
                    <p className="text-lg text-foreground">Sri. C. Abhishek Reddy</p>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-primary mb-4">Patrons</h2>
                  <div className="space-y-2">
                    <p className="text-lg text-foreground">Dr. E. Sai Baba Reddy</p>
                    <p className="text-lg text-foreground">Dr. N. Mallikarjuna Rao</p>
                  </div>
                </div>
              </div>

              {/* General Chair and Chair-person */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-primary mb-4">General Chair</h2>
                  <p className="text-lg text-foreground">Dr. S. M.V. Narayana</p>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-primary mb-4">Chair-person</h2>
                  <p className="text-lg text-foreground">Dr. P.B. Chennaiah</p>
                </div>
              </div>

              {/* Organizing Secretary and Conveners */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-primary mb-4">Organizing Secretary</h2>
                  <p className="text-lg text-foreground">Dr. M. Padma Lalitha</p>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-primary mb-4">Conveners</h2>
                  <div className="space-y-2">
                    <p className="text-lg text-foreground">Dr. O. Hemakesavulu</p>
                    <p className="text-lg text-foreground">Dr. S. Suresh</p>
                  </div>
                </div>
              </div>

              {/* Coordinators */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Coordinators</h2>
                <div className="space-y-2">
                  <p className="text-lg text-foreground">Dr. P. Bhaskara Prasad</p>
                  <p className="text-lg text-foreground">Dr. S. Sarada</p>
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

export default OrganisingCommittee;

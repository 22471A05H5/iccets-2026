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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* National Advisory Committee */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">National Advisory Committee:</h2>
                <div className="space-y-3">
                  <p className="text-lg text-foreground">1. Dr. B. Ravi Kumar, Professor, IIT Hyderabad</p>
                  <p className="text-lg text-foreground">2. Dr. Chandrashekhar N. Bhende, Professor, IIT Bhubaneswar</p>
                  <p className="text-lg text-foreground">3. Dr. Abdul Gafoor Shaik, Professor, IIT Jodhpur</p>
                  <p className="text-lg text-foreground">4. Dr. M. Veechari, Professor, IIT Delhi</p>
                  <p className="text-lg text-foreground">5. Dr. K. Srinivas Reddy, Professor, IIT Madras</p>
                  <p className="text-lg text-foreground">6. Dr. S.T.G. Raghukanth, Professor, IIT Madras</p>
                  <p className="text-lg text-foreground">7. Dr. D. Thukaram, Rtd, Professor, IISc Bangalore</p>
                  <p className="text-lg text-foreground">8. Dr. K. R. Murali Mohan, Rtd, Scientist-G, DST</p>
                  <p className="text-lg text-foreground">9. Dr. N.V Srikanth Professor, NIT Warangal</p>
                  <p className="text-lg text-foreground">10. Dr. M. Suryakalavathi, Professor, JNTUH</p>
                  <p className="text-lg text-foreground">11. Dr. K. Vaisakh, Professor, Andhra University</p>
                  <p className="text-lg text-foreground">12. Dr. P. Sujatha, Professor, JNTUA</p>
                  <p className="text-lg text-foreground">13. Dr. C. Shoba Bindu, Professor, JNTUA</p>
                  <p className="text-lg text-foreground">14. Dr. V.C. Usha Reddy, Associate Professor, SVU</p>
                </div>
              </div>

              {/* International Advisory Committee */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">International Advisory Committee:</h2>
                <div className="space-y-3">
                  <p className="text-lg text-foreground">1. Dr. Apel Mahmud, Professor, Flinders University, Australia</p>
                  <p className="text-lg text-foreground">2. Dr. Yanxia Sun, Professor, University of Johannesburg, South Africa</p>
                  <p className="text-lg text-foreground">3. Dr. Meisam Mahdavi, Professor, University of Jaen, Spain</p>
                  <p className="text-lg text-foreground">4. Dr. Sanjeevikumar Padmanaban, Professor, University of South-Eastern Norway, Norway</p>
                  <p className="text-lg text-foreground">5. Dr. Geno Peter, Professor, University of Technology Sarawak, Malaysia</p>
                  <p className="text-lg text-foreground">6. Dr. Mahajan Sagar Bhaskar, Professor, Prince Sultan University, Saudi Arabia</p>
                  <p className="text-lg text-foreground">7. Dr. Amjad Anvari-Moghaddam, Associate Professor, Aalborg University, Denmark</p>
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

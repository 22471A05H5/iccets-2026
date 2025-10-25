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
            <div className="space-y-6 text-left">
              {/* Chief Patrons and Patrons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Chief Patron(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. C. Gangi Reddy, Chancellor</p>
                    <p className="text-base text-foreground">Sri. C. Abhishek Reddy, Pro-chancellors</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Patron(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. E. Sai Baba Reddy, Vice-Chancellor</p>
                    <p className="text-base text-foreground">Dr. N. Mallikarjuna Rao, Registrar</p>
                  </div>
                </div>
              </div>

              {/* General Chairs and Program Chairs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">General Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. S. M.V. Narayana, Principal, AITS, Rajampet</p>
                    <p className="text-base text-foreground">Dr. Nalin Behari Dev Choudhury, Professor, NIT, Silchar</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Program Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. P. Balachennaiah, HoD- EEE</p>
                    <p className="text-base text-foreground">Dr. S. Albert Alexander, Professor, EEE, VIT, Vellore</p>
                  </div>
                </div>
              </div>

              {/* Organizing Convenors and Coordinators */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Organizing Convenor(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. M. Padma Lalitha, Professor, EEE</p>
                    <p className="text-base text-foreground">Dr. O. Hemakesavulu, Professor, EEE</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Coordinator(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. P. Bhaskara Prasad, Assistant Professor, EEE</p>
                    <p className="text-base text-foreground">Dr. S. Sarada, Assistant Professor, EEE</p>
                  </div>
                </div>
              </div>

              {/* Conference Secretary */}
              <div>
                <h2 className="text-xl font-bold text-primary mb-3">Conference Secretary:</h2>
                <div className="ml-8">
                  <p className="text-base text-foreground">Dr. S. Suresh, Associate Professor, EEE</p>
                </div>
              </div>

              {/* Advisors and Technical Program Chairs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Advisor(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. A. Subbarami Reddy, Dean, Academics</p>
                    <p className="text-base text-foreground">Dr. N. Sivarami Reddy, Dean, R&D</p>
                    <p className="text-base text-foreground">Dr. M. Subba Rao, HOD-CSE, Dean of Student Affairs</p>
                    <p className="text-base text-foreground">Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation</p>
                    <p className="text-base text-foreground">Dr. B. Jayarami Reddy, Dy. Director Admissions</p>
                    <p className="text-base text-foreground">Dr. N. R. Gowthami, HOD Civil Engineering, Assistant Professor</p>
                    <p className="text-base text-foreground">Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering</p>
                    <p className="text-base text-foreground">Dr. J. Chinna Babu, Associate Professor & HOD-ECE</p>
                    <p className="text-base text-foreground">Dr. P Phanindra Kumar Reddy, Associate Professor & HOD-AIDS</p>
                    <p className="text-base text-foreground">Dr. N. Penchalaiah, Associate Professor & HOD-AIML</p>
                    <p className="text-base text-foreground">Dr. L. Obulapathi, Associate Professor & HOD- H&S</p>
                    <p className="text-base text-foreground">Dr T Navaneetha, Assistant Professor & HOD- MBA</p>
                    <p className="text-base text-foreground">Dr. C. Madana Kumar Reddy, Associate Professor & HOD-MCA</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Technical Program Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. R. Gnanadass, PTU, Puducherry</p>
                    <p className="text-base text-foreground">Dr. V. Sandeep, NIT AP</p>
                    <p className="text-base text-foreground">Dr. K. Harinath Reddy, AU, Rajampet</p>
                    <p className="text-base text-foreground">Dr. C. Ganesh AU, Rajampet</p>
                    <p className="text-base text-foreground">Dr. N. Chinna Alluraiah, AU, Rajampet</p>
                    <p className="text-base text-foreground">Dr. K. Vijaya Bhaskar AU, Rajampet</p>
                    <p className="text-base text-foreground">Mr. R. Madhan Mohan, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mr. M. Ramesh, AU, Rajampet</p>
                  </div>
                </div>
              </div>

              {/* Publication Chairs and Publicity Chairs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Publication Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. S. Ravi Prakash Reddy, IIT, Mumbai</p>
                    <p className="text-base text-foreground">Dr. S. Jeevananthan, PTU, Puducherry</p>
                    <p className="text-base text-foreground">Dr. M. Venkatesan, NIT, Puducherry</p>
                    <p className="text-base text-foreground">Dr. P. Gopi, AU, Rajampet</p>
                    <p className="text-base text-foreground">Dr. Dhanunjaya Babu, AU, Rajampet</p>
                    <p className="text-base text-foreground">Dr. S. Venkateswarlu Reddy, AU, Rajampet</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Publicity and Website Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. S. Muqthiar Ali, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mr. N. Sreeramula Reddy, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mr. Sai Sandeep, AU, Rajampet</p>
                  </div>
                </div>
              </div>

              {/* Registration Chairs and Finance Chairs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Registration Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Mr. T. Penchalaiah, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mrs. A. Hima Bindu, AU, Rajampet</p>
                    <p className="text-base text-foreground">Ms. S. Rubeena Bi, AU, Rajampet</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Finance Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. J. Sri Ranganayakulu, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mr. L. Baya Reddy, AU, Rajampet</p>
                  </div>
                </div>
              </div>

              {/* Accommodation and Reception Chairs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Accommodation Committee Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. P. Suresh Babu, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mr. M. Mahesh, AU, Rajampet</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Reception Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Mrs. M. Swathi, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mrs. M. Swetha, AU, Rajampet</p>
                  </div>
                </div>
              </div>

              {/* Transport and Feedback Chairs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Transport Committee Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Dr. P. Bhakara Prasad, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mr. G. Mahaboob Subhan, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mr. B. Murali Mohan, AU, Rajampet</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-3">Feedback and Certification Committee Chair(s):</h2>
                  <div className="ml-8 space-y-1">
                    <p className="text-base text-foreground">Mr. T. Arun Kumar, AU, Rajampet</p>
                    <p className="text-base text-foreground">Mr. B. Anil Kumar, AU, Rajampet</p>
                  </div>
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

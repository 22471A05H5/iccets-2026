import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/homepage_image.jpg";
import clgLogo from "@/assets/clg_logo.jpeg";
import eeeLogo from "@/assets/eee_logo.jpg";
import e3sLogo from "@/assets/E3s logo.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 right-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
            <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight animate-scale-in">
                <span className="inline-block hover:scale-105 transition-transform duration-300">International Conference on</span>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient-x">Computational, Emerging Technologies</span>
                <span className="block">and Sustainability</span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent animate-pulse">(ICCETS 2026)</span>
              </h1>
              <p className="text-lg sm:text-xl mb-4 sm:mb-6 animate-slide-up" style={{animationDelay: '0.5s'}}>4 - 5 February 2026 (Hybrid Mode)</p>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 animate-slide-up" style={{animationDelay: '0.7s'}}>
                Organized by Department of Electrical & Electronics Engineering, Annamacharya University
              </p>
              <div className="animate-slide-up" style={{animationDelay: '0.9s'}}>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto group">
                  <span className="group-hover:animate-pulse">Submit (Microsoft CMT)</span>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-float">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-75"></div>
                <img 
                  src={heroImage} 
                  alt="Computational, Emerging Technologies and Sustainability" 
                  className="relative w-full max-w-md sm:max-w-lg lg:max-w-full mx-auto rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <ContentBox className="animate-fade-in hover:shadow-xl transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient-x">ICCETS 2026</h2>
            <div className="text-foreground leading-relaxed animate-slide-up hover:scale-[1.01] transition-all duration-300 p-4 rounded-lg hover:bg-muted/30">
              <h3 className="text-xl font-semibold text-primary mb-4">About the conference:</h3>
              <div className="space-y-4">
                <p className="text-lg">
                  The rapid rise of disruptive technologies across various branches of engineering is poised to reshape industries in the coming years. Increasing emphasis is being placed on exploring the latest advancements in cutting-edge technologies that have vast applications in Electrical and Electronics Engineering, Electronics and Communication Engineering and Computer Science and Engineering. Bridging the gap between academia and industry has become essential to foster innovation and drive societal development.
                </p>
                <p className="text-lg">
                  The International Conference on Computational, Emerging Technologies and Sustainability (ICCETS – 2026) is envisioned as a dynamic forum for technical exchange and research discussions cantered on innovations in engineering and technology within the broad domains of Electrical, Electronics, and Computer Science and Engineering.
                </p>
                <p className="text-lg">
                  The conference aims to bring together researchers, academicians, scientists, practitioners, and students to share and showcase their recent research outcomes. ICCETS – 2026 aspires to provide an engaging and insightful platform for interaction between experts from academia and industry, and young researchers working in diverse areas such as Power Systems, Power Electronics and Drives, Artificial Intelligence and Machine Learning, Quantum Computing and Information, Cloud Computing, Data Sciences and Cybersecurity, Robotics and Autonomous Systems, Image Processing and VLSI Design.
                </p>
              </div>
            </div>
          </ContentBox>

          <div className="mt-12 animate-fade-in">
            <ContentBox className="hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Conference Proceedings</h2>
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="animate-slide-up">
                  <p className="text-foreground text-lg hover:text-primary transition-colors duration-300">
                    All accepted and registered (presented) papers are planned to publish in the proceedings of E3S Web of Conferences.
                  </p>
                </div>
                <div className="flex items-center gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
                  <img 
                    src={e3sLogo} 
                    alt="E3S Web of Conferences" 
                    className="h-16 hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg"
                  />
                </div>
              </div>
            </ContentBox>
          </div>

          <div className="mt-12 animate-fade-in">
            <ContentBox className="hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Annamacharya University : Rajampet</h2>
              <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-start">
                <div className="flex justify-center">
                  <div className="text-center">
                    <a 
                      href="https://annamacharyauniversity.edu.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
                        <img 
                          src={clgLogo} 
                          alt="Annamacharya University Logo" 
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </a>
                    <h3 className="text-xl font-semibold">ANNAMACHARYA</h3>
                    <p className="text-sm text-muted-foreground">UNIVERSITY</p>
                  </div>
                </div>
                <div className="text-foreground leading-relaxed space-y-4">
                  <h3 className="text-xl font-semibold text-primary mb-3">About the University:</h3>
                  <p>
                    Annamacharya University, Rajampet, is a private university established under the brown field category in 2024. It is governed by the Andhra Pradesh Private Universities Act No.3 of 2016 and G.O.Ms.No.13, Higher Education (UE) Department. Primary focus is to cater to the evolving needs of both industry and society. Annmacharya University is sponsored by the Annamacharya Educational Trust, Rajampet.
                  </p>
                  <p>
                    Annamacharya University envisions becoming a Centre of Excellence by implementing new initiatives. This involves creating world-class infrastructure, expanding international collaborations, developing innovative programs, establishing industrial tie-ups, recruiting well qualified and trained faculty, promoting talent, nurturing research and innovation, and fostering outreach activities with sustainable funding.
                  </p>
                </div>
              </div>
            </ContentBox>
          </div>

          <div className="mt-12 animate-fade-in">
            <ContentBox className="hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">About EEE Department</h2>
              <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-start">
                <div className="flex justify-center">
                  <div className="text-center">
                    <a 
                      href="https://annamacharyauniversity.edu.in/courses/electrical-electronics-engineering/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
                        <img 
                          src={eeeLogo} 
                          alt="EEE Department Logo" 
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </a>
                    <h3 className="text-xl font-semibold">ELECTRICAL &</h3>
                    <p className="text-sm text-muted-foreground">ELECTRONICS ENGINEERING</p>
                  </div>
                </div>
                <div className="text-foreground leading-relaxed space-y-4">
                  <h3 className="text-xl font-semibold text-primary mb-3">About EEE Department:</h3>
                  <p>
                    The department of Electrical and Electronics Engineering started in the academic year 1998-99 as key entity of Annamacharya Institute of Technology and Sciences under the affiliation of JNTU with an intake of 40 students, and increased to 60, 120, 180, and 240 subsequently. Since then, there has been consistent development in all spheres including infrastructure facilities, staff development and student development.
                  </p>
                  <p>
                    The programmes offered by the department under the JNTU were brought under the ambit of Annamacharya University from the academic year 2024-25. The department offers B.Tech (EEE), M.Tech (EPS), Ph.D in Electrical Engineering.
                  </p>
                </div>
              </div>
            </ContentBox>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

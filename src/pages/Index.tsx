import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";
import clgLogo from "@/assets/clg_logo.jpeg";

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
              <p className="text-lg sm:text-xl mb-4 sm:mb-6 animate-slide-up" style={{animationDelay: '0.5s'}}>📅 4 - 5 February 2026 (Hybrid Mode)</p>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 animate-slide-up" style={{animationDelay: '0.7s'}}>
                🏛️ Organized by Department of Electrical & Electronics Engineering, Annamacharya University
              </p>
              <div className="animate-slide-up" style={{animationDelay: '0.9s'}}>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto group">
                  <span className="group-hover:animate-pulse">🚀 Submit (Microsoft CMT)</span>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient-x">✨ ICCETS 2026 ✨</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <div className="animate-slide-up hover:scale-[1.02] transition-all duration-300 p-4 rounded-lg hover:bg-muted/30">
                <p className="text-lg">
                  🌟 The International Conference on Computational, Emerging Technologies and Sustainability (ICCETS 2026) will bring together a diverse group of experts, researchers, and industry professionals passionate about advancing computational intelligence, emerging technologies, and sustainable solutions. This two-day hybrid conference will explore the latest developments in electrical engineering, artificial intelligence, renewable energy systems, and cutting-edge technologies.
                </p>
              </div>
              <div className="animate-slide-up hover:scale-[1.02] transition-all duration-300 p-4 rounded-lg hover:bg-muted/30" style={{animationDelay: '0.2s'}}>
                <p className="text-lg">
                  🔬 The conference will feature comprehensive discussions on computational intelligence applications in electrical engineering, including neural networks, deep learning, fuzzy logic, and evolutionary algorithms. Key focus areas include renewable energy technologies, power electronics controllers, electric and hybrid vehicles, and advanced energy storage solutions.
                </p>
              </div>
              <div className="animate-slide-up hover:scale-[1.02] transition-all duration-300 p-4 rounded-lg hover:bg-muted/30" style={{animationDelay: '0.4s'}}>
                <p className="text-lg">
                  🚀 Additionally, the conference will showcase innovations in artificial intelligence, machine learning, edge computing, IoT, quantum computing, cybersecurity, robotics, image processing, VLSI design, embedded systems, and nanotechnology. ICCETS 2026 aims to foster collaboration, spark innovation, and share knowledge to address global technological challenges and promote sustainable development.
                </p>
              </div>
            </div>
          </ContentBox>

          <div className="mt-12 animate-fade-in">
            <ContentBox className="hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">📚 Conference Proceedings</h2>
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="animate-slide-up">
                  <p className="text-foreground text-lg hover:text-primary transition-colors duration-300">
                    📖 All accepted and registered (presented) papers are planned to publish in the proceedings of E3S Web of Conferences.
                  </p>
                </div>
                <div className="flex items-center gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
                  <img 
                    src="https://www.e3s-conferences.org/images/edp-sciences-logo.svg" 
                    alt="EDP Sciences" 
                    className="h-12 hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg"
                  />
                </div>
              </div>
            </ContentBox>
          </div>

          <div className="mt-12 animate-fade-in">
            <ContentBox className="hover:shadow-xl transition-all duration-500 hover:scale-[1.01]">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">🏛️ About Annamacharya University</h2>
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
                  <p>
                    Annamacharya University is located at Thallapaka Panchayath, New Boyanapalli, Rajampet, Annamayya Dist., A.P. – 516126. The university is accredited by NAAC, Bangalore and NBA, and is also accredited by IE (I), Kolkata, ensuring high standards of education and research excellence.
                  </p>
                  <p>
                    The Department of Electrical & Electronics Engineering at Annamacharya University is committed to providing quality education and fostering research in emerging technologies. The department focuses on computational intelligence, renewable energy systems, power electronics, and sustainable technologies, preparing students to address contemporary challenges in electrical engineering.
                  </p>
                  <p>
                    With state-of-the-art facilities and experienced faculty, the university promotes innovation and research excellence, contributing significantly to technological advancement and sustainable development in the region and beyond.
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

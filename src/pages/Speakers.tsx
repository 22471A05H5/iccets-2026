import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Mail } from "lucide-react";

// Import speaker images
import kennethOkedu from "@/assets/Kenneth E. Okedu.jpg";
import krismadinata from "@/assets/Dr.  Ir. Krismadinata.jpg";
import raviSamikannu from "@/assets/new_Dr.Ravi Samikasu.jpg";

const Speakers = () => {
  const speakers = [
    {
      name: "Kenneth E. Okedu",
      title: "Professor",
      affiliation: "Melbourne Institute of Technology, Victoria, Australia",
      image: kennethOkedu
    },
    {
      name: "Dr. Ir. Krismadinata",
      title: "Professor and Rector",
      affiliation: "Universitas Negeri Padang, Indonesia",
      image: krismadinata
    },
    {
      name: "Dr. Ravi Samikannu",
      title: "Professor",
      affiliation: "Botswana International University of Science & Technology, Botswana",
      image: raviSamikannu
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <ContentBox>
            <h2 className="text-3xl font-bold mb-8">Keynote Speakers</h2>
            <p className="text-muted-foreground mb-8">
              We are honored to have distinguished speakers from academia and industry sharing their expertise.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-card">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=random&size=160`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-primary">{speaker.name}</h3>
                  <p className="text-base text-muted-foreground text-center mb-2 font-medium">{speaker.title}</p>
                  <p className="text-sm text-center text-foreground leading-relaxed">{speaker.affiliation}</p>
                </div>
              ))}
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Speakers;

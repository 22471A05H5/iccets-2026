import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Mail } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Mahajan Sagar Bhaskar",
      title: "Renewable Energy Lab",
      affiliation: "Prince Sultan University, Riyadh, Saudi Arabia",
      topic: "Conference General Co-Chair",
      email: "sagar25.mahajan@gmail.com"
    },
    {
      name: "Sanjeevikumar Padmanaban",
      title: "Professor",
      affiliation: "University of South-Eastern Norway, Porsgrunn, Norway",
      topic: "Conference General Co-Chair",
      email: "sanjeevi_12@yahoo.co.in"
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {speakers.map((speaker, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center animate-scale-in">
                    <span className="text-4xl text-primary font-bold">
                      {speaker.name.split(' ')[1] ? speaker.name.split(' ')[1][0] : speaker.name[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-1">{speaker.title}</p>
                  <p className="text-sm font-medium text-primary text-center mb-3">{speaker.affiliation}</p>
                  <p className="text-sm text-center italic mb-3">"{speaker.topic}"</p>
                  {speaker.email && (
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${speaker.email}`} className="hover:text-primary transition-colors">
                        {speaker.email}
                      </a>
                    </div>
                  )}
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

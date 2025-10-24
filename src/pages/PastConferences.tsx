import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, BookOpen, Award } from "lucide-react";
import e3sLogo from "@/assets/E3s logo.png";

const PastConferences = () => {
  const conferences = [
    {
      year: "2019",
      title: "CISC 2019",
      fullTitle: "2nd International Conference on Cognitive Informatics & Soft Computing",
      description: "The 2nd International Conference on Cognitive Informatics & Soft Computing (CISC-2019) was held on April 9-10, 2019. The conference focused on cognitive informatics and soft computing technologies.",
      link: "https://www.aconf.org/conf_166017.2nd_International_Conference_on_Cognitive_Informatics_&_Soft_Computing.html",
      publisher: "Academic Conference Organization",
      indexed: "Conference Proceedings",
      gradient: "from-blue-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <ContentBox>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Past Conferences</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Explore related conferences and publication platforms. ICCETS 2026 proceedings will be published in E3S Web of Conferences, 
                an Open Access publication series dedicated to archiving conference proceedings in Environment, Energy and Earth Sciences.
              </p>
            </div>

            <div className="grid gap-8">
              {conferences.map((conf, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] overflow-hidden border-0 shadow-lg">
                  <div className={`h-2 bg-gradient-to-r ${conf.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${conf.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                          {conf.year}
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {conf.title}
                          </CardTitle>
                          <p className="text-lg text-muted-foreground mt-1">{conf.fullTitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{conf.year}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
                      {conf.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">Publisher</p>
                          <p className="text-sm text-muted-foreground">{conf.publisher}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <Award className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">Indexed</p>
                          <p className="text-sm text-muted-foreground">{conf.indexed}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center p-4 bg-muted/30 rounded-lg">
                      <img 
                        src={e3sLogo} 
                        alt="E3S Web of Conferences" 
                        className="h-12 hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <Button 
                        className="w-full group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => window.open(conf.link, '_blank')}
                      >
                        <span>Access Conference Details</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

            </div>

          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PastConferences;

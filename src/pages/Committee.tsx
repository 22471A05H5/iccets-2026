import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentBox from "@/components/ContentBox";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";

// Chief Patrons
import chiefPatronGangiReddy from "@/assets/Chief_Patrons_ Dr. C. Gangi Reddy, Chancellor, Annamacharya University.jpg";
import chiefPatronAbhishekReddy from "@/assets/chief_patron_Sri. C. Abhishek Reddy, Pro-chancellors, Annamacharya University.jpg";

// Patrons
import patronSaiBabaReddy from "@/assets/Patron_Dr. E. Sai Baba Reddy, Vice-Chancellor, Annamacharya University  .jpg";
import patronMallikarjunaRao from "@/assets/patron_Dr. N. Mallikarjuna Rao, Registrar, Annamacharya University.jpg";

// General Chair
import generalChairNarayana from "@/assets/General_Chair_Dr. S. M. V. Narayana, Dean, School of Engineering.jpg";

// Chair-person
import chairPersonChennaiah from "@/assets/Chair-person_ Dr. P.B. Chennaiah, Head & Associate Professor, EEE.jpg";

// Organizing Secretary
import organizingSecretaryPadmaLalitha from "@/assets/Organizing_Secretary_Dr. M. Padma Lalitha, Professor, EEE.jpg";

// Conveners
import convenerHemakesavulu from "@/assets/Conveners_Dr. O. Hemakesavulu, Professor, EEE.jpg";
import convenerSuresh from "@/assets/convenor_Dr. S. Suresh, Associate Professor, EEE.jpg";

// Coordinators
import coordinatorBhaskaraPrasad from "@/assets/Coordinators_Dr.P.Bhaskara Prasad, Assistant Professor, EEE.jpg";
import coordinatorSarada from "@/assets/coordinator_Dr. S. Sarada, Assistant Professor, EEE.jpg";

// Advisory Committee
import advisorySubbaramiReddy from "@/assets/advisory_committe_Dr. A. Subbarami Reddy, Dean, Academics, Annamacharya University.jpg";
import advisorySivaramiReddy from "@/assets/advisory_committe_Dr. N. Sivarami Reddy, Dean, R&D, Annamacharya University.jpg";
import advisoryKrishnaMohanRaju from "@/assets/advisoy_commmitte_Dr. D. Krishna Mohan Raju, Dean, Innovation and Incubation, Annamacharya University.jpg";
import advisoryJayaramiReddy from "@/assets/advisory_committe_Dr. B. Jayarami Reddy, Dy. Director Admissions, Annamacharya University.jpg";
import advisoryGowthami from "@/assets/advisory_committe_Dr. N. R. Gowthami, Assistant Professor & HOD Civil Engineering.jpg";
import advisorySureshBabu from "@/assets/advisory_committe_Dr. G. Suresh Babu, Assistant Professor & HOD Mechanical Engineering.jpg";
import advisoryChinnababu from "@/assets/advisory_committe_Dr.J. Chinna Babu, Associate professor & HOD ECE.jpg";
import advisoryPhanindraKumar from "@/assets/advisory_committe_Dr. P Phanindra Kumar Reddy, Associate professor & HOD, AIDS.jpg";
import advisoryPenchalaiah from "@/assets/advisory_committe_Dr.N. Penchalaiah, Associate professor & HOD, AIML.jpg";
import advisoryObulapathi from "@/assets/advisory_committe_Dr.L.Obulapathi, Associate professor & HOD, H&S.jpg";
import advisoryNavaneetha from "@/assets/advisory_committe_Dr T Navaneetha, Assistant Professor & HOD, MBA.jpg";
import advisoryMadanaKumar from "@/assets/advisory_committe_Dr. C. Madana Kumar Reddy, Associate Professor & HOD.jpg";

interface CommitteeMember {
  name: string;
  designation: string;
  affiliation: string;
  image: string;
}

const Committee = () => {
  const chiefPatrons: CommitteeMember[] = [
    {
      name: "Dr. C. Gangi Reddy",
      designation: "Chancellor",
      affiliation: "Annamacharya University",
      image: chiefPatronGangiReddy
    },
    {
      name: "Sri. C. Abhishek Reddy",
      designation: "Pro-Chancellor",
      affiliation: "Annamacharya University",
      image: chiefPatronAbhishekReddy
    }
  ];

  const patrons: CommitteeMember[] = [
    {
      name: "Dr. E. Sai Baba Reddy",
      designation: "Vice-Chancellor",
      affiliation: "Annamacharya University",
      image: patronSaiBabaReddy
    },
    {
      name: "Dr. N. Mallikarjuna Rao",
      designation: "Registrar",
      affiliation: "Annamacharya University",
      image: patronMallikarjunaRao
    }
  ];

  const generalChairs: CommitteeMember[] = [
    {
      name: "Dr. S. M. V. Narayana",
      designation: "Dean, School of Engineering",
      affiliation: "Annamacharya University",
      image: generalChairNarayana
    }
  ];

  const chairPersons: CommitteeMember[] = [
    {
      name: "Dr. P.B. Chennaiah",
      designation: "Head & Associate Professor",
      affiliation: "Department of EEE, Annamacharya University",
      image: chairPersonChennaiah
    }
  ];

  const organizingSecretaries: CommitteeMember[] = [
    {
      name: "Dr. M. Padma Lalitha",
      designation: "Professor",
      affiliation: "Department of EEE, Annamacharya University",
      image: organizingSecretaryPadmaLalitha
    }
  ];

  const conveners: CommitteeMember[] = [
    {
      name: "Dr. O. Hemakesavulu",
      designation: "Professor",
      affiliation: "Department of EEE, Annamacharya University",
      image: convenerHemakesavulu
    },
    {
      name: "Dr. S. Suresh",
      designation: "Associate Professor",
      affiliation: "Department of EEE, Annamacharya University",
      image: convenerSuresh
    }
  ];

  const coordinators: CommitteeMember[] = [
    {
      name: "Dr. P. Bhaskara Prasad",
      designation: "Assistant Professor",
      affiliation: "Department of EEE, Annamacharya University",
      image: coordinatorBhaskaraPrasad
    },
    {
      name: "Dr. S. Sarada",
      designation: "Assistant Professor",
      affiliation: "Department of EEE, Annamacharya University",
      image: coordinatorSarada
    }
  ];

  const advisoryCommittee: CommitteeMember[] = [
    {
      name: "Dr. A. Subbarami Reddy",
      designation: "Dean, Academics",
      affiliation: "Annamacharya University",
      image: advisorySubbaramiReddy
    },
    {
      name: "Dr. N. Sivarami Reddy",
      designation: "Dean, R&D",
      affiliation: "Annamacharya University",
      image: advisorySivaramiReddy
    },
    {
      name: "Dr. D. Krishna Mohan Raju",
      designation: "Dean, Innovation and Incubation",
      affiliation: "Annamacharya University",
      image: advisoryKrishnaMohanRaju
    },
    {
      name: "Dr. B. Jayarami Reddy",
      designation: "Dy. Director Admissions",
      affiliation: "Annamacharya University",
      image: advisoryJayaramiReddy
    },
    {
      name: "Dr. N. R. Gowthami",
      designation: "Assistant Professor & HOD Civil Engineering",
      affiliation: "Annamacharya University",
      image: advisoryGowthami
    },
    {
      name: "Dr. G. Suresh Babu",
      designation: "Assistant Professor & HOD Mechanical Engineering",
      affiliation: "Annamacharya University",
      image: advisorySureshBabu
    },
    {
      name: "Dr. J. Chinna Babu",
      designation: "Associate Professor & HOD ECE",
      affiliation: "Annamacharya University",
      image: advisoryChinnababu
    },
    {
      name: "Dr. P. Phanindra Kumar Reddy",
      designation: "Associate Professor & HOD, AIDS",
      affiliation: "Annamacharya University",
      image: advisoryPhanindraKumar
    },
    {
      name: "Dr. N. Penchalaiah",
      designation: "Associate Professor & HOD, AIML",
      affiliation: "Annamacharya University",
      image: advisoryPenchalaiah
    },
    {
      name: "Dr. L. Obulapathi",
      designation: "Associate Professor & HOD, H&S",
      affiliation: "Annamacharya University",
      image: advisoryObulapathi
    },
    {
      name: "Dr. T. Navaneetha",
      designation: "Assistant Professor & HOD, MBA",
      affiliation: "Annamacharya University",
      image: advisoryNavaneetha
    },
    {
      name: "Dr. C. Madana Kumar Reddy",
      designation: "Associate Professor & HOD",
      affiliation: "Annamacharya University",
      image: advisoryMadanaKumar
    }
  ];


  const CommitteeCard = ({ member }: { member: CommitteeMember }) => (
    <Card className="group hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 bg-card border border-blue-100 dark:border-blue-800/30 shadow-md shadow-blue-500/10">
      <CardContent className="p-6 text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 flex items-center justify-center ring-2 ring-blue-200 dark:ring-blue-700/50 group-hover:ring-blue-400 dark:group-hover:ring-blue-500 transition-all duration-300">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const initials = member.name.split(' ').map(n => n[0]).join('');
                parent.innerHTML = `<span class="text-2xl font-bold text-blue-600 dark:text-blue-400">${initials}</span>`;
              }
            }}
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">{member.name}</h3>
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">{member.designation}</p>
        <p className="text-xs text-muted-foreground">{member.affiliation}</p>
      </CardContent>
    </Card>
  );

  const CommitteeSection = ({ title, members }: { title: string; members: CommitteeMember[] }) => (
    <div className="mb-8 sm:mb-12">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary border-b-2 border-primary/20 pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {members.map((member, index) => (
          <CommitteeCard key={index} member={member} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <PageBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <ContentBox>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">ICCETS 2026 Committee</h2>
            
            <div className="space-y-8">
              <CommitteeSection title="Chief Patron" members={chiefPatrons} />
              <CommitteeSection title="Patron" members={patrons} />
              <CommitteeSection title="General Chair" members={generalChairs} />
              <CommitteeSection title="Chair-person" members={chairPersons} />
              <CommitteeSection title="Organizing Secretary" members={organizingSecretaries} />
              <CommitteeSection title="Conveners" members={conveners} />
              <CommitteeSection title="Coordinators" members={coordinators} />
              <CommitteeSection title="Advisory Committee" members={advisoryCommittee} />
            </div>
          </ContentBox>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Committee;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Judges = () => {
  const judges = [
  {
  name: "Mayank Siotia",
  affiliation: "Associate Director , Grey Orange",
  location: "USA",
  image: "/lovable-uploads/Mayank.jpeg",
  expertise: "AI, Robotics, Microservices",
  linkedin: "https://www.linkedin.com/in/mayanksiotia/"
},
{
    name: "Parameswara Reddy Nangi",
    affiliation: "Sr Hadoop Engineer, Independent Contributor",
    location: "USA",
    image: "/lovable-uploads/Reddy.jpeg", // replace with actual uploaded file path
    expertise: "AI, LLMs, Cyber Security",
    linkedin: "https://www.linkedin.com/in/paramesh-n-97648819/",
    email: "iamparameshn@gmail.com"
  },
  {
    name: "Sireesha Devalla",
    affiliation: "Senior Software Engineer & Independent Researcher, United Services Automobile Association (USAA)",
    location: "USA",
    image: "/lovable-uploads/Sireesha.jpeg", 
    expertise: "Cloud-Native Systems, Microservices Architecture, Applied AI",
    linkedin: "https://www.linkedin.com/in/sireesha-devalla-90b0998b",
    email: "Sireesha.Devalla@gmail.com"
},
  {
    name: "Geetha Krishna Sangam",
    affiliation: "IT Analyst, Tata Consultancy Services",
    location: "USA",
    image: "/lovable-uploads/Krishna.jpeg",
    expertise: "CRM in Finance, AI CRM Modernization, Hyperforce",
    linkedin: "https://www.linkedin.com/in/g-krishna-sangam-5778b058",
    email: "sgkrishna1707@gmail.com"
  },
  {
    name: "Jayant Bhat",
    affiliation: "Director of Enterprise Solutions, AI and Innovation, Sparient Inc.",
    location: "USA",
    image: "/lovable-uploads/Jayant.jpeg",
    expertise: "ERP, AI, Cloud",
    linkedin: "https://linkedin.com/in/jayantb",
    email: "jayanthvb@gmail.com"
  },
  {
    name: "Harshit Kohli",
    affiliation: "Sr Technical Account Manager, Amazon Web Services",
    location: "USA",
    image: "/lovable-uploads/Harshit.jpeg",
    expertise: "Generative AI, Data Analytics, Streaming",
    linkedin: "https://www.linkedin.com/in/harshit-kohli-99801543",
    email: "kohli6@gmail.com"
  },
  {
    name: "Yashovardhan Jayaram",
    affiliation: "Director of Enterprise Content and Digital Experience, Sparient Inc.",
    location: "USA",
    image: "/lovable-uploads/Jayaram.jpeg",
    expertise: "Enterprise Content, Web Content, AI",
    linkedin: "https://www.linkedin.com/in/yashovardhan-yash-jayaram-ba1156a/",
    email: "yashovardhan.j@gmail.com"
  },
  {
    name: "Dilliraja Sundar",
    affiliation: "Director of Data, Analytics, AI and Cloud Engineering, Sparient Inc.",
    location: "USA",
    image: "/lovable-uploads/Sundar.jpeg",
    expertise: "Data, AI, Cloud",
    linkedin: "https://linkedin.com/in/dillirajasundar",
    email: "dilliraja86@gmail.com"
  },
  {
    name: "Bhargava Varma Konduru",
    affiliation: "Sr. Product Manager, Analytics, Amazon",
    location: "USA",
    image: "/lovable-uploads/Bhargava.jpeg", 
    expertise: "Retail & E-commerce Analytics, GenAI, Product Growth",
    linkedin: "https://www.linkedin.com/in/bhargavakonduru/",
    email: "kbhargavvarma@gmail.com"
  },
    {
    name: "Mr. Ishu Anand Jaiswal",
    affiliation: "Engineering Leader, Intuit",
    location: "USA",
    image: "/lovable-uploads/Ishu.jpeg",
    expertise: "Architecting & scaling AI-driven enterprise systems",
    linkedin: "",
    email: "ishuanand.jaiswal@gmail.com"
    },
    {
    name: "Mr. SVNN Mahesh Duriseati",
    affiliation: "Principal Engineer, T-Mobile USA",
    location: "USA",
    image: "/lovable-uploads/Mahesh.jpeg",
    expertise: "Software Development & Communications and AI",
    linkedin: "https://www.linkedin.com/in/mahesh-duriseati-14a3428/",
    email: "maheshsvnn@gmail.com"
},
{
    name: "Mr. Aneesh Varghese",
    affiliation: "Sr Technical Account Manager, Amazon Web Services",
    location: "USA",
    image: "/lovable-uploads/Aneesh.jpeg",
    expertise: "Generative AI, Cloud Engineering, ML",
    linkedin: "https://www.linkedin.com/in/aneeshv84/",
    email: "aneeshv84@gmail.com"
},
{
    name: "Mr. Kamalakar Reddy Ponaka",
    affiliation: "Director of Software Engineering, Dell Technologies",
    location: "USA",
    image: "/lovable-uploads/Kamalakar.jpeg",
    expertise: "Application and AI/ML Security",
    linkedin: "https://www.linkedin.com/in/kamalponaka/",
    email: "kamalakar.ponaka@gmail.com"
},
{
    name: "Mr. Sai Teja Kotagiri",
    affiliation: "Network Security Analyst, Caliber Tech LLC",
    location: "USA",
    image: "/lovable-uploads/Sai.jpeg",
    expertise: "Cybersecurity – Vulnerability Mgmt, WAF & SOC Ops",
    linkedin: "https://www.linkedin.com/in/teja-k-5654a7334/",
    email: "saikotagiri.05@gmail.com"
},
{
    name: "Mr. Vikas Reddy Mandadhi",
    affiliation: "Lead Software Engineering, Mastercard International",
    location: "USA",
    image: "/lovable-uploads/Vikas.jpeg",
    expertise: "AI ML Blockchain in Finance",
    linkedin: "",
    email: "Vikasreddy157548@gmail.com"
},
{
  name: "Jeganraja Rajamani",
  affiliation: "Senior Data Engineer, Amazon",
  location: "USA",
  image: "/lovable-uploads/Jeganraja.jpeg",
  expertise: "Legal Tech, Data Engineering, Gen BI",
  linkedin: "https://www.linkedin.com/in/jegan-r-437228b/",
  email: "jeganraja.r@gmail.com"
},
{
  name: "Ashraf Syed",
  affiliation: "Technical Lead, Virginia Department of Health",
  location: "USA",
  image: "/lovable-uploads/Ashraf.jpeg",
  expertise: "Generative AI, Agentic AI, Healthcare Apps",
  linkedin: "https://www.linkedin.com/in/ashrafapexing",
  email: "maverick.ashraf@gmail.com"
},
{
  name: "Manoj Pal",
  affiliation: "Senior Data Engineer, Artnet Worldwide Corporation",
  location: "Tampa, FL, USA",
  image: "/lovable-uploads/manoj.jpeg",
  expertise: "Data Engineering, Data Analytics, Artificial Intelligence, GenAI, LLM",
  linkedin: "https://www.linkedin.com/in/manoj7pal",
  email: "manoj7pal@gmail.com",
},
{
  name: "Soumya Remella",
  affiliation: "Senior Technical Program Manager, Microsoft",
  location: "USA",
  image: "/lovable-uploads/soumya.jpeg",
  expertise: "Supply Chain Management, Azure Cloud, Program & Project Management",
  linkedin: "https://www.linkedin.com/in/soumya-remella/",
  email: "rsoumya07@gmail.com",
},
{
  name: "Sreedhar Pamidiparthi",
  affiliation: "FVP, Director of Technical Architecture, WaFd Bank",
  location: "Redmond, WA, USA",
  image: "/lovable-uploads/sreedhar.jpeg",
  expertise: "FinTech, Cyber Security",
  linkedin: "https://www.linkedin.com/in/spamidiparthi/",
  email: "sreedhar.pamidiparthi@gmail.com",
},
{
  name: "Mihir Dhakan",
  affiliation: "Manager of Data Engineering, Upshop",
  location: "USA",
  image: "/lovable-uploads/mihir.jpeg",
  expertise: "Enterprise Data Solutions",
  linkedin: "https://www.linkedin.com/in/mihirdhakan/",
  email: "mihirdhakan.ir@gmail.com",
},
{
  name: "Kalpesh Rathod",
  affiliation: "Director of Engineering, Lecorpio LLC (An Anaqua Company)",
  location: "USA",
  image: "/lovable-uploads/kalpesh.jpeg",
  expertise: "Cloud-native SaaS, AI",
  linkedin: "https://linkedin.com/in/kalpesh-rathod-6675b113/",
  email: "kmrathod242@gmail.com",
},
{
  name: "Srinivasa M Kona",
  affiliation: "Sr Technical Lead, Cisco Systems Inc.",
  location: "USA",
  image: "/lovable-uploads/srinivasa.jpeg",
  expertise: "Data Center, Computer Networks, Telecom",
  linkedin: "https://www.linkedin.com/in/srinivasa-kona-7a5280a/",
  email: "srinivasa.kona@outlook.com"
},
{
  name: "Balaramakrishna Alti",
  affiliation: "AVP Systems Engineering, Moody’s",
  location: "USA",
  image: "/lovable-uploads/balaram.jpeg",
  expertise: "Linux Automation, AWS Cloud, Cybersecurity",
  linkedin: "https://www.linkedin.com/in/balaramakrishna-alti-b9924b278",
  email: "altibalaram@gmail.com"
},


  ];
  return (
    <section id="judges" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Judges Panel
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished panel of expert judges who will evaluate submissions based on innovation, 
            environmental impact, technical excellence and scalability. Our judges bring decades of experience 
            in technology, AI and sustainability.
          </p>
        </div>

        {/* Judges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => {
            const JudgeCard = (
              <Card 
                key={index} 
                className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Judge Photo */}
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={judge.image} 
                      alt={`${judge.name} - Hackathon Judge`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Judge Info */}
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {judge.expertise}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-earth-green transition-colors duration-300">
                      {judge.name}
                    </h3>
                    <p className="text-sm font-medium text-earth-green mb-1">
                      {judge.affiliation}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {judge.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );

            return judge.linkedin ? (
              <a 
                key={index}
                href={judge.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                {JudgeCard}
              </a>
            ) : (
              JudgeCard
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Present to the Experts?
            </h3>
            <p className="text-muted-foreground mb-6">
              Showcase your AI-powered environmental solutions to our distinguished panel of judges 
              and compete for the $2,000 prize pool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;
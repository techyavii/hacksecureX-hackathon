import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain,
  Building,
  Globe,
  MapPin,
  Recycle,
  Zap
} from "lucide-react";

const Themes = () => {
  const themes = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI in Cyber Threat Detection & Prevention",
      color: "from-blue-500 to-cyan-600",
      // badge: "$100 Prize",
      solutions: [
        "Build proactive AI-powered defense systems",
        "Develop intelligent phishing and ransomware detection",
        "Create real-time threat analysis and response systems",
        "Implement machine learning for anomaly detection",
        "Design predictive cybersecurity frameworks",
        "Automate security incident response and mitigation",
        "AI/ML for vehicle and electric mobility",
        "AI for vehicle cybersecurity"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Data Privacy & Responsible AI Frameworks",
      color: "from-yellow-500 to-orange-600",
      // badge: "$100 Prize",
      solutions: [
        "Design privacy-preserving AI algorithms",
        "Create automated GDPR/CCPA compliance tools",
        "Develop data protection impact assessment systems",
        "Build transparency and explainability frameworks",
        "Implement privacy-by-design principles in AI",
        "Create automated data rights management systems"
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Digital Forensics & Legal Evidence Automation",
      color: "from-purple-500 to-pink-600",
      // badge: "$100 Prize",
      solutions: [
        "Build AI-driven evidence collection tools",
        "Create blockchain-based chain-of-custody systems",
        "Develop automated forensic analysis platforms",
        "Design legal-tech workflow automation",
        "Implement tamper-proof digital evidence systems",
        "Create ML-powered document analysis tools"
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "RegTech - AI for Cyber-Law Compliance",
      color: "from-indigo-500 to-purple-600",
      // badge: "$100 Prize",
      solutions: [
        "Develop automated regulatory compliance monitoring",
        "Create AI-powered legal document analysis",
        "Build real-time compliance reporting systems",
        "Design regulatory risk assessment tools",
        "Implement smart contract compliance verification",
        "Create automated policy enforcement systems"
      ]
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "AI for Cybercrime Investigation",
      color: "from-green-500 to-emerald-600",
      // badge: "$100 Prize",
      solutions: [
        "Build AI tools for cybercrime pattern analysis",
        "Create predictive crime modeling systems",
        "Develop automated threat intelligence platforms",
        "Design ML-powered investigation assistants",
        "Implement dark web monitoring tools",
        "Create automated incident reconstruction systems"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Emerging Tech for Digital Trust",
      color: "from-green-600 to-lime-600",
      // badge: "$100 Prize",
      solutions: [
        "Explore blockchain for digital identity and trust",
        "Implement quantum-safe cryptography solutions",
        "Develop edge-AI security mechanisms",
        "Create secure communication protocols",
        "Build zero-trust architecture frameworks",
        "Design next-gen authentication systems"
      ]
    }
  ];

  return (
    <section id="themes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hackathon Themes
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your path. Drive innovation. Make impact. Select a theme that resonates with your expertise and help create solutions for critical cybersecurity and legal technology challenges.
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {themes.map((theme, index) => (
            <Card 
              key={index}
              className="group hover:shadow-earth transition-all duration-300 border-0 shadow-card overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${theme.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {theme.icon}
                  </div>
                  <Badge variant="secondary" className="bg-earth-green/10 text-earth-green font-medium">
                    {theme.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {theme.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {theme.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-earth-teal rounded-full mt-2 flex-shrink-0"></div>
                      {solution}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-earth p-8 md:p-12 rounded-3xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-earth-green" />
            <span className="text-xl font-semibold text-foreground">
              Ready to Code, Comply, and Conquer?
            </span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether your expertise lies in AI development, cybersecurity, or legal technology, 
            your innovative solutions can help shape the future of digital security and compliance.
          </p>
          <Button variant="earth" size="lg" className="min-w-48">
            Choose Your Theme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Themes;
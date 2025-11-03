import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  Target, 
  Shield, 
  Mail,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Eligibility = () => {
  const eligibleParticipants = [
    {
      title: "University Students",
      description: "Open to students from computer science, law, cybersecurity, and related fields from international universities.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "AI & Cybersecurity Professionals", 
      description: "Professionals working in artificial intelligence, cybersecurity, and digital forensics.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Legal Tech Experts",
      description: "Legal professionals, policy experts, and compliance specialists with interest in technology.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Startups & Innovators",
      description: "Entrepreneurs and innovators focused on cybersecurity, AI ethics, and legal technology solutions.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const teamRequirements = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Size",
      detail: "2 to 4 members per team (individual registration also allowed)"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Interdisciplinary Teams",
      detail: "Highly encouraged - blend expertise in AI development, cybersecurity, legal technology, and policy"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Team Leader",
      detail: "Each team must designate a leader responsible for registration and communication"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Technical Proficiency",
      detail: "At least one member with strong programming skills in AI/ML, and familiarity with cybersecurity concepts"
    }
  ];

  const projectRequirements = [
    "Solutions must be original and innovative, focusing on AI-driven approaches to cybersecurity and legal tech challenges",
    "Address at least one of the designated HackSecureX International Hackathon 2026 theme areas",
    "Demonstrate practical feasibility, scalability, and compliance with relevant regulations",
    "Incorporate AI/ML as a core component while ensuring ethical considerations",
    "Consider global cyber governance and cross-border applicability of solutions"
  ];

  const participationRules = [
    "Strict adherence to ethical AI principles and data privacy regulations",
    "All Intellectual Property rights remain with the team (organizers retain non-exclusive promotional rights)",
    "No use of pre-existing solutions or previously developed projects",
    "Compliance with cybersecurity best practices during development",
    "Any ethical violations or misconduct will result in immediate disqualification"
  ];

  return (
    <section id="eligibility" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Eligibility Criteria
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the HackSecureX community! Check if you meet our criteria and get ready to shape 
            the future of cybersecurity and digital law.
          </p>
        </div>

        {/* Who Can Participate */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Who Can Participate
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {eligibleParticipants.map((participant, index) => (
              <Card 
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {participant.icon}
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {participant.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {participant.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Formation */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Team Formation
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {teamRequirements.map((req, index) => (
              <Card 
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-earth-teal/10 rounded-lg flex items-center justify-center text-earth-teal flex-shrink-0">
                      {req.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {req.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {req.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Special Note */}
          <div className="mt-6 bg-earth-lime/10 border border-earth-lime/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-earth-lime flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-1">Diversity Encouraged</h4>
                <p className="text-sm text-muted-foreground">
                  Inclusion of at least one female participant per team is encouraged and preferred.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Project Requirements */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Target className="w-6 h-6 text-earth-green" />
                Project Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {projectRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-earth-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Participation Rules */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Shield className="w-6 h-6 text-earth-teal" />
                Participation Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {participationRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-earth-teal flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Questions About Eligibility?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our organizing team is here to help clarify any requirements or questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="earth" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Team
            </Button>
            <Link to="mailto:ai@hacksecurex.com">
              <Button variant="secondary" className="text-sm">
                ai@hacksecurex.com
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
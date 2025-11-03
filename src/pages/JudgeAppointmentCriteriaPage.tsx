import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Microscope, Rocket, Mail } from "lucide-react";

const JudgeAppointmentCriteriaPage = () => {
  const expertiseDomains = [
    {
      icon: Brain,
      title: "Neural Architecture Optimization",
      description: "Leading researchers in neural architecture search, model compression and quantization techniques. Experts who have revolutionized how we build efficient neural networks that deliver maximum performance with minimal computational overhead."
    },
    {
      icon: Zap,
      title: "Edge AI & Inference Systems",
      description: "Pioneers in deploying AI models on resource-constrained environments. Specialists in real-time inference optimization, mobile AI frameworks and IoT machine learning with proven track records in production deployments."
    },
    {
      icon: Microscope,
      title: "ML Research & Academia",
      description: "Distinguished professors and researchers from top-tier institutions with extensive publications in efficient machine learning, federated learning and sustainable AI practices. Leaders in advancing the theoretical foundations of AI optimization."
    },
    {
      icon: Rocket,
      title: "AI Infrastructure & Scaling",
      description: "Industry veterans who have built and scaled AI systems serving millions of users. Experts in distributed computing, model serving architectures and the practical challenges of deploying efficient AI at enterprise scale."
    }
  ];

  const selectionCriteria = [
    {
      number: "01",
      title: "Technical Mastery",
      points: [
        "Proven expertise in AI model optimization and efficiency techniques",
        "Deep understanding of neural network architectures and compression methods",
        "Hands-on experience with edge computing and resource-constrained deployment"
      ]
    },
    {
      number: "02",
      title: "Research Excellence",
      points: [
        "Distinguished track record in top-tier AI conferences and journals",
        "Leadership roles in cutting-edge AI research or industry innovation",
        "Recognition as a thought leader in efficient machine learning"
      ]
    },
    {
      number: "03",
      title: "Innovation Assessment",
      points: [
        "Exceptional ability to evaluate novel AI optimization approaches",
        "Experience in assessing both technical feasibility and market impact",
        "Track record of identifying breakthrough technologies early"
      ]
    },
    {
      number: "04",
      title: "Ethical Standards",
      points: [
        "Demonstrated commitment to unbiased, fair evaluation practices",
        "No conflicts of interest with participating teams or organizations",
        "Strong ethical foundation in AI development and deployment"
      ]
    },
    {
      number: "05",
      title: "Mentorship Excellence",
      points: [
        "Proven ability to provide constructive, actionable feedback",
        "Commitment to nurturing the next generation of AI innovators",
        "Experience in guiding technical teams toward breakthrough solutions"
      ]
    }
  ];

  const appointmentProcess = [
    {
      number: "01",
      title: "Expert Identification",
      description: "We identify and invite recognized leaders in AI optimization from top research institutions, leading tech companies and innovative startups pushing the boundaries of efficient AI."
    },
    {
      number: "02",
      title: "Expertise Validation",
      description: "Comprehensive review of candidates' technical contributions, research impact and industry leadership to ensure they possess the depth of knowledge required for fair evaluation."
    },
    {
      number: "03",
      title: "Diversity & Balance",
      description: "We carefully balance our panel across different AI optimization domains, ensuring representation from academia, industry and startup ecosystems for comprehensive evaluation perspectives."
    },
    {
      number: "04",
      title: "Final Calibration",
      description: "Selected judges participate in calibration sessions to align on evaluation criteria, ethical guidelines and our vision for advancing the state of efficient AI systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <nav className="text-sm mb-6 opacity-90">
                <span>Home</span>
                <span className="mx-2">&gt;</span>
                <span>Judge Appointment Criteria</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Judge Appointment Criteria
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                At HACKSECUREX International Hackathon, we ensure a rigorous evaluation process by assembling a distinguished panel of AI optimization experts, environmental innovation pioneers and sustainable technology researchers.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our hackathon on January 16-17, 2026 represents the cutting edge of environmental AI research and development. We've meticulously curated a judging panel comprising world-class experts in sustainable technology, environmental data science, other technologies and green innovation architectures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each judge brings decades of experience in evaluating breakthrough solutions that push the boundaries of environmental sustainability while maintaining peak technological performance. They understand the nuanced challenges of deploying AI for environmental impact at scale with minimal resources.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Domains
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Expertise Domains
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our judges represent the forefront of environmental AI across multiple specialized domains
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {expertiseDomains.map((domain, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <domain.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {domain.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {domain.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Selection Criteria */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Selection Criteria
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our rigorous standards ensure only the most qualified experts evaluate your innovations
              </p>
            </div>

            <div className="space-y-8">
              {selectionCriteria.map((criteria, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <Badge variant="secondary" className="text-2xl font-bold px-4 py-2">
                        {criteria.number}
                      </Badge>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {criteria.title}
                        </h3>
                        <ul className="space-y-2">
                          {criteria.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-earth-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Process */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Judge Appointment Process
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our systematic approach ensures we assemble the most qualified evaluation panel
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {appointmentProcess.map((step, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <Badge variant="outline" className="text-xl font-bold px-3 py-1 border-earth-green text-earth-green">
                        {step.number}
                      </Badge>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Judge Reveal */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Card className="bg-gradient-hero text-white border-0 shadow-earth max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Judge Reveal
                  </h2>
                  {/* <p className="text-xl mb-4 font-semibold">
                    October 24-25, 2025
                  </p> */}
                  <p className="text-lg opacity-90 leading-relaxed mb-8">
                    Our distinguished panel of environmental AI experts will be unveiled in July 2025. These industry leaders and researchers will bring unparalleled expertise to evaluate your innovative solutions. Follow our channels for the exciting reveal of these technical visionaries.
                  </p>
                  
                  <div className="border-t border-white/20 pt-8">
                    <h3 className="text-xl font-bold mb-4">
                      Judge Nominations & Technical Inquiries
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <a 
                        href="mailto:ai@hacksecurex.com" 
                        className="text-lg hover:underline"
                      >
                        ai@hacksecurex.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JudgeAppointmentCriteriaPage;
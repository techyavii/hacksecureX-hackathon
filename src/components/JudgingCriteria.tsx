import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Cog, TrendingUp, Presentation, Users } from "lucide-react";

const JudgingCriteria = () => {
  const criteria = [
    {
      title: "Technical Innovation & AI Excellence",
      percentage: "25%",
      icon: <Award className="w-6 h-6" />,
      description: "Evaluates the originality and technical sophistication of the AI-driven solution in addressing cybersecurity and legal technology challenges.",
      points: [
        "Innovative application of AI in cybersecurity or legal tech contexts",
        "Technical sophistication and robustness of implementation",
        "Advanced use of AI/ML algorithms and security frameworks",
        "Integration of cutting-edge technologies and best practices"
      ]
    },
    {
      title: "Security & Compliance Impact",
      percentage: "25%",
      icon: <Target className="w-6 h-6" />,
      description: "Assesses the solution's effectiveness in enhancing cybersecurity and ensuring regulatory compliance.",
      points: [
        "Strength of security measures and threat mitigation",
        "Compliance with relevant legal and regulatory frameworks",
        "Privacy protection and data governance measures",
        "Real-world applicability and risk reduction potential"
      ]
    },
    {
      title: "Legal & Ethical Considerations",
      percentage: "20%",
      icon: <Cog className="w-6 h-6" />,
      description: "Evaluates how well the solution addresses legal requirements and ethical considerations in AI and cybersecurity.",
      points: [
        "Alignment with legal frameworks and standards",
        "Ethical AI implementation and transparency",
        "Privacy-by-design principles and data protection",
        "Clear documentation of legal compliance measures"
      ]
    },
    {
      title: "Scalability & Market Viability",
      percentage: "15%",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Examines the solution's potential for widespread adoption and commercial success.",
      points: [
        "Cross-border applicability and adaptability",
        "Business model viability and market potential",
        "Scalability across different jurisdictions",
        "Integration capability with existing systems"
      ]
    },
    {
      title: "Technical Presentation",
      percentage: "10%",
      icon: <Presentation className="w-6 h-6" />,
      description: "Evaluates the team's ability to effectively demonstrate their solution and explain its technical and legal aspects.",
      points: [
        "Clear demonstration of AI and security features",
        "Professional presentation of technical architecture",
        "Effective communication of legal compliance",
        "Comprehensive response to technical queries"
      ]
    },
    {
      title: "Industry Impact & Innovation",
      percentage: "5%",
      icon: <Users className="w-6 h-6" />,
      description: "Assesses the solution's potential impact on the cybersecurity and legal technology industries.",
      points: [
        "Potential for industry transformation",
        "Innovation in solving existing challenges",
        "Cross-industry applicability",
        "Contribution to industry best practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Judging Criteria
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Solutions will be evaluated across key dimensions to identify innovative, secure, and 
            compliant approaches to cybersecurity and legal technology challenges, with a strong 
            focus on AI implementation and ethical considerations.
          </p>
        </div>

        {/* Criteria Cards */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {criteria.map((criterion, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center">
                    {criterion.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground">{criterion.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="text-lg font-bold px-4 py-2">
                    {criterion.percentage}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {criterion.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {criterion.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-earth-green mt-2 flex-shrink-0"></div>
                      <span className="text-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Evaluation Process
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Each submission will be scored across all criteria by the panel of expert judges. 
            The weighted scores will determine the winners in each category and overall winners. 
            Focus on demonstrating clear environmental impact while maintaining technical excellence and practical feasibility, particularly through the thoughtful application of AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JudgingCriteria;
import { Award, GraduationCap, Trophy, FileText } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Curso Técnico em Informática",
      institution: "ETEC - Escola Técnica Estadual",
      year: "2023",
      description: "Formação técnica completa em desenvolvimento de sistemas, programação e infraestrutura de TI.",
      icon: GraduationCap,
      type: "Formação"
    },
    {
      id: 2,
      title: "Projeto Integrador - Sistema de Gestão",
      institution: "ETEC - Trabalho de Conclusão",
      year: "2023",
      description: "Desenvolvimento de sistema completo de gestão empresarial como projeto final do curso técnico.",
      icon: Trophy,
      type: "Projeto"
    },
    {
      id: 3,
      title: "Certificação em Inglês Técnico",
      institution: "Instituto de Idiomas",
      year: "2022",
      description: "Proficiência em inglês técnico para desenvolvimento de software e documentação internacional.",
      icon: FileText,
      type: "Idiomas"
    },
    {
      id: 4,
      title: "Java Spring Boot Especialização",
      institution: "Plataforma Online",
      year: "2024",
      description: "Especialização avançada em desenvolvimento de APIs REST com Spring Boot e microserviços.",
      icon: Award,
      type: "Especialização"
    },
    {
      id: 5,
      title: "Node.js e Express.js",
      institution: "Plataforma Online",
      year: "2024",
      description: "Curso completo de desenvolvimento backend com Node.js, Express e integração com bancos de dados.",
      icon: FileText,
      type: "Tecnologia"
    },
    {
      id: 6,
      title: "Python para Data Science",
      institution: "Plataforma Online",
      year: "2023",
      description: "Certificação em análise de dados, machine learning e automação com Python.",
      icon: Award,
      type: "Dados"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Formação": "text-blue-500",
      "Projeto": "text-green-500",
      "Idiomas": "text-purple-500",
      "Especialização": "text-orange-500",
      "Tecnologia": "text-cyan-500",
      "Dados": "text-pink-500"
    };
    return colors[type as keyof typeof colors] || "text-primary";
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            Certificações
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Formações e certificações que complementam minha expertise técnica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                className="tech-card p-6 animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="tech-icon p-3">
                    <IconComponent className={`w-6 h-6 ${getTypeColor(cert.type)} group-hover:text-primary transition-colors duration-300`} />
                  </div>
                  <div className="flex-1">
                    <span className={`text-sm font-medium ${getTypeColor(cert.type)} px-2 py-1 rounded-full bg-background/50`}>
                      {cert.type}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-1 text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {cert.institution}
                    </p>
                  </div>
                  <span className="text-sm text-primary font-bold bg-primary/10 px-2 py-1 rounded">
                    {cert.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
import { Code, Database, Server, Smartphone, Globe, Brain } from "lucide-react";

const Technologies = () => {
  const technologies = [
    { 
      name: "Java", 
      icon: Code, 
      color: "text-orange-500",
      description: "Desenvolvimento backend robusto"
    },
    { 
      name: "Node.js", 
      icon: Server, 
      color: "text-green-500",
      description: "APIs e serviços escaláveis"
    },
    { 
      name: "HTML/CSS", 
      icon: Globe, 
      color: "text-blue-500",
      description: "Interfaces modernas e responsivas"
    },
    { 
      name: "JavaScript", 
      icon: Smartphone, 
      color: "text-yellow-500",
      description: "Interatividade e dinamismo"
    },
    { 
      name: "Python", 
      icon: Brain, 
      color: "text-purple-500",
      description: "Automação e análise de dados"
    },
    { 
      name: "Database", 
      icon: Database, 
      color: "text-cyan-500",
      description: "Modelagem e otimização"
    }
  ];

  return (
    <section id="technologies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            Tecnologias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e linguagens que domino para criar soluções completas e eficientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="tech-card p-8 text-center animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tech-icon mx-auto mb-6 w-fit">
                  <IconComponent className={`w-12 h-12 ${tech.color} group-hover:text-primary transition-colors duration-300`} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
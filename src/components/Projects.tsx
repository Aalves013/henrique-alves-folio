import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de E-commerce",
      description: "Plataforma completa de vendas online com painel administrativo, processamento de pagamentos e controle de estoque. Desenvolvido com Java Spring Boot e React.",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/henriquealves",
      liveUrl: "#",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
      featured: true
    },
    {
      id: 2,
      title: "API de Gerenciamento",
      description: "API RESTful robusta para gerenciamento de usuários e recursos, com autenticação JWT, documentação Swagger e testes automatizados.",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/henriquealves",
      liveUrl: "#",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      featured: true
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Painel interativo de análise de dados com gráficos dinâmicos, relatórios personalizáveis e integração com múltiplas fontes de dados.",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/henriquealves",
      liveUrl: "#",
      technologies: ["Python", "Django", "Chart.js", "PostgreSQL"],
      featured: false
    },
    {
      id: 4,
      title: "App Mobile",
      description: "Aplicativo móvel híbrido para gestão de tarefas com sincronização offline, notificações push e interface intuitiva.",
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com/henriquealves",
      liveUrl: "#",
      technologies: ["React Native", "Node.js", "Firebase"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções inovadoras que desenvolvi, demonstrando expertise técnica e criatividade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`tech-card p-0 overflow-hidden animate-slide-up group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex flex-col ${project.featured ? 'lg:flex-row' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className={`p-8 ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-effect"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    {project.liveUrl !== '#' && (
                      <Button
                        className="tech-button text-primary-foreground"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
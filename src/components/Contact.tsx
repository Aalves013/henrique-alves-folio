import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/henrique-alves-souza",
      color: "hover:text-blue-500",
      description: "Conecte-se profissionalmente"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/henriquealves",
      color: "hover:text-gray-400",
      description: "Veja meus repositórios"
    },
    {
      name: "E-mail",
      icon: Mail,
      url: "mailto:henrique.alves@email.com",
      color: "hover:text-red-500",
      description: "Entre em contato direto"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/5511999999999",
      color: "hover:text-green-500",
      description: "Conversemos pelo WhatsApp"
    }
  ];

  const handleContactClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Interessado em colaborar? Vamos conversar sobre seu próximo projeto!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Button
                key={contact.name}
                variant="outline"
                className="tech-card h-auto p-8 flex-col space-y-4 border-border/50 hover:border-primary/50 glow-effect animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleContactClick(contact.url)}
              >
                <div className="tech-icon p-4">
                  <IconComponent className={`w-8 h-8 text-muted-foreground ${contact.color} transition-colors duration-300`} />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {contact.description}
                  </p>
                </div>
              </Button>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <div className="tech-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Vamos criar algo incrível juntos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Estou sempre aberto a novos desafios e oportunidades de colaboração. 
              Entre em contato e vamos discutir como posso ajudar com seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="tech-button text-primary-foreground"
                onClick={() => handleContactClick("mailto:henrique.alves@email.com")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar E-mail
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-effect"
                onClick={() => handleContactClick("https://wa.me/5511999999999")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border/30 text-center">
        <p className="text-muted-foreground">
          © 2024 Henrique Alves de Souza. Desenvolvido com ❤️ e muito código.
        </p>
      </div>
    </section>
  );
};

export default Contact;
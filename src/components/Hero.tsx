import { Button } from "@/components/ui/button";
import henriquePhoto from "@/assets/henrique-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
              Henrique Alves
            </h1>
            <h2 className="text-2xl lg:text-3xl text-secondary mb-6 font-semibold">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Transformando ideias em soluções digitais inovadoras. 
              Especialista em desenvolvimento web com foco em performance, 
              escalabilidade e experiência do usuário excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="tech-button text-primary-foreground text-lg px-8 py-4">
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 glow-effect"
              >
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-1 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-tech rounded-full blur-xl opacity-30 animate-pulse-glow" />
              <img
                src={henriquePhoto}
                alt="Henrique Alves de Souza"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-tech rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-secondary rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-tech rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};

export default Hero;
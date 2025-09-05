import { Hand } from 'lucide-react';
import rayanPortrait from '@/assets/rayan-portrait.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-hero-bg flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-text-body text-lg font-medium">Hi</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-large">
                Rayan Dinujaya
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="hero-text text-text-large">
                SOFTWARE
              </h2>
              <h2 className="hero-text text-text-large">
                ENGINEER
              </h2>
            </div>
            
            <p className="text-text-body text-lg max-w-md mx-auto lg:mx-0">
              I'm a passionate software engineer specializing in full-stack development, 
              mobile applications, and modern web technologies
            </p>
          </div>

          {/* Right side - Portrait */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] lg:w-[420px] lg:h-[520px] rounded-3xl overflow-hidden bg-card-bg shadow-2xl">
                <img
                  src={rayanPortrait}
                  alt="Rayan Dinujaya - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Animated Hand Wave */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-purple rounded-full flex items-center justify-center shadow-xl">
                <Hand className="w-8 h-8 text-white wave-hand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
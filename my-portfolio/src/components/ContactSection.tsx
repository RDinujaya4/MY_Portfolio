import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import rayanPortrait from '@/assets/rayan-portrait.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Portrait and text */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img
                src={rayanPortrait}
                alt="Rayan Dinujaya"
                className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 mb-6"
              />
              <p className="text-text-body text-lg mb-4">Hi</p>
              <h2 className="section-heading text-text-large mb-6">Let's work together</h2>
              <p className="text-text-body text-lg">
                Let's build something impactful together—whether it's your next web application, 
                mobile app, or technical solution.
              </p>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-card-bg rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-text-large font-medium mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div>
                <label className="block text-text-large font-medium mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div>
                <label className="block text-text-large font-medium mb-2">
                  Service Needed
                </label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-stack">Full-Stack Development</SelectItem>
                    <SelectItem value="mobile">Mobile App Development</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="consulting">Technical Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-text-large font-medium mb-2">
                  How can I help you? *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell me about your project requirements, timeline, and any specific challenges you're facing..."
                  rows={5}
                  className="bg-background border-border resize-none"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
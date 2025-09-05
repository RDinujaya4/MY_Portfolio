import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      category: "Mobile Development",
      title: "SafeWalk Mobile App",
      description: "React Native safety application with seamless user experience, and real-time notification system through cloud function and geofencing.",
      tags: ["React Native", "Firebase", "Cloud Run", "AI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      image: project2,
      category: "Web Development", 
      title: "New City Hardware",
      description: "Full-stack web application providing comprehensive business analytics with real-time inventory management system and customer shopping side.",
      tags: ["React", "JavaScript", "Firebase", "Cloud Run"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      image: project3,
      category: "Full-Stack Development",
      title: "Banana Math Blitz",
      description: "Designed and developed an interactive educational math game that challenges players with puzzles of increasing difficulty using banana API.",
      tags: ["HTML", "Firebase", "Cookies", "Git"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-text-large mb-4">Featured Projects</h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            These selected projects showcase my expertise in building scalable applications 
            and solving complex technical challenges with innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-card-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-accent-purple text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-text-large mb-3">
                  {project.title}
                </h3>
                
                <p className="text-text-body mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-accent-purple-light text-accent-purple text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-full px-8 py-3">
            Browse All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
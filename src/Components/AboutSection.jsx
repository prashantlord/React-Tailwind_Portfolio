import { Briefcase, Code, User } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className=" container mx-auto max-2-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              A Web Developer & A Student
            </h3>
            <p className="text-nuted-foreground">
              I'm always learning and improving my skills to stay current with
              modern development trends. I focus on writing clean code and
              creating smooth user experiences.
            </p>
            <p className="text-nuted-foreground">
              I enjoy solving problems with code and continuously exploring new
              tools and frameworks to level up my work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer  ">
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className=" gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Create fast and responsive web application.
                  </p>
                </div>
              </div>
            </div>

            <div className=" gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className=" gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Building projects from idea to deployment using modern tools
                    and agile practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;

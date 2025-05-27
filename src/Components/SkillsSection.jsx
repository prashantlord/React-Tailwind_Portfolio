import { useState } from "react";
import { cn } from "../lib/utils";
const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React", level: 25, category: "Frontend" },
  { name: "Tailwind CSS", level: 65, category: "Frontend" },

  { name: "Git/GitHub", level: 20, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
  { name: "VS Code", level: 80, category: "tools" },

  { name: "Laptop Repair", level: 70, category: "additional" },
  { name: "System Troubleshooting", level: 80, category: "additional" },
];

const categories = ["all", "frontend", "tools", "additional"];
function SkillSection() {
  const [activeCategery, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategery === "all" || skill.category === activeCategery
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center  gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer ",
                activeCategery === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground "
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-large shadow-xs card-hover select-none"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg "> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: `${skill.level + "%"}` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SkillSection;

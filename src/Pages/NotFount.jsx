import StarBackground from "./../Components/StarBackgound";
import ThemeToggle from "./../Components/ThemeToggle";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className=" w-dvw h-dvh flex items-center justify-center bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
      <div className="container max-w-4xl mx-auto text-center z-10 ">
        <div className=" space-y-6 ">
          <h1 className=" text-4xl md:text-6xl font-bold  tracking-tight ">
            <span className="opacity-0 animate-fade-in-delay-1 "> Page </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Not Found
            </span>
          </h1>

          <div>
            <Link
              to="/"
              className="cosmic-button opacity-0 animate-fade-in-delay-1"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

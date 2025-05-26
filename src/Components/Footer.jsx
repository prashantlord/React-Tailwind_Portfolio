import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer
      id="footer"
      className="py-10 px-5 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap items-center  justify-between "
    >
      <p className="text-sm text-muted-foreground">
        ©{new Date().getFullYear()}{" "}
        <span className="text-primary"> Prashant Shrestha </span>, All rights
        reserved
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors "
      >
        <ArrowUp size={20} className="" />
      </a>
    </footer>
  );
}
export default Footer;

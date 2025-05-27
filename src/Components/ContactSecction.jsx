import {
  Facebook,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  TwitterIcon,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {});
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary-30  ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          Need a project done or looking to collaborate? Feel free to reach
          out—I'm always open to new opportunities!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap 12 ">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4 cursor-pointer">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold  ">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:prashants2062@gmail.com"
                  >
                    prashants2062@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 cursor-pointer">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold ">Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="tel:+9779806511283"
                  >
                    +977 9806511283
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 cursor-pointer">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold ">Location</h4>
                  <a className="text-muted-foreground   hover:text-primary transition-colors">
                    Nepal
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 ">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center mb-5 ">
                <a
                  className="cursor-pointer hover:text-primary transition-colors duration-300"
                  target="_black"
                  href="https://www.linkedin.com/in/prashantshre/"
                >
                  <LinkedinIcon />
                </a>
                <a
                  target="_black"
                  className="cursor-pointer hover:text-primary transition-colors duration-300"
                  href="https://www.facebook.com/prashant.stha.984786"
                >
                  <Facebook />
                </a>
                <a
                  target="_black"
                  className="cursor-pointer hover:text-primary transition-colors duration-300"
                  href="https://x.com/Prashantgamer07"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs ">
            <h3 className="text-2xl font-semibold mb-6 ">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-dm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Prashant Shrestha"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-dm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-dm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to ..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;

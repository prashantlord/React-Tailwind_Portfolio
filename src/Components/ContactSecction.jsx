import {
  Facebook,
  LinkedinIcon,
  LoaderPinwheel,
  Mail,
  MapPin,
  Phone,
  Send,
  TwitterIcon,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";

function ContactSection() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [sendingMessage, setSendingMessage] = useState(false);

  {
    /* Contact From on Submit Event  */
  }

  const [emailSent, setEmailSent] = useState();
  const onSubmit = async (event) => {
    setSendingMessage(true);
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "125c53cf-787c-440d-8252-cdf285268ec9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setEmailSent(true);
      setName("");
      setEmail("");
      setMessage("");
      setSendingMessage(false);
    }
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
            <form className="space-y-6" onSubmit={onSubmit}>
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
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Dibas Pathak"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="dibaspathak@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to ..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer transition-all",
                  sendingMessage
                    ? "hover:shadow-none hover:scale-100 bg-primary/30"
                    : ""
                )}
              >
                {sendingMessage ? "Sending" : "Send Message"}
                {sendingMessage ? (
                  <LoaderPinwheel size={20} className=" rotatingWheel" />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      {emailSent ? (
        <div
          className={cn(
            "w-dvw h-dvh bg-white/5 z-100 fixed top-0 flex justify-center items-center left-0 opacity-0 transition-all animate-fade-in-delay-2 "
          )}
        >
          <div className="bg-card p-8 rounded-lg shadow-xs border-2 border-primary">
            <div className="flex flex-col items-center justify-center gap-6">
              <Mail />
              <div>
                <h2>Thank You</h2>
                <p>Your message has been sent!</p>
              </div>
              <button
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition cursor-pointer"
                onClick={() => setEmailSent(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
export default ContactSection;

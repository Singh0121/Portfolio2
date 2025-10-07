import { Mail, Phone, Linkedin, Code2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="end-credits" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
          End Credits 🎬
        </h2>
        <p className="text-muted-foreground mb-12 text-lg text-center italic">
          "Yeh ending nahi, next sequel ka trailer hai!"
        </p>

        {/* Movie Credits Style */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="text-center space-y-4 mb-8">
            <p className="text-xl font-bold text-accent">A VENKATESH PRATAP SINGH PRODUCTION</p>
            <div className="space-y-2 text-muted-foreground">
              <p className="text-lg">
                <span className="font-semibold text-foreground">Directed by:</span> Venkatesh Pratap Singh
              </p>
              <p className="text-lg">
                <span className="font-semibold text-foreground">Starring:</span> Python, C, Java, Machine Learning
              </p>
              <p className="text-lg">
                <span className="font-semibold text-foreground">Produced by:</span> Late Nights & Coffee ☕
              </p>
              <p className="text-lg">
                <span className="font-semibold text-foreground">Special Effects:</span> OpenCV, MATLAB, Arduino
              </p>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <a
              href="mailto:venkateshvinayakcbs@gmail.com"
              className="group flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-accent/20 hover:border-accent border border-transparent transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 text-accent group-hover:animate-float" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-semibold text-foreground truncate">venkateshvinayakcbs@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:6393158664"
              className="group flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-accent/20 hover:border-accent border border-transparent transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 text-accent group-hover:animate-float" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-semibold text-foreground">6393158664</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/venkatesh-pratap-singh-149196294"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-accent/20 hover:border-accent border border-transparent transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 text-accent group-hover:animate-float" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-semibold text-foreground">Connect</p>
              </div>
            </a>

            <a
              href="https://leetcode.com/u/nWRfpTIBwe"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-accent/20 hover:border-accent border border-transparent transition-all duration-300 hover:scale-105"
            >
              <Code2 className="w-5 h-5 text-accent group-hover:animate-float" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">LeetCode</p>
                <p className="text-sm font-semibold text-foreground">View Profile</p>
              </div>
            </a>
          </div>
        </div>

        {/* Final Credits Scroll */}
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold text-accent">
            🎬 "Coding + Comedy + Cinema = The VPS Cinematic Universe"
          </p>
          <p className="text-muted-foreground italic">
            "Main coder hoon… aur yeh mera climax nahi, sequel ka trailer hai!"
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>© 2025 Venkatesh Pratap Singh. All Rights Reserved.</p>
            <p className="mt-2 italic">"Picture abhi baaki hai mere dost..." - Om Shanti Om</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

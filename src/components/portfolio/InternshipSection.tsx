import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const InternshipSection = () => {
  const [open, setOpen] = useState(false);
  const description =
    "Ek Intern Ki Kahaani (An Instrumentation Intern's Story)\n\n" +
    "Scene: The sprawling industrial kingdom of Chennai Petroleum Corporation Limited (CPCL).\n" +
    "Enter our hero... me, the Instrumentation Intern.\n\n" +
    "My quest wasn't for a lost treasure, but to master the senses of the refinery—the thousands of instruments that act as its eyes and ears—and connect them to its powerful brain, the mighty Distributed Control System (DCS).\n\n" +
    "I learned that in this world, the real dialogues aren't spoken; they are transmitted as signals between a pressure transmitter and a controller. The real drama wasn't a family feud, but a faulty sensor threatening the entire plot. The suspense was ensuring every valve and actuator followed the script written in the control logic.\n\n" +
    "My internship story? It’s the tale of how I, the Instrumentation Intern, learned to feel the dil ki dhadkan (heartbeat) of a massive industrial plant through its signals and wires. In the end, my job was to make sure that for the entire process, All Izz Well.";

  return (
    <section id="internships" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Internship Diaries 🎥
        </h2>
        <p className="text-muted-foreground mb-12 text-lg italic">
          "Boss bola 'Tumse na ho payega' – maine kar dikhaya!"
        </p>

        <div
          className="relative bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] group cursor-pointer overflow-hidden"
          onClick={() => setOpen(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-900 to-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

          <div className="flex items-start gap-6">
            <div className="text-6xl relative z-10">🏭</div>
            <div className="flex-1 relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                Chennai Petroleum Corporation Ltd
              </h3>
              <p className="text-accent font-semibold mb-4">Instrumentation Intern</p>
              
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>Worked on industrial automation and safety instrumentation systems</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>Implemented sensor calibration and monitoring protocols</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>Enhanced understanding of real-world industrial control systems</span>
                </p>
              </div>

              <div className="mt-6 p-4 bg-secondary/50 rounded border-l-4 border-accent">
                <p className="text-sm italic text-foreground">
                  "Internship mein seekha – theory aur practical mein utna hi difference hai jitna Golmaal 1 aur Golmaal Returns mein!" 😄
                </p>
              </div>
            </div>
          </div>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-accent">
            <DialogHeader>
              <DialogTitle className="text-3xl text-accent">Chennai Petroleum Corporation Ltd</DialogTitle>
            </DialogHeader>

            <div className="space-y-6 mt-2">
              <div className="p-5 rounded-lg border border-accent/30 bg-gradient-to-br from-black via-red-900/40 to-black">
                <h4 className="text-xl font-bold text-foreground mb-3">Overview</h4>
                <p className="text-foreground whitespace-pre-line">{description}</p>
              </div>

              <div className="p-6 rounded-lg border border-accent/40 bg-gradient-to-br from-red-900/20 via-black/20 to-transparent">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
                    Film Hero
                  </div>
                  <div className="mt-2 text-2xl md:text-3xl font-black text-red-600">
                    Venkatesh Pratap Singh
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Project Report</h4>
                  <a
                    href="https://drive.google.com/file/d/1otOqjmkYDgQkOSstLXkXDJp_gMSzumqp/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 border border-accent/40"
                  >
                    View Report
                  </a>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Internship Certificate</h4>
                  <a
                    href="https://drive.google.com/file/d/1JHoPhd3haYfSwpADTMvxPCcO5DnSSWpt/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 border border-accent/40"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default InternshipSection;

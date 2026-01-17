import { ClipboardCheck, HardHat, Headphones } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Inspection & Design",
    description:
      "Our experts visit your site for a thorough assessment. We use 3D modeling to design the optimal solar system for your roof.",
  },
  {
    icon: HardHat,
    step: "02",
    title: "Installation",
    description:
      "Our certified technicians install your solar system with precision. Most residential installations are completed within 2-3 days.",
  },
  {
    icon: Headphones,
    step: "03",
    title: "Maintenance & Support",
    description:
      "Enjoy 24/7 monitoring, regular maintenance visits, and dedicated customer support throughout the lifetime of your system.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-solar-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Solar Journey in 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've made going solar as easy as possible. From consultation to
            installation, we handle everything.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-solar-amber to-solar-green" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-card text-center relative z-10">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-solar text-primary-foreground text-xl font-bold mb-6">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 mx-auto rounded-lg bg-solar-light flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
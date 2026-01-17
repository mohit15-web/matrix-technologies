import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a solar rooftop system?",
    answer:
      "A solar rooftop system consists of solar panels installed on your roof that convert sunlight into electricity. This electricity can power your home or business, significantly reducing your dependence on grid power and lowering your electricity bills.",
  },
  {
    question: "How much can I save on my electricity bills?",
    answer:
      "Most homeowners save 70-90% on their electricity bills after installing solar. The exact savings depend on your roof size, sunlight availability, system capacity, and current electricity consumption. We provide a detailed savings estimate during our free consultation.",
  },
  {
    question: "What financing options are available?",
    answer:
      "We offer multiple financing options including zero-cost EMI plans, bank loans with attractive interest rates, and government subsidy schemes (up to 40% for residential). You can also opt for outright purchase for maximum long-term savings.",
  },
  {
    question: "What is net metering and how does it work?",
    answer:
      "Net metering is a billing mechanism where excess solar power generated during the day is exported to the grid. Your electricity meter runs backward, giving you credits. At night or on cloudy days, you can use grid power, and your net bill is calculated based on the difference.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Residential installations typically take 2-3 days, while commercial installations may take 1-2 weeks depending on system size. The entire process from consultation to commissioning usually takes 3-4 weeks, including permits and approvals.",
  },
  {
    question: "What maintenance is required for solar panels?",
    answer:
      "Solar panels require minimal maintenance. We recommend cleaning panels 2-4 times per year and annual professional inspection. Our AMC (Annual Maintenance Contract) covers all maintenance needs, ensuring optimal performance throughout the system's 25+ year lifespan.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about solar rooftop systems and our
            services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card data-[state=open]:shadow-card-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
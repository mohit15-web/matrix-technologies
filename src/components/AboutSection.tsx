import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Making Solar Adoption Easy Since 2015
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              At MatrixTechnologies, we believe everyone deserves access to clean,
              affordable energy. Since 2015, we've been on a mission to make
              solar adoption seamless for homes and businesses across India.
            </p>

            <p className="text-muted-foreground mb-8">
              Our team of certified solar experts handles everything from initial
              consultation to installation and ongoing maintenance. With
              partnerships with leading panel manufacturers and financing
              institutions, we ensure you get the best value for your investment.
            </p>

            <div className="space-y-4">
              {[
                "MNRE-approved vendor with all certifications",
                "ISO 9001:2015 certified installation process",
                "Direct partnerships with Tier-1 panel manufacturers",
                "Dedicated customer support available 7 days a week",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-solar-green flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-solar-light rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-card rounded-xl shadow-card">
                  <p className="text-4xl font-bold text-gradient-solar mb-2">
                    8+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Years of Experience
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-card">
                  <p className="text-4xl font-bold text-gradient-solar mb-2">
                    15K+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Happy Customers
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-card">
                  <p className="text-4xl font-bold text-gradient-solar mb-2">
                    50+
                  </p>
                  <p className="text-sm text-muted-foreground">MW Installed</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl shadow-card">
                  <p className="text-4xl font-bold text-gradient-solar mb-2">
                    25+
                  </p>
                  <p className="text-sm text-muted-foreground">Cities Covered</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 rounded-2xl bg-gradient-solar opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
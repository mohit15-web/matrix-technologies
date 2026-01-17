import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels on modern rooftop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solar-light border border-border mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-solar-amber text-solar-amber"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              Rated 4.8+ by 6000+ customers
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Power Your Home with{" "}
            <span className="text-gradient-solar">Clean Solar Energy</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Join thousands of homeowners saving up to 90% on electricity bills
            with premium solar rooftop solutions. Zero investment plans
            available.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-button" asChild>
              <a href="#contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50">
            <div>
              <p className="text-3xl font-bold text-foreground">15,000+</p>
              <p className="text-sm text-muted-foreground">
                Installations Done
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">50+ MW</p>
              <p className="text-sm text-muted-foreground">Capacity Deployed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">25+ Cities</p>
              <p className="text-sm text-muted-foreground">Across India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
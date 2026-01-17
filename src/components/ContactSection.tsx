import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted!",
      description:
        "Our team will contact you within 24 hours to schedule your free consultation.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-solar-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Schedule Your Free Solar Consultation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to start saving with solar? Fill out the form and our solar
              experts will get in touch to schedule a free site visit and
              provide a customized quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-solar flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">
                    +91 1800-123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-solar flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-foreground">
                    hello@solarbright.in
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-solar flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Head Office</p>
                  <p className="font-semibold text-foreground">
                    123 Solar Tower, Sector 62, Gurugram, Haryana 122011
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your solar requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                className="w-full shadow-button"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Get Free Consultation
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our Privacy Policy and consent to
                receive communications.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
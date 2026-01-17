import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Excellent service from start to finish. The team was professional and the installation was completed in just 2 days. Already seeing 70% reduction in my electricity bills!",
    image: "RK",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Very happy with my decision to go solar. The financing options made it affordable and the maintenance support has been outstanding. Highly recommend!",
    image: "PS",
  },
  {
    name: "Amit Patel",
    location: "Bangalore",
    rating: 5,
    text: "The 3D roof inspection gave me complete confidence in their approach. Professional team, quality panels, and great after-sales service.",
    image: "AP",
  },
  {
    name: "Sunita Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "From consultation to installation, everything was seamless. My 5kW system is performing above expectations. Best investment for my home!",
    image: "SR",
  },
];

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-20 bg-solar-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Customer Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Thousands of Happy Customers
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-solar-amber text-solar-amber"
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.8</span>
            <span className="text-muted-foreground">
              from 6,000+ verified reviews
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-card shadow-card p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />

            <div className="transition-opacity duration-300">
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{reviews[activeIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-solar flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {reviews[activeIndex].image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {reviews[activeIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {reviews[activeIndex].location}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-solar-amber text-solar-amber"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
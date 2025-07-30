import logoImage from "@/assets/logo.png"

interface HeroBannerProps {
  alignment?: "center" | "left" | "right"
  background?: string
  heading: string
  subheading: string
  logo?: string
}

export function HeroBanner({ 
  alignment = "center", 
  heading, 
  subheading, 
  logo 
}: HeroBannerProps) {
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right"
  }

  return (
    <div className={`py-16 px-6 bg-gradient-hero rounded-xl shadow-elevated mb-8 ${alignmentClasses[alignment]}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 font-inter">
          {heading}
        </h1>
        
        <div className="mt-8">
          <p className="text-sm text-primary-foreground/80 italic">
            Empowering BCA students with top-notch resources
          </p>
        </div>
      </div>
    </div>
  )
}
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
        {logo && (
          <div className="mb-8 flex justify-center">
            <img 
              src={logoImage} 
              alt="IGNOU Logo" 
              className="w-24 h-24 object-contain rounded-xl shadow-card bg-card p-2"
            />
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 font-inter">
          {heading}
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
          {subheading}
        </p>
        
        <div className="mt-8">
          <p className="text-sm text-primary-foreground/80 italic">
            Empowering IGNOU BCA students with top-notch resources
          </p>
        </div>
      </div>
    </div>
  )
}
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import sem1Image from "@/assets/sem1.png"
import sem2Image from "@/assets/sem2.png"
import sem3Image from "@/assets/sem3.png"
import sem4Image from "@/assets/sem4.png"
import sem5Image from "@/assets/sem5.png"
import sem6Image from "@/assets/sem6.png"

interface BackpackItem {
  title: string
  img: string
  href: string
  bgColor: string
}

interface BackpackGridProps {
  gridTemplateColumns?: string
  gap?: string
  items: BackpackItem[]
}

const semesterImages = {
  "/assets/sem1.png": sem1Image,
  "/assets/sem2.png": sem2Image,
  "/assets/sem3.png": sem3Image,
  "/assets/sem4.png": sem4Image,
  "/assets/sem5.png": sem5Image,
  "/assets/sem6.png": sem6Image,
}

const semesterColors = {
  "#ff7043": "bg-semester-1",
  "#ffee58": "bg-semester-2", 
  "#29b6f6": "bg-semester-3",
  "#66bb6a": "bg-semester-4",
  "#7e57c2": "bg-semester-5",
  "#ef5350": "bg-semester-6"
}

export function BackpackGrid({ items }: BackpackGridProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        Choose Your Semester
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => {
          const imageKey = item.img as keyof typeof semesterImages
          const colorKey = item.bgColor as keyof typeof semesterColors
          const bgColorClass = semesterColors[colorKey] || "bg-primary"
          
          return (
            <Link
              key={index}
              to={item.href}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <div className={`${bgColorClass} p-6 aspect-square flex flex-col items-center justify-center text-center relative`}>
                {/* Background decoration */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <img 
                  src={semesterImages[imageKey]} 
                  alt={item.title}
                  className="w-16 h-16 object-contain mb-3 filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                />
                
                <h3 className="text-white font-semibold text-sm mb-2 relative z-10">
                  {item.title}
                </h3>
                
                <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
              </div>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
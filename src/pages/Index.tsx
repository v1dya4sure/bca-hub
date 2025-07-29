import { Layout } from "@/components/Layout"
import { HeroBanner } from "@/components/HeroBanner"
import { BackpackGrid } from "@/components/BackpackGrid"
import { NoticeBoard } from "@/components/NoticeBoard"
import { FooterBanner } from "@/components/FooterBanner"

const Index = () => {
  const semesterItems = [
    { title: "Semester 1", img: "/assets/sem1.png", href: "/semester/1", bgColor: "#ff7043" },
    { title: "Semester 2", img: "/assets/sem2.png", href: "/semester/2", bgColor: "#ffee58" },
    { title: "Semester 3", img: "/assets/sem3.png", href: "/semester/3", bgColor: "#29b6f6" },
    { title: "Semester 4", img: "/assets/sem4.png", href: "/semester/4", bgColor: "#66bb6a" },
    { title: "Semester 5", img: "/assets/sem5.png", href: "/semester/5", bgColor: "#7e57c2" },
    { title: "Semester 6", img: "/assets/sem6.png", href: "/semester/6", bgColor: "#ef5350" }
  ]

  const noticeItems = [
    {
      id: "n1",
      title: "New notice",
      timestamp: "2023-11-04T14:26:00+05:30",
      description: "Important update regarding upcoming exams."
    },
    {
      id: "n2",
      title: "My Project",
      timestamp: "2023-09-16T07:33:00+05:30",
      description: "Project submission guidelines released."
    }
  ]

  return (
    <Layout>
      <div className="space-y-8">
        <HeroBanner 
          alignment="center"
          heading="IGNOU की BCA कक्षा"
          subheading="IGNOU Ki BCA Kaksha"
          logo="/assets/logo.png"
        />
        
        <BackpackGrid 
          items={semesterItems}
        />
        
        <NoticeBoard 
          title="Notice Board"
          items={noticeItems}
        />
        
        <FooterBanner 
          content="Empowering IGNOU BCA students with top-notch resources – Created, Designed, and Developed by Dilkhush Raj."
        />
      </div>
    </Layout>
  );
};

export default Index;

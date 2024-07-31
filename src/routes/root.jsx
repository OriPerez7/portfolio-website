import AboutMeSection from "../components/home/AboutMe"
import ContactSection from "../components/home/Contact"
import Hero from "../components/home/Hero"
import ProjectsSection from "../components/home/Projects/Projects"
import Layout from "../components/shared/Layout"

const Home = () => {
  return (
    <Layout>
        <Hero />
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
    </Layout>
  )
}

export default Home
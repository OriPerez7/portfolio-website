import AboutMeSection from "../components/home/AboutMe"
import Hero from "../components/home/Hero"
import ProjectsSection from "../components/home/Projects/Projects"
import Layout from "../components/shared/Layout"

const Home = () => {
  return (
    <Layout>
        <Hero />
        <AboutMeSection />
        <ProjectsSection />
    </Layout>
  )
}

export default Home
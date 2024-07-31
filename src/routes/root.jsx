import Hero from "../components/home/Hero"
import ProjectsSection from "../components/home/Projects/Projects"
import Layout from "../components/shared/Layout"

const Home = () => {
  return (
    <Layout>
        <Hero />
        <ProjectsSection />
    </Layout>
  )
}

export default Home
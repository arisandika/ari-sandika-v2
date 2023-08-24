import ProjectsContent from "@/components/Section/ProjectContent/projectsContent";
import Layout from "@/components/layout";
import { AnimatedSection } from "@/utils/motion";

export default function Projects() {
  return (
    <>
      <Layout>
        <div className="container-project">
          <div className="project-header">
            <h1>
              <AnimatedSection>
                Designing Tomorrow&apos;s, Digital Experiences Today
              </AnimatedSection>
            </h1>
          </div>
          <AnimatedSection>
            <div className="md:px-[22px]">
              <div className="underline" />
            </div>
          </AnimatedSection>
          <ProjectsContent />
        </div>
      </Layout>
    </>
  );
}

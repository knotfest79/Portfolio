import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My projects
      </h1>
      <div className="w-full flex flex-wrap justify-center gap-10 px-10">
        <ProjectCard
          src="/NestCRM.png"
          title="Churn prediciton wiht AI using Reactjs/typescript/javascript/
          dynamoDB/EC2/nodeJS/random forest/python/neural network"
          description="NESTCRM uses advanced AI to identify at-risk customers before they leave, helping you take action when it matters most."
        />

        <ProjectCard
          src="/Wealon.png"
          title="Modern website using WordPress, ELementor and customizng Astra theme/PHP/Javascript/CSS "
          description="Your trusted partner for tailored financial solutions."
        />

        <ProjectCard
          src="/Drever.png"
          title="Automotive website using Custom WordPress/PHP/CSS/BootStrap"
          description="Drever Automotive Services has been operating for 34 years serving the Peninsula area since 1988. With over 39 years experience in the motor trade we specialize in the repairs and servicing of Mercedes Benz and BMW vehicles although all other makes and models are fully catered for including light commercial vehiclesand four wheel drives.Winner of the 2008 Business Achiever Award (Automotive Category) All our work is fully guaranteed and a loan car is available on request."
        />
      </div>
    </section>
  );
};

export default Projects;

import Project from '../../components/ProjectItem';

const Projects = () => {
  return (
    <section class="container-fluid padding-vertical">
      <div class="container">
        <div class="row">
          <div class="text-align-center">
            <h1 class="color-dark">Seus projetos em um só lugar.</h1>
            <p class="color-grey-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tempor urna suscipit mattis maximus. Fusce ac arcu commodo.
            </p>
            <div id="clients" class="display-flex flex-wrap">
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

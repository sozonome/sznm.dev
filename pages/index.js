import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Layout>
      <main className='wrapper'>
        <div className='flex flex-wrap pt-4'>
          <ProjectCard
            title='Personal Site'
            img='/avataaars.svg'
            link='https://agustinusnathaniel.com'
          />
          <ProjectCard
            title='KapturaLumina'
            img='/icon_kapturalumina.png'
            link='https://agustinusnathaniel.com/kapturalumina'
          />
          <ProjectCard
            title='COVID-19 Data'
            img='/icon-covid-19-data.png'
            link='https://covid19.sznm.dev'
          />
          <ProjectCard
            title='Le Cook'
            img='/icon_lecook.png'
            link='https://le-cook.sznm.dev'
          />
          <ProjectCard
            title='Other Projects'
            link='https://agustinusnathaniel.com/projects'
          />
        </div>
        <img className="m-auto sm:m-0 p-2 w-1/2 sm:w-1/4 my-4" src='/octocat_sznm.png' />
      </main>
    </Layout>
  );
}

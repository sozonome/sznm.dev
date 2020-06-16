import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { links } from '../data/links';

export default function Home() {
  return (
    <Layout>
      <main className='wrapper'>
        <div id='links' className='w-1/2 sm:w-full m-auto flex items-center'>
          <a
            href={`https://www.instagram.com/${links.instagram}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
          </a>
          <a
            href={`https://github.com/${links.github}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src="https://img.icons8.com/fluent/48/000000/repository.png"/>
          </a>
          <a
            href={`https://twitter.com/${links.twitter}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src="https://img.icons8.com/fluent/48/000000/twitter.png"/>
          </a>
          <a
            href={`https://youtube.com/channel/${links.youtube}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src="https://img.icons8.com/fluent/48/000000/youtube-play.png"/>
          </a>
        </div>
        <div className='flex flex-wrap pt-4'>
          <ProjectCard
            title='Personal Site'
            img='/avataaars.svg'
            link='https://agustinusnathaniel.com'
          />
          <ProjectCard
            title='KapturaLumina'
            img='/app_icons/icon_kapturalumina.png'
            link='https://play.google.com/store/apps/details?id=dev.sznm.kapturalumina'
          />
          <ProjectCard
            title='COVID-19 Data'
            img='/app_icons/icon-covid-19-data.png'
            link='https://covid19.sznm.dev'
          />
          <ProjectCard
            title='Le Cook'
            img='/app_icons/icon_lecook.png'
            link='https://le-cook.sznm.dev'
          />
          <ProjectCard
            title='Advice Generator'
            img='/app_icons/icon_advicegen.png'
            link='https://advicegen.sznm.dev'
          />
          <ProjectCard
            title='Insta Profile'
            img='/app_icons/icon_instaprofile.png'
            link='https://instaprofile.sznm.dev'
          />
          <ProjectCard
            title='Other Projects'
            link='https://agustinusnathaniel.com/projects'
          />
          <ProjectCard
            title='bookmarks'
            link='https://sozonome.github.io/bookmarks'
          />
        </div>
        <div className='sm:flex'>
          <img
            className='m-auto sm:m-0 p-2 w-1/2 sm:w-1/4 my-4'
            src='/octocat_sznm.png'
          />
        </div>
      </main>
    </Layout>
  );
}

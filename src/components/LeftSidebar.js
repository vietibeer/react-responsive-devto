import {
  FcHome,
  FcReading,
  FcTodoList,
  FcVideoCall,
  FcAbout,
  FcIdea,
  FcShop,
  FcLike,
  FcBriefcase,
  FcDisclaimer,
  FcBusinessContact,
} from 'react-icons/fc';
import {AiFillAudio} from 'react-icons/ai';
import {FaTags, FaDev} from 'react-icons/fa';
import {IoLogoTwitter, IoLogoFacebook, IoLogoGithub} from 'react-icons/io';
import {RiInstagramFill, RiTwitchLine} from 'react-icons/ri';
import {CgShapeHexagon} from 'react-icons/cg';
import {GrFormClose} from 'react-icons/gr';
import {useState} from 'react';

const tags = [
  'react',
  'graphql',
  'nodejs',
  'sass',
  'javascript',
  'html',
  'css',
  'webdev',
  'opensource',
  'beginners',
  'python',
  'git',
  'vscode',
  'npm',
  'sql',
  'ubuntu',
  'aws',
];

const dataLeft = [
  {href: 'home', icon: FcHome, title: 'Home'},
  {href: 'reading', icon: FcReading, title: 'Reading List'},
  {href: 'list', icon: FcTodoList, title: 'List'},
  {href: 'podcasts', icon: AiFillAudio, title: 'Podcasts'},
  {href: 'videos', icon: FcVideoCall, title: 'Videos'},
  {href: 'tags', icon: FaTags, title: 'Tags'},
];

const dataLeftMore = [
  {href: 'code', icon: FcAbout, title: 'Code of Conduct'},
  {href: 'FAQ', icon: FcIdea, title: 'FAQ'},
  {href: 'DEV', icon: FcShop, title: 'DEV Shop'},
  {href: 'sponsers', icon: FcLike, title: 'Sponsers'},
  {href: 'about', icon: FaDev, title: 'About'},
  {href: 'privacy', icon: FcBriefcase, title: 'Privacy Policy'},
  {href: 'terms', icon: FcDisclaimer, title: 'Terms of use'},
  {href: 'contact', icon: FcBusinessContact, title: 'Contact'},
];

const dataSocial = [
  {href: 'twitter', icon: IoLogoTwitter},
  {href: 'facebook', icon: IoLogoFacebook},
  {href: 'github', icon: IoLogoGithub},
  {href: 'Twitch', icon: RiTwitchLine},
  {href: 'Instagram', icon: RiInstagramFill},
];

function LeftSidebar(props) {
  const [more, setMore] = useState(false);
  const renderNav = () => {
    const listLi = [];
    dataLeft.forEach((x, i) => {
      listLi.push(
        <li key={i}>
          <a href={`/${x.href}`}>
            <i>{<x.icon />}</i>
            {x.title}
          </a>
        </li>,
      );
    });
    return listLi;
  };

  const listMore = () => {
    const listLi = [];
    dataLeftMore.forEach((x, i) => {
      listLi.push(
        <li key={`${i}_${x.href}`}>
          <a href={`/${x.href}`}>
            <i>{x.icon ? <x.icon /> : null}</i>
            {x.title}
          </a>
        </li>,
      );
    });
    return listLi;
  };

  const socials = () => {
    const listSocial = [];
    dataSocial.forEach((x, i) => {
      listSocial.push(
        <a key={i} href={`/${x.href}`}>
          <i>{<x.icon />}</i>
        </a>,
      );
    });
    return listSocial;
  };

  return (
    <>
      <aside className="leftBar">
        <nav className="leftBar__menu">
          <ul>
            {renderNav()}
            <li className={more ? 'more hidden' : 'more'}>
              <a href="/#" onClick={() => setMore(!more)}>
                <i></i>
                More...
              </a>
            </li>
            <div className={more ? 'list' : 'list hidden'}>{listMore()}</div>
          </ul>
        </nav>

        <div className={more ? 'leftBar__social' : 'leftBar__social hidden'}>{socials()}</div>
        <nav className="leftBar__taglist">
          <header>
            <h3>My Tags</h3>
            <i>
              <CgShapeHexagon />
            </i>
          </header>
          <ul>
            {tags.map((t) => (
              <li key={t}>
                <a href="/#">#{t}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {props.burgerMenu && (
        <div className="hamburger">
          <div className="hamburger__content">
            <header>
              <h2>DEV Community</h2>
              <button onClick={props.closeMenu}>
                <GrFormClose />
              </button>
            </header>
            <div className="hamburger__content__items">
              <nav className="leftBar__menu">
                <ul>
                  {renderNav()}
                  <li className={more ? 'more hidden' : 'more'}>
                    <a href="/#" onClick={() => setMore(!more)}>
                      <i></i>
                      More...
                    </a>
                  </li>
                  <div className={more ? 'list' : 'list hidden'}>{listMore()}</div>
                </ul>
              </nav>
              <div className={more ? 'leftBar__social' : 'leftBar__social hidden'}>{socials()}</div>
            </div>
          </div>

          <div className="hamburger overlay"></div>
        </div>
      )}
    </>
  );
}

export default LeftSidebar;

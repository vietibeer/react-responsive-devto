import {useEffect, useState} from 'react';
import ArticleComponent from './ArticleComponent';
import ArticleSkeleton from "./ArticleSkeleton";
function Content() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetchArticles();
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      const windowheight = 'innerHeight' in window ? window.innerHeight : html.offsetHeight;

      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );

      const windowBottom = windowheight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        console.log('we reached the bottom');
        if (articles !== null) {
          fetchArticles(articles);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articles]);

  const fetchArticles = async (oldArticles = []) => {
    const res = await fetch('https://dev.to/api/articles');
    const newArticles = await res.json();
    setArticles([...oldArticles, ...newArticles]);
  };
  return (
    <main className="main-content">
      <header>
        <h1>Posts</h1>
        <nav>
          <a href="/#">Feed</a>
          <a href="/#">Week</a>
          <a href="/#">Month</a>
          <a href="/#">Infinity</a>
          <a href="/#">Latest</a>
        </nav>

        <select id="dropdown-select" className="dropdown">
          <option value="Feed" defaultValue>
            Feed
          </option>
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Infinity">Infinity</option>
          <option value="Latest">Latest</option>
        </select>
      </header>

      <div className="articles">
        {articles &&
          articles.map((article, id) => {
            return <ArticleComponent key={id} data={article} />;
          })}

        {!articles && [1, 2, 3, 4, 5].map((a) => <ArticleSkeleton key={a} />)}
      </div>
    </main>
  );
}

export default Content;

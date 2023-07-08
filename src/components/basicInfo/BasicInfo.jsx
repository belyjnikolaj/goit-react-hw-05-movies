import css from './BasicInfo.module.css';

const BasicInfo = ({ poster_path, title, release_date, overview, genres, vote_average }) => {
  
  return (
    <section className={css['data__section']}>
      <div>
        <img
          className={css['img__container']}
          src={
            poster_path
              ? "https://image.tmdb.org/t/p/w200" + poster_path
              : "https://www.reelviews.net/resources/img/default_poster.jpg"
          }
          alt={title || "No name"}
        />
      </div>
      <div className={css['info__box']}>
        <h1 className={css['movie__title']}>
          {title || "No name"} ({release_date?.substring(0, 4) || "No date"})
        </h1>
        <p className={css.text}>User score: {Math.round(vote_average * 10)}%</p>
        <h2 className={css['title__overview']}>Overview</h2>
        <p className={css.text}>{overview}</p>
        <h3 className={css['title__genres']}>Genres</h3>
        <ul className={css['list__genres']}>
          {genres.map((el) => (
            <li className={css['item__text']} key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BasicInfo;

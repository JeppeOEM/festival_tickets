import style from "/styles/component/landing.module.scss";
export default function News() {
  return (
    <div className={style.news}>
      <div>
        <h3>He did break free</h3>
        <p>There has been a recent change to the line-up. Queen has resurected Freddie Mercury and he will be performing on the main stage.</p>
        <span> READ MORE</span>
      </div>
      <div>
        <h3>Great news!</h3>
        <p>This year we will provide a free shuttle service to and from the festival.</p>
        <span> READ MORE</span>
      </div>
    </div>
  );
}

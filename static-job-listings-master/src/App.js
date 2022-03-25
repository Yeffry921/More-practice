import "./index.css";
import companyLogo from "../images/photosnap.svg";

const App = ({
  company,
  logo,
  new: New,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  console.log(New);

  return (
    <div className="container">
      <header className="heading"></header>

      <main className="job__listing-container">
        <div className="job__card">
          <div className="job__icon">
            <img src={companyLogo} alt="logo" />
          </div>
          <div className="job__overview">
            <div className="job__tags">
              <span className="company__name">Photosnap</span>
              <button className="btn__new">New!</button>
              <button className="btn__featured">Featured</button>
            </div>

            <div className="job__description">
              <p>Senior Frontend Developer</p>
              <span>1d Ago</span>
              <span> &bull; </span>
              <span>Fulltime</span>
              <span> &bull; </span>
              <span>USA only</span>
            </div>
            <hr />
            <div className="job__roles">
              <span>Frontend</span>
              <span>Senior</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Frontend</span>
            </div>
          </div>
          <div className="job__categories"></div>
        </div>
      </main>
    </div>
  );
};

export default App;

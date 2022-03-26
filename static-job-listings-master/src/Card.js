const Card = (props) => {
  const {
    id,
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
  } = props.data
  return (
    <div className="job__card">
      <div className="job__icon">
        <img src={logo} alt="logo" />
      </div>
      <div className="job__overview">
        <div className="job__tags">
          <span className="company__name">{company}</span>
          <button className="btn__new">New!</button>
          <button className="btn__featured">Featured</button>
        </div>

        <div className="job__description">
          <p>{position}</p>
          <span>{postedAt}</span>
          <span> &bull; </span>
          <span>{contract}</span>
          <span> &bull; </span>
          <span>{location}</span>
        </div>
        <hr />
        <div className="job__roles">
          <span>{role}</span>
          <span>{level}</span>

          { languages.map((language, id) => 
            <span key={id}>{language}</span>
          )}

          { tools.map((tool, id) => 
            <span key={id}>{tool}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card
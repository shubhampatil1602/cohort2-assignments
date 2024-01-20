const ReusableCard = ({ name, description, interests, socials }) => {
  return (
    <div className='container'>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Interests</h3>
      {interests.map((i) => (
        <ul>
          <li>{i}</li>
        </ul>
      ))}

      <button onClick={() => window.open(socials[0].LinkedIn, '_blank')}>
        LinkedIn
      </button>
      <button onClick={() => window.open(socials[1].Twitter, '_blank')}>
        Twitter
      </button>
    </div>
  );
};

export default ReusableCard;

// 'https://www.linkedin.com/in/shubhmpatil/'
// 'https://twitter.com/shubhamsp1602'

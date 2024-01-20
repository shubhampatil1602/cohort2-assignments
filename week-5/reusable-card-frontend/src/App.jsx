import ReusableCard from './components/ReusableCard';

function App() {
  const socials = [
    {
      LinkedIn: 'https://www.linkedin.com/in/shubhmpatil/',
      id: 1,
    },
    {
      Twitter: 'https://twitter.com/shubhamsp1602',
      id: 2,
    },
  ];

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <ReusableCard
        key='1231'
        name='Shubham'
        description='3rd Year B.E. Computer Engineering Student'
        interests={['Web Dev', 'Open Source', 'Listening Songs']}
        socials={socials}
      />
      <ReusableCard
        key='1231'
        name='Shubham'
        description='3rd Year B.E. Computer Engineering Student'
        interests={['Web Dev', 'Open Source', 'Listening Songs']}
        socials={socials}
      />
      <ReusableCard
        key='1231'
        name='Shubham'
        description='3rd Year B.E. Computer Engineering Student'
        interests={['Web Dev', 'Open Source', 'Listening Songs']}
        socials={socials}
      />
    </div>
  );
}

export default App;

import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <h1>GraphiQL</h1>
          <p className="subtitle">
            GraphiQL is a playground/IDE for graphQL requests.
          </p>
          <p>
            App includes the authorization and authentication capabilities,
            ensuring access to the tool only for authorized users.
          </p>
          <p>It works with a user-specified GraphQL open endpoint.</p>
          <p>
            The app is the result of completing the final task of &nbsp;
            <a href="https://rs.school/react/">RS School React Course.</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

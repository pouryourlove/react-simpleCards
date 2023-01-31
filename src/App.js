import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexImage from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assitants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              {" "}
              <ProfileCard
                img={AlexImage}
                title="Alexa"
                handle="@alexa99"
                description="Alexa was created by Amazon"
              />
            </div>
            <div className="column is-4">
              {" "}
              <ProfileCard
                img={Cortana}
                title="Cortana"
                handle="@cortana32"
                description="Cortana was made by Micosoft."
              />
            </div>
            <div className="column is-4">
              {" "}
              <ProfileCard
                img={Siri}
                title="Siri"
                handle="@siri01"
                description="Siri was made by Apple"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

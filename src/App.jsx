import "./App.css";

function App() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.latitude, position.longitude);
    });
  }

  // DB
  const user = {
    plz: 12043,
    lat: 50.14876015066643,
    long: 8.654893040657045,
  };

  // Max distance
  const distance = 0.003;

  const findNeighbours = (lat, long) => {
    if (
      lat >= user.lat - distance &&
      lat <= user.lat + distance &&
      long >= user.long - distance &&
      long <= user.long + distance
    ) {
      return <span>true</span>;
    } else {
      return <span>false</span>;
    }
  };

  const nachbar1 = findNeighbours(50.14976015066643, 8.653893040657045);
  const nachbar2 = findNeighbours(50.15176015066643, 8.650893040657045);

  /*
   Ihr sucht dann in der DB nach: ist im Umkreis? || hat inserate (Verkauf, verleih, verschenken, etc.) => dann anzeigen
  */

  return (
    <>
      <div>
        <h1>USER</h1>
        <p>
          LAT: 50.1<span className="change">48</span>76015066643
        </p>
        <p>
          LONG: 8.6<span className="change">54</span>893040657045
        </p>
        <p>Min Distance: +/-0.002</p>
        <p>Max Distance: +/-0.004</p>
      </div>
      <div>
        <h2>Nachbar 1</h2>
        <p>
          LAT: 50.1<span className="change">49</span>76015066643
        </p>
        <p>
          LONG: 8.6<span className="change">53</span>893040657045
        </p>
        <p>Nachbar? {nachbar1}</p>
      </div>
      <div>
        <h2>Nachbar 2</h2>
        <p>
          LAT: 50.1<span className="change">51</span>76015066643
        </p>
        <p>
          LONG: 8.6<span className="change">50</span>893040657045
        </p>
        <p>Nachbar? {nachbar2}</p>
      </div>
    </>
  );
}

export default App;

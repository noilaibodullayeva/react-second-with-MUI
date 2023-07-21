import './App.css';
import ResponsiveAppBar from "./header/index"
import "./header/style.css"
import Banner1 from "./banner1/index"
import "./banner1/style.css"
import Banner2 from "./banner2/index"
import "./banner2/style.css"
import Banner3 from "./banner3/index"
import "./banner3/style.css"
import Banner4 from "./banner4/index"
import "./banner4/style.css"
import Banner5 from "./banner5/index"
import "./banner5/style.css"
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Banner1 />
      <Banner2 />
      <Banner3/>
      <Banner4/>
      <Banner5/>
    </div>
  );
}

export default App;

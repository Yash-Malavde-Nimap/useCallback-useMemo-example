import Callback from "./Components/Callback";
import Memo from "./Components/Memo";

const App = () => {
  return (
    <div style={{display:'flex',gap:'100px',background:'#416d8d',minHeight:'100vh'}}>
      <Callback />
      <Memo />
    </div>
  );
};

export default App;

import { RecoilRoot } from "recoil";
import Post from "./Post";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Post />
      </RecoilRoot>
    </div>
  );
}

export default App;

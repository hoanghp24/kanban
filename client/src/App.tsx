import { ConfigProvider } from "antd";
import "./App.css";
import Router from "./routers/Router";

function App() {
  return (
    <ConfigProvider theme={{ token: {}, components: {} }}>
      <Router />;
    </ConfigProvider>
  );
}

export default App;

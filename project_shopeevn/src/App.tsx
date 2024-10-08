import useRouteElements from "./useRouteElements";

function App() {
  const RouteElements = useRouteElements();
  return <div>{RouteElements}</div>;
}

export default App;

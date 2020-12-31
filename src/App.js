import React,{Suspense} from 'react';
import './App.css';

const Home =React.lazy(()=>import("./components/home"))
function App() {

  return (
      // <Frame1/>
      <React.Fragment>
          <Suspense fallback={<h1>Loading......</h1>}>
          <Home/>
          </Suspense>
       </React.Fragment>
  );
}

export default App;

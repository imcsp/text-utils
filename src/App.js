import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { createRoot } from "react-dom/client";

import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    //  mode === 'dark' ? setMode('light') : setMode('dark')
    if (mode.mode === "dark") {
      setMode({
        mode: "light",
        labelColor: "dark",
        fontColor: "black",
        textBoxColor: "white",
      });
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "Success");
      // setTimeout(() => {
      //   document.title = 'TextUtils - Light'
      // }, 2000);
      document.title = "TextUtils - Light";
    } else {
      setMode({
        mode: "dark",
        labelColor: "light",
        fontColor: "white",
        textBoxColor: "#03525d",
      });
      document.body.style.backgroundColor = "#03525d";
      showAlert("Dark Mode has been enabled", "Success");
      document.title = "TextUtils - Dark";
    }
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <TextForm
  //         heading="Welcome to textUtils"
  //         title="Enter Text"
  //         mode={mode}
  //         showAlert={showAlert}
  //       />
  //     ),
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);

  // createRoot(document.getElementById("root")).render(
  //   <>
  //     <Navbar
  //       title="textUtils"
  //       aboutText="About Me"
  //       mode={mode}
  //       toggleMode={toggleMode}
  //     />
  //     <Alert alert={alert} />
  //     <RouterProvider router={router} />
  //   </>
  // );

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="textUtils"
          aboutText="About Me"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
          <Routes>
            <Route exact
              path="/"
              element={
                <TextForm
                  heading="Welcome to textUtils"
                  title="Enter Text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

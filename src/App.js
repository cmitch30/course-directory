import React from "react";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { HTMLCourses, CSSCourses, JSCourses } from "../src/data/courses";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Teachers from "./components/Teachers";
import Featured from "./components/Featured";
import Courses from "./components/Courses";
import CourseContainer from "./components/courses/CourseContainer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="teachers">
            <Route index element={<Teachers />} />
            <Route path=":topic/:name" element={<Featured />} />
          </Route>
          <Route path="courses" element={<Courses />}>
            <Route index element={<Navigate replace to="html" />} />
            <Route
              path="html"
              element={<CourseContainer data={HTMLCourses} />}
            />
            <Route path="css" element={<CourseContainer data={CSSCourses} />} />
            <Route
              path="javascript"
              element={<CourseContainer data={JSCourses} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

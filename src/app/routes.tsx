import { createBrowserRouter, Outlet } from "react-router";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { ExperienceSkills } from "./components/ExperienceSkills";
import { Contact } from "./components/Contact";
import { BackgroundAnimations } from "./components/BackgroundAnimations";

const RootLayout = () => (
  <div className="relative w-full min-h-screen">
    <BackgroundAnimations />
    <Header />
    <main>
      <Outlet />
    </main>
    <Contact />
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <ExperienceSkills />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage }
    ],
  },
]);

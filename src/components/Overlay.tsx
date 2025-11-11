import { NavLink, Outlet } from "react-router";

const Overlay = () => {
  return (
    <>
      <div className="overlay fixed inset-0 p-8 flex flex-col gap-4 justify-between z-10">
        <h1 className="font-bold italic tracking-tighter">
          R3F EXPERIMENTAL CAROUSEL
        </h1>
        <div className="uppercase flex gap-5 tracking-tighter">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-neutral-900" : "text-neutral-300"
            }
          >
            Experiment 1
          </NavLink>
          <NavLink
            to="/experiment2"
            className={({ isActive }) =>
              isActive ? "text-neutral-900" : "text-neutral-300"
            }
          >
            Experiment 2
          </NavLink>
          <NavLink
            to="/experiment3"
            className={({ isActive }) =>
              isActive ? "text-neutral-900" : "text-neutral-300"
            }
          >
            Experiment 3
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Overlay;

import { NavLink, Outlet } from "react-router";

const Overlay = () => {
  return (
    <>
      <div className="overlay fixed inset-0 p-8 flex flex-col gap-4 justify-between z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-[#f8f8f8] to-transparent z-5"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#f8f8f8] to-transparent z-5"></div>
        <div className="absolute left-0 bottom-0 top-0 w-40 bg-linear-to-r from-[#f8f8f8] to-transparent z-5"></div>
        <div className="absolute right-0 bottom-0 top-0 w-40 bg-linear-to-l from-[#f8f8f8] to-transparent z-5"></div>


        <div className="z-10 flex justify-between w-full">
          <div>
            <h1 className="font-bold italic tracking-tighter">
              R3F EXPERIMENTAL CAROUSEL
            </h1>
            <div className="flex gap-3 items-center pointer-events-auto">
              <a target="_blank" href="#">
                Article
              </a>
              <a target="_blank" href="https://tympanus.net/codrops/demos/">
                All demos
              </a>
              <a
                target="_blank"
                href="https://github.com/colindmg/r3f-experimental-carousel"
              >
                GitHub
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-2 pointer-events-auto text-sm items-end">
            <a
              target="_blank"
              href="https://tympanus.net/codrops/demos/?tag=react-three-fiber"
            >
              #react-three-fiber
            </a>
            <a
              target="_blank"
              href="https://tympanus.net/codrops/demos/?tag=three-js"
            >
              #three-js
            </a>
            <a
              target="_blank"
              href="https://tympanus.net/codrops/demos/?tag=shader"
            >
              #shader
            </a>
            <a
              target="_blank"
              href="https://tympanus.net/codrops/demos/?tag=glsl"
            >
              #glsl
            </a>
            <a
              target="_blank"
              href="https://tympanus.net/codrops/demos/?tag=3d"
            >
              #3d
            </a>
          </nav>
        </div>
        <div className="z-10 uppercase flex gap-5 tracking-tighter pointer-events-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-neutral-900" : "text-neutral-500"
            }
          >
            Experiment 1
          </NavLink>
          <NavLink
            to="/experiment2"
            className={({ isActive }) =>
              isActive ? "text-neutral-900" : "text-neutral-500"
            }
          >
            Experiment 2
          </NavLink>
          <NavLink
            to="/experiment3"
            className={({ isActive }) =>
              isActive ? "text-neutral-900" : "text-neutral-500"
            }
          >
            Experiment 3
          </NavLink>
          <NavLink
            to="/experiment4"
            className={({ isActive }) =>
              isActive ? "text-neutral-900" : "text-neutral-500"
            }
          >
            Experiment 4
          </NavLink>
          <NavLink
            to="/experiment5"
            className={({ isActive }) =>
              isActive ? "text-neutral-900" : "text-neutral-500"
            }
          >
            Experiment 5
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Overlay;

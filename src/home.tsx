import { Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="  bg-h-auto bg-cover bg-black opacity-120   bg-[url('../public/Img.jpg')] ">
        <div className=" font-serif sm:container  text-white text-center md:py-14 ">
          <h3 className=" text-sm pt-3 mb-1 md:mt-14 md:mb-2 md:text-xl">
            FUEL YOUR
          </h3>
          <h1 className=" text-2xl mb-1 md:mt-8 md:mb-4 tracking-widest md:text-7xl  ">
            BODY FITNESS
          </h1>
          <p className="text-xs   tracking-wide  md:text-base ">
            When we create Gym Base, we knew we want to be more than just a
            <br></br>
            simple gym Having worked in traditional gyms in the past
          </p>
          <button
            className="px-6 py-3  tracking-widest text-xs mb-8 font-medium mt-4   rounded  md:px-9 md:py-4 md:my-14  bg-white text-black "
            onClick={() => {
              navigate("/UserForm");
            }}
          >
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;

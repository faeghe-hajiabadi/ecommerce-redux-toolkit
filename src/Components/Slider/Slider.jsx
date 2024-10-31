import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";

function Slider() {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slide index", slideIndex);
  const dispatch = useDispatch();
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img className="h-850 w-full" src={item.img} alt="shoes" />
                )}
              </div>
              <div className="absolute top-1/2 mx-auto mb-6">
                <p className="text-white  text-4xl font-inter font-bold tracking-normal leading-none">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
        <div className="flex absolute bottom-2 m-auto left-3">
          {sliderData.map((dot, index) => {
            return (
              <div key={dot.id} className="mr-4">
                <div
                  className={
                    index === slideIndex
                      ? "bg-indigo-500 rounded-full p-4 cursor-pointer"
                      : "bg-black rounded-full p-4 cursor-pointer"
                  }
                  onClick={() => dispatch(dotSlide(index))}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button
          className="absolute top-1/2 right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button className="absolute top-1/2 left-4 bg-white rounded-full p-2 hover:bg-green-300" onClick={() => dispatch(prevSlide(slideIndex - 1))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;

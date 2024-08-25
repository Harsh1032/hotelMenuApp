import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Link } from "react-router-dom";
import TeaLogo from "../assets/tea.jpeg";
import BreakLogo from "../assets/break.jpg";
import WaterLogo from "../assets/water.jpeg";
import { IoIosAdd } from "react-icons/io";

const Checkout = () => {
  const datepickerRef = useRef(null);
  const fpInstance = useRef(null);

  useEffect(() => {
    if (datepickerRef.current) {
      // Destroy previous instance if it exists
      if (
        fpInstance.current &&
        typeof fpInstance.current.destroy === "function"
      ) {
        fpInstance.current.destroy();
      }

      // Initialize flatpickr
      fpInstance.current = flatpickr(datepickerRef.current, {
        dateFormat: "d-m-Y",
        allowInput: true, // Allow input and allow clearing
        appendTo: datepickerRef.current.parentNode, // Append to parent node
        onReady: (selectedDates, dateStr, instance) => {
          if (instance.calendarContainer) {
            // Add a clear button manually
            const clearButton = document.createElement("button");
            clearButton.innerHTML = "Clear";
            clearButton.type = "button";
            clearButton.classList.add(
              "mt-2",
              "text-red-500",
              "bg-white",
              "px-2",
              "py-1",
              "rounded-lg",
              "shadow-lg"
            );
            clearButton.addEventListener("click", () => {
              instance.clear(); // Clear the date picker
            });
            instance.calendarContainer.appendChild(clearButton);
          }
        },
      });
    }

    // Cleanup function to destroy flatpickr instance on component unmount
    return () => {
      if (
        fpInstance.current &&
        typeof fpInstance.current.destroy === "function"
      ) {
        fpInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="h-[100%] w-full py-6 flex flex-col overflow-y-scroll no-scrollbar">
      <h1 className="mx-auto text-5xl font-bold my-5">Checkout</h1>
      <div className="flex flex-col h-auto py-5 my-2 w-full ">
        <div className="flex flex-col p-5 xs:w-[90%] md:w-[500px] xs:h-auto bg-white border rounded-lg shadow-lg mx-auto my-2">
          <h3 className="text-3xl font-bold my-2">Order Summary</h3>
          <div className="flex flex-col">
            <div className="flex w-full justify-between">
              <span className="text-xl font-normal my-2 w-1/2">Snickers</span>
              <span className="text-xl font-normal my-2 w-1/4 text-center">
                x1
              </span>
              <span className="text-xl font-normal my-2 w-1/4 text-right">
                $2
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-xl font-normal my-2 w-1/2">Bounty</span>
              <span className="text-xl font-normal my-2 w-1/4 text-center">
                x2
              </span>
              <span className="text-xl font-normal my-2 w-1/4 text-right">
                $8
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-xl font-normal my-2 w-1/2">Tour</span>
              <span className="text-xl font-normal my-2 w-1/4 text-center">
                x1
              </span>
              <span className="text-xl font-normal my-2 w-1/4 text-right">
                $60
              </span>
            </div>
            <div className="flex w-full justify-between">
              <h3 className="text-xl font-medium my-2 w-3/4">Total:</h3>
              <span className="text-xl font-normal my-2 w-1/4 text-right">
                $70
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center items-center my-3 ">
          <h2 className="text-4xl font-bold ">Often Bought With</h2>
        </div>
        <div className="flex xs:flex-col md:flex-row h-auto py-5 my-2 w-full">
          <div className="flex flex-col items-center xs:w-[90%] md:w-[300px] h-auto mx-auto my-2">
            <div className="flex flex-col items-center py-2 w-full h-[330px] bg-white border rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold my-2 ">Tea</h3>
              <img
                src={TeaLogo}
                className="w-[90%] h-[65%] rounded-lg"
                alt="food"
              />
              <h3 className="text-3xl font-bold my-2 ">$3</h3>
            </div>
            <button className="flex items-center mt-4 p-2 bg-blue-500 rounded-lg shadow-lg hover:bg-opacity-80 ">
              <IoIosAdd color={"white"} size={30} />
              <span className="text-3xl font-medium text-white">
                Add to cart
              </span>
            </button>
          </div>
          <div className="flex flex-col items-center xs:w-[90%] md:w-[300px] h-auto mx-auto my-2">
            <div className="flex flex-col items-center py-2 w-full h-[330px] bg-white border rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold my-2 ">Break</h3>
              <img
                src={BreakLogo}
                className="w-[90%] h-[65%] rounded-lg"
                alt="house keeping"
              />
              <h3 className="text-3xl font-bold my-2 ">$2</h3>
            </div>
            <button className="flex items-center mt-4 p-2 bg-blue-500 rounded-lg shadow-lg hover:bg-opacity-80 ">
              <IoIosAdd color={"white"} size={30} />
              <span className="text-3xl font-medium text-white">
                Add to cart
              </span>
            </button>
          </div>
          <div className="flex flex-col items-center xs:w-[90%] md:w-[300px] h-auto mx-auto my-2">
            <div className="flex flex-col items-center py-2 w-full h-[330px] bg-white border rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold my-2 ">Water</h3>
              <img
                src={WaterLogo}
                className="w-[90%] h-[65%] rounded-lg"
                alt="need help"
              />
              <h3 className="text-3xl font-bold my-2 ">$1</h3>
            </div>
            <button className="flex items-center mt-4 p-2 bg-blue-500 rounded-lg shadow-lg hover:bg-opacity-80 ">
              <IoIosAdd color={"white"} size={30} />
              <span className="text-3xl font-medium text-white">
                Add to cart
              </span>
            </button>
          </div>
        </div>
        <form className="flex flex-col p-5 xs:w-[90%] md:w-[500px] xs:h-auto bg-white border rounded-lg shadow-lg mx-auto my-2">
          <h2 className="text-3xl font-bold my-2 ">Enter Your Details</h2>
          <label className="text-xl font-medium my-2">Name:*</label>
          <input className="xs:w-[100%] md:w-[450px] h-[40px] rounded-lg bg-gray-200 outline-none p-2 shadow-lg required" />
          <label className="text-xl font-medium my-2">Phone Number:*</label>
          <input className="xs:w-[100%] md:w-[450px] h-[40px] rounded-lg bg-gray-200 outline-none p-2 shadow-lg required" />
          <label className="text-xl font-medium my-2">Room Number:*</label>
          <input className="xs:w-[100%] md:w-[450px] h-[40px] rounded-lg bg-gray-200 outline-none p-2 shadow-lg required" />
          <label className="text-xl font-medium my-2">
            Date: (Tour & Services)
          </label>
          <input
            ref={datepickerRef}
            className="w-full h-[40px] rounded-lg bg-gray-200 outline-none p-2 shadow-lg"
            placeholder="Select a date"
          />
          <label className="text-xl font-medium my-2">Notes:*</label>
          <textarea className="xs:w-[100%] md:w-[450px] h-[80px] rounded-lg bg-gray-200 outline-none p-2 shadow-lg required align-text-top" />
          <button
            type="submit"
            className="mt-4 w-full h-[40px] rounded-lg bg-red-500 text-white font-bold shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="h-[80px] w-full flex">
        <Link
          to="/"
          className="my-3 xs:w-[30%] h-[60px] md:w-[150px] flex bg-white border rounded-lg shadow-lg mx-auto justify-center px-2 items-center"
        >
          <span className="text-3xl font-bold">Back</span>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;

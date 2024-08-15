import axios from "axios";
import React, { useEffect, useState } from "react";

const formatDate = (date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  const formattedDate = [year, month, day].join('-');

  // Strip the string at the first space if any
  return formattedDate.split(' ')[0];
};



const Form = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    // Your image URLs
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = formatDate(selectedDate);

    const formData = {
      policyNumber,
      dateOfBirth: formattedDate,
      mobileNumber,
    };

    try {
      const response = await axios.post("http://localhost:8080/api/renewal", formData);
      console.log("Response:", response.data);

      // Clear the input fields after successful submission
      setPolicyNumber("");
      setSelectedDate("");
      setMobileNumber("");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-center my-12 shadow-2xl">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex bg-white">
            <div className="w-full h-[700px] bg-white hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
              {images.map((image, index) => (
                <img
                  key={index}
                  className={`object-cover object-center rounded h-full ${
                    index === currentImageIndex ? "block" : "hidden"
                  }`}
                  alt="hero"
                  style={{ width: "100%", height: "100%" }}
                  src={image}
                />
              ))}
            </div>
            <div className="w-full lg:w-7/12 bg-white p-5 mt-20 rounded-lg h-[620px] lg:rounded-l-none">
              <h3 className="pt-4 text-3xl font-semibold text-center">
                Health Insurance Renewal
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="policyNumber"
                  >
                    Policy Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="policyNumber"
                    type="text"
                    placeholder="Enter your policy number"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                  />
                  <p className="text-xs text-gray-600">
                    Policy format like P/000000/00/0000/000000 or 112202000000
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="dob"
                  >
                    Date of Birth
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="dob"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="mobileNumber"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="mobileNumber"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

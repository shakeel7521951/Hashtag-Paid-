import React from "react";

const SoldOut = () => {
  return (
    <div className="bg-[#DDE041] px-5 mb-5 sm:px-20 py-14 justify-center items-center text-center rounded-[45px]">
      <h1 className="font-custom text-2xl sm:text-4xl text-white">
        -267days -16hours -33min -12sec
      </h1>
      <h1 className="font-custom text-3xl sm:text-7xl text-black my-5">
        SOLD OUT!
      </h1>
      <p>We are sold out for the Toronto event,</p>
      <p>please sign up below to get notified for the next one.</p>
      <form className="flex flex-col sm:mx-48 mt-5 gap-4">
        <input
          type="text"
          className="w-full p-3 rounded"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          className="w-full p-3 rounded"
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          className="w-full p-3 rounded"
          placeholder="Work Email"
          required
        />
        <span className="text-left mt-0">
          Please complete this required field.
        </span>
        <input
          type="number"
          className="w-full p-3 rounded"
          placeholder="Phone Number"
          required
        />
        <input
          type="number"
          className="w-full p-3 rounded"
          placeholder="Street Number"
          required
        />
        <input
          type="text"
          className="w-full p-3 rounded"
          placeholder="Street Address"
          required
        />
        <select className="w-full p-3 rounded bg-white">
          <option>Creator</option>
          <option selected>Brand</option>
          <option>Agency</option>
          <option>Media</option>
        </select>
        <input
          type="text"
          className="w-full p-3 rounded"
          placeholder="What Is Your Brand Name"
          required
        />
        <button className="px-4 sm:px-7 py-5 text-md hover:bg-white bg-[#EEF0A0] w-fit mx-auto rounded-full">Join the waitlist</button>
      </form>
      <p className="text-sm sm:mx-20 mt-4">*Please note that photographs and videos will the taken during the duration of the event. By registering/joining the waitlist and attending this event, you are agreeing to waive the right to any claims for payment or royalties in connection with the possible use of these photographs or videos.</p>
    </div>
  );
};

export default SoldOut;

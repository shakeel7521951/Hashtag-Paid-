const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="h-full w-full lg:w-1/3 pt-40 flex flex-col items-center">
        <p className="pl-8 text-[2.4rem] lg:w-[80%]">Login To Your Account</p>
        <input
          type="text"
          placeholder="Email"
          name=""
          id=""
          className="w-[80%] md:w-[50%] lg:w-[80%] h-[2.5rem] mt-4 p-2 rounded-[4px] border border-gray-400"
        />
        <button className="mt-4 bg-[#ee2a57] w-[80%] md:w-[50%] lg:w-[80%] p-3 rounded-[4px] text-white">
          Continue
        </button>
        <span className=" mt-2 text-gray-600">
          Don't have an account yet?{" "}
          <a href="" className="underline">
            Signup Here
          </a>
        </span>
      </div>
      <div className="h-full w-2/3 hidden lg:inline ">
        <img src="/login.png" alt="" className="object-cover h-full" />
      </div>
    </div>
  );
};
export default Login;

import profileImageURL from "../assets/profile-picture.png";

export const LandingPage = () => {
  return (
    <div className="md:flex max-w-screen-xl mx-4 mt-8 xl:mx-auto">
      <div className="border rounded-sm  border-charcoal-700 max-w-fit p-8 mx-auto md:mx-0 shadow-[0px_6px_0px] md:shadow-[-8px_8px_0px] md:shadow-charcoal-700">
        <img src={profileImageURL} alt="" className="rounded-full bg-orange" />
      </div>
      <div className="md:ml-4 md:flex md:flex-col md:justify-center">
        <div className="text-center text-orange text-5xl sm:text-6xl lg:text-7xl font-bold mt-8 drop-shadow-md">
          Hello! Welcome.
        </div>
        <p className="mt-4">
          My name is Kham, and I'm glad to have you here. I'm a software
          engineer who design and build things for the web, and this is where I
          showcase my works. Please look around!
        </p>
      </div>
    </div>
  );
};

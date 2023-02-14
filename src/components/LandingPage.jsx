import profileImageURL from "../assets/profile-picture.png";

export const LandingPage = () => {
  return (
    <div className="mt-8 md:flex">
      <div className="border rounded-sm  border-charcoal-700 max-w-fit p-8 mx-auto md:mx-0 md:shadow-[-8px_8px_0px] md:shadow-charcoal-700">
        <img src={profileImageURL} alt="" className="rounded-full bg-orange" />
      </div>
      <div className="md:ml-4 md:flex md:flex-col md:justify-center">
        <div className="mt-8 text-5xl font-bold text-center text-orange sm:text-6xl lg:text-7xl drop-shadow-md">
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

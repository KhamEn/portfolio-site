import profileImageURL from "../assets/profile-picture.png";

export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="border rounded-sm  border-yellow max-w-2/4 p-8">
        <img src={profileImageURL} alt="" className="rounded-full " />
      </div>
      <div className="text-center text-orange text-3xl sm:text-5xl font-medium sm:font-bold mt-4">
        Kham En.
      </div>
      <div className="text-center text-orange text-3xl sm:text-5xl font-medium sm:font-bold">
        Software Engineer.
      </div>
      <p className="mt-4">
        Welcome. Glad to have you here. I design and build things for the web,
        and this is where I showcase my works. Please look around!
      </p>
    </div>
  );
};

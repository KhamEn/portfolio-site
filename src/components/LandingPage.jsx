import profileImageURL from "../assets/profile-picture.png";

export const LandingPage = () => {
  return (
    <section className=" mt-8 md:mt-16 xl:mt-32 md:flex">
      <div className="border rounded-sm  border-light-orange max-w-fit p-8 mx-auto md:mx-0 md:shadow-[-8px_8px_0px] md:shadow-light-orange">
        <img
          src={profileImageURL}
          alt=""
          className="rounded-full bg-extra-light-orange"
        />
      </div>
      <div className="md:ml-4 md:flex md:flex-col md:justify-center">
        <h2 className="mt-8">Hello! Welcome.</h2>
        <p className="mt-4 lg:text-lg">
          Glad to have you here. My name is{" "}
          <em className="text-orange">Kham</em>, and I'm a{" "}
          <em className="text-orange">software engineer</em>. I design and build
          things for the web, and this is where I showcase my works. Please look
          around!
        </p>
      </div>
    </section>
  );
};

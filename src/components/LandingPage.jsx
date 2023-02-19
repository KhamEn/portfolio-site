import profileImageURL from "../assets/profile-picture.png";

export const LandingPage = () => {
  return (
    <section className="mt-8 md:mt-16 xl:mt-32 md:grid md:grid-cols-2">
      <img
        src={profileImageURL}
        alt=""
        className="rounded-full shadow-neutral-super-light shadow-lg p-4 md:p-8"
      />
      <div className="md:ml-4 md:flex md:flex-col md:justify-center">
        <h2 className="mt-8">Hello! Welcome.</h2>
        <p className="mt-4 lg:text-lg">
          My name is <em className="text-brand-base">Kham</em>, and I'm a{" "}
          <em className="text-brand-base">software engineer</em>. I design and
          build things for the web. Please look around!
        </p>
      </div>
    </section>
  );
};

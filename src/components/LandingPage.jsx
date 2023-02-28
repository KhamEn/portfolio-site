import profileImageURL from "../assets/profile-picture.png";

export const LandingPage = () => {
  return (
    <section className="grid justify-center md:grid-cols-2 gap-fluid-s pb-14">
      <div className="flex items-center justify-center md:justify-end">
        <div className="w-full h-auto max-w-xs p-8 border rounded-lg aspect-square shadow-3d-md-tr md:shadow-3d-lg-bl">
          <img
            src={profileImageURL}
            alt=""
            className="p-1 border rounded-full hover:shadow hover:shadow-brand"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-center text-brand">Hello, welcome.</h2>
        <p className="font-semibold">
          I'm <em className="text-light-accent">Kham</em>, a{" "}
          <em className=" text-light-accent">software engineer</em>. I design
          and build things for the web. Please look around!
        </p>
      </div>
    </section>
  );
};

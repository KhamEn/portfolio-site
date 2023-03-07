import profileImageURL from "../assets/profile-picture.png";

export const LandingPage = () => {
  return (
    <section className="grid justify-center gap-fluid-s md:grid-cols-2">
      <div className="flex items-center justify-center md:justify-end">
        <div className="aspect-square h-auto w-full max-w-xs rounded-md border p-8 shadow-plane-bl">
          <img
            src={profileImageURL}
            alt=""
            className="rounded-full border p-1"
          />
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:justify-center">
        <h2 className="text-center font-serif text-brand">Hello, welcome.</h2>
        <p className="font-semibold">
          I'm <em>Kham</em>, a <em>software engineer</em>. I design and build
          things for the web. Please look around!
        </p>
      </div>
    </section>
  );
};

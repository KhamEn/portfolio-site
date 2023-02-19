import schemeBankDesktopImgURL from "../assets/projects/scheme-bank-desktop-16-9.png";
import schemeBankMobileImgURL from "../assets/projects/scheme-bank-mobile-9-16.png";
import schemeBankLogomarkUrl from "../assets/projects/scheme-bank-logomark.svg";
import linkIconUrl from "../assets/projects/link-icon.svg";
import githubIconUrl from "../assets/projects/github-icon.svg";
import arrowIconUrl from "../assets/projects/arrow-icon.svg";

export const ProjectsMobileView = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
        I Made
      </h2>

      <article className="mt-8">
        <h3 className="flex items-start text-2xl font-semibold sm:text-3xl lg:text-4xl text-orange">
          <img src={schemeBankLogomarkUrl} alt="" />
          <div>Scheme Bank</div>
        </h3>
        <div className="font-light text-charcoal-400">DESIGN & CODE</div>
        <p className="mt-4 italic font-semibold">
          Easily save and view color palette, locally or on the cloud.
        </p>

        <div className="relative h-fit mt-2">
          <img
            src={schemeBankDesktopImgURL}
            alt=""
            className="relative w-auto h-auto border rounded-md -left-3 border-charcoal-700"
          />
          <img
            src={schemeBankMobileImgURL}
            alt=""
            className="absolute w-auto border rounded-md -bottom-2 -right-3 h-3/4 border-charcoal-700"
          />
        </div>

        <div className="flex justify-between gap-2 mt-6 text-sm">
          <ul className="grid grid-cols-2 gap-2 font-mono  p-2">
            <li>react</li>
            <li>react query</li>
            <li>firebase</li>
            <li>tailwind css</li>
          </ul>

          <ul className="flex flex-col justify-between gap-2 font-ui">
            <span className="flex justify-between">
              <li className="flex items-center gap-1">
                <img src={linkIconUrl} alt="" />
                Live
              </li>
              <li className="flex items-center gap-1">
                <img src={githubIconUrl} alt="" />
                Code
              </li>
            </span>
            <span>
              <li className="flex items-center gap-1 px-4 py-1 border rounded-lg border-teal text-teal">
                Project Detail
                <img src={arrowIconUrl} alt="" />
              </li>
            </span>
          </ul>
        </div>
      </article>

      <hr className="w-1/2 mx-auto my-8 border-charcoal-200"></hr>

      <article className="mt-8">
        <h3 className="flex items-start text-2xl font-semibold sm:text-3xl lg:text-4xl text-orange">
          <img src={schemeBankLogomarkUrl} alt="" />
          <div>Scheme Bank</div>
        </h3>
        <div className="font-light text-charcoal-400">DESIGN & CODE</div>
        <p className="mt-4 italic font-semibold">
          Easily save and view color palette, locally or on the cloud.
        </p>

        <div className="relative h-fit mt-2">
          <img
            src={schemeBankDesktopImgURL}
            alt=""
            className="relative w-auto h-auto border rounded-md -left-3 border-charcoal-700"
          />
          <img
            src={schemeBankMobileImgURL}
            alt=""
            className="absolute w-auto border rounded-md -bottom-2 -right-3 h-3/4 border-charcoal-700"
          />
        </div>

        <div className="flex justify-between gap-2 mt-6 text-sm">
          <ul className="grid grid-cols-2 gap-2 font-mono  p-2">
            <li>react</li>
            <li>react query</li>
            <li>firebase</li>
            <li>tailwind css</li>
          </ul>

          <ul className="flex flex-col justify-between gap-2 font-ui">
            <span className="flex justify-between">
              <li className="flex items-center gap-1">
                <img src={linkIconUrl} alt="" />
                Live
              </li>
              <li className="flex items-center gap-1">
                <img src={githubIconUrl} alt="" />
                Code
              </li>
            </span>
            <span>
              <li className="flex items-center gap-1 px-4 py-1 border rounded-lg border-teal text-teal">
                Project Detail
                <img src={arrowIconUrl} alt="" />
              </li>
            </span>
          </ul>
        </div>
      </article>
    </section>
  );
};

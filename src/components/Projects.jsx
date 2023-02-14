import schemeBankDesktopImgURL from "../assets/projects/scheme-bank-desktop-16-9.png";
import schemeBankMobileImgURL from "../assets/projects/scheme-bank-mobile-9-16.png";
import schemeBankLogomarkUrl from "../assets/projects/scheme-bank-logomark.svg";
import linkIconUrl from "../assets/projects/link-icon.svg";
import githubIconUrl from "../assets/projects/github-icon.svg";
import arrowIconUrl from "../assets/projects/arrow-icon.svg";

export const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
        I Made
      </h2>
      <article className="mt-8">
        <h3 className="flex items-start text-2xl font-semibold sm:text-3xl lg:text-4xl text-orange">
          <img src={schemeBankLogomarkUrl} alt="" />
          <div>Scheme Bank</div>
        </h3>
        <div className="font-light text-charcoal-400">DESIGN & CODE</div>
        <p className="mt-2">
          Easily save and view color palette, locally or on the cloud.
        </p>

        <div className="relative h-fit">
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

        <ul className="flex justify-between mt-6 mb-2 text-sm font-ui">
          <span className="flex gap-4">
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
            <li className="flex items-center gap-1 px-4 py-1 border rounded-sm border-teal text-teal">
              Project Detail
              <img src={arrowIconUrl} alt="" />
            </li>
          </span>
        </ul>
      </article>
      <article className="mt-8">
        <h3 className="flex items-start text-2xl font-semibold sm:text-3xl lg:text-4xl text-orange">
          <img src={schemeBankLogomarkUrl} alt="" />
          <div>Scheme Bank</div>
        </h3>
        <div className="font-light text-charcoal-400">DESIGN & CODE</div>
        <p className="mt-2">
          Easily save and view color palette, locally or on the cloud.
        </p>

        <div className="relative h-fit">
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

        <ul className="flex justify-between mt-6 mb-2 text-sm font-ui">
          <span className="flex gap-4">
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
            <li className="flex items-center gap-1 px-4 py-1 border rounded-sm border-teal text-teal">
              Project Detail
              <img src={arrowIconUrl} alt="" />
            </li>
          </span>
        </ul>
      </article>
    </section>
  );
};

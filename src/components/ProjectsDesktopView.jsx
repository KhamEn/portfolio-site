import schemeBankDesktopImgURL from "../assets/projects/scheme-bank-desktop-16-9.png";
import schemeBankMobileImgURL from "../assets/projects/scheme-bank-mobile-9-16.png";
import schemeBankLogomarkUrl from "../assets/projects/scheme-bank-logomark.svg";
import linkIconUrl from "../assets/projects/link-icon.svg";
import githubIconUrl from "../assets/projects/github-icon.svg";
import arrowIconUrl from "../assets/projects/arrow-icon.svg";

export const ProjectsDesktopView = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
        I Made
      </h2>

      <article className="grid grid-cols-3 mt-8">
        <div className="relative col-span-2 h-fit">
          <img
            src={schemeBankDesktopImgURL}
            alt=""
            className="relative w-auto h-auto border rounded-md -left-3 xl:-left-9 border-charcoal-700"
          />
          <img
            src={schemeBankMobileImgURL}
            alt=""
            className="absolute w-auto border rounded-md -bottom-3 -right-3 md:-right-6 h-3/5 border-charcoal-700"
          />
        </div>

        <div>
          <div className="flex flex-col justify-between h-full ml-6 ">
            <div>
              <h3 className="flex items-start text-2xl font-semibold sm:text-3xl lg:text-4xl text-dark-orange">
                <img src={schemeBankLogomarkUrl} alt="" />
                <div>Scheme Bank</div>
              </h3>
              <div className="font-light text-charcoal-400">DESIGN & CODE</div>
              <p className="mt-4 italic font-semibold">
                Easily save and view color palette, locally or on the cloud.
              </p>
            </div>

            <div className="flex flex-row justify-between h-full mt-8 ml-8 text-sm">
              <ul className="flex flex-col justify-between font-mono ">
                <li className="font-sans underline">{"<use>"}</li>
                <li>react</li>
                <li>react query</li>
                <li>firebase</li>
                <li>tailwind css</li>
              </ul>

              <ul className="flex flex-col justify-end font-ui">
                <li className="flex items-center gap-1 p-2 hover:cursor-pointer hover:border hover:rounded-sm hover:border-yellow">
                  <img src={githubIconUrl} alt="" />
                  Code
                </li>
                <li className="flex items-center gap-1 p-2 hover:cursor-pointer hover:border hover:rounded-sm hover:border-yellow">
                  <img src={linkIconUrl} alt="" />
                  Live
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center gap-1 p-4 mt-3 ml-8 text-sm border rounded-lg font-ui border-teal text-teal hover:cursor-pointer hover:bg-light-teal">
              Project Detail
              <img src={arrowIconUrl} alt="" />
            </div>
          </div>
        </div>
      </article>

      <hr className="w-1/2 mx-auto my-16 border-charcoal-200"></hr>

      <article className="grid grid-cols-3">
        <div>
          <div className="flex flex-col justify-between h-full ml-6 ">
            <div>
              <h3 className="flex items-start justify-end text-2xl font-semibold sm:text-3xl lg:text-4xl text-dark-orange">
                <img src={schemeBankLogomarkUrl} alt="" />
                <div>Scheme Bank</div>
              </h3>
              <div className="font-light text-charcoal-400 text-end">
                DESIGN & CODE
              </div>
              <p className="mt-4 italic font-semibold text-end">
                Easily save and view color palette, locally or on the cloud.
              </p>
            </div>

            <div className="flex flex-row justify-between h-full mt-8 mr-8 text-sm">
              <ul className="flex flex-col justify-end font-ui">
                <li className="flex items-center gap-1 p-2 hover:cursor-pointer hover:border hover:rounded-sm hover:border-yellow">
                  <img src={githubIconUrl} alt="" />
                  Code
                </li>
                <li className="flex items-center gap-1 p-2 hover:cursor-pointer hover:border hover:rounded-sm hover:border-yellow">
                  <img src={linkIconUrl} alt="" />
                  Live
                </li>
              </ul>

              <ul className="flex flex-col justify-between mr-8 font-mono text-end">
                <li className="font-sans underline">{"<use>"}</li>
                <li>react</li>
                <li>react query</li>
                <li>firebase</li>
                <li>tailwind css</li>
              </ul>
            </div>

            <div className="flex items-center justify-center gap-1 p-4 mt-3 mr-8 text-sm border rounded-lg font-ui border-teal text-teal hover:cursor-pointer hover:bg-light-teal">
              Project Detail
              <img src={arrowIconUrl} alt="" />
            </div>
          </div>
        </div>

        <div className="relative col-span-2 h-fit">
          <img
            src={schemeBankDesktopImgURL}
            alt=""
            className="relative w-auto h-auto border rounded-md -right-3 xl:-right-9 border-charcoal-700"
          />
          <img
            src={schemeBankMobileImgURL}
            alt=""
            className="absolute w-auto border rounded-md -bottom-3 -left-3 md:-left-6 h-3/5 border-charcoal-700"
          />
        </div>
      </article>
    </section>
  );
};

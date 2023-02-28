import schemeBankLogomarkUrl from "../assets/projects/scheme-bank-logomark.svg";

export const Projects = () => {
  return (
    <section className="text-light-shade">
      <h2 className="text-center text-dark-shade my-fluid-m-lg">I Made</h2>

      <article className="w-full border md:grid md:grid-cols-2 p-fluid-s rounded md:aspect-video shadow-3d-xl-br  shadow-second-dark-shade border-second-dark-shade bg-[url('../src/assets/projects/scheme-bank-desktop-16-9.png')]">
        <div className="h-full duration-300 rounded-md md:col-start-2 p-fluid-m-lg bg-second-dark-shade hover:shadow-brand hover:shadow-md shadow-second-dark-shade ">
          <div className="flex flex-col justify-between h-full gap-4">
            <div>
              <h3 className="flex items-start text-brand">
                <img src={schemeBankLogomarkUrl} alt="" />
                <div>Scheme Bank</div>
              </h3>
              <div className="font-extralight -text-fluid-1">DESIGN & CODE</div>
              <p className="mt-4 font-semibold text-fluid-1">
                Easily save and view color palette, locally or on the cloud.
              </p>
            </div>

            <hr className="w-1/2 mx-auto border-dashed border-shade-shade"></hr>

            <ul className="flex flex-wrap gap-4 font-mono -text-fluid-1">
              <li>{"<react>"}</li>
              <li>{"<react query>"}</li>
              <li>{"<firebase>"}</li>
              <li>{"<tailwind css>"}</li>
            </ul>

            <div className="flex flex-wrap gap-4 font-ui text-light-accent -text-fluid-1">
              <a
                href="#"
                aria-label="Code"
                className="flex items-center gap-1 p-2 rounded-sm outline-none grow-0 hover:cursor-pointer hover:text-external focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-dark-shade focus-visible:text-external"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_79_243)">
                    <path
                      d="M11.9893 0.328126C5.36518 0.325447 0 5.68795 0 12.3067C0 17.5406 3.35625 21.9897 8.03036 23.6237C8.65982 23.7817 8.56339 23.3344 8.56339 23.029V20.9531C4.92857 21.379 4.78125 18.9737 4.5375 18.5719C4.04464 17.7308 2.87946 17.5165 3.22768 17.1147C4.05536 16.6888 4.89911 17.2219 5.87679 18.6656C6.58393 19.7129 7.96339 19.5362 8.6625 19.3621C8.81518 18.7326 9.14196 18.1701 9.59196 17.7335C5.82589 17.0585 4.25625 14.7603 4.25625 12.0281C4.25625 10.7022 4.69286 9.48348 5.55 8.50045C5.00357 6.87991 5.60089 5.49241 5.68125 5.28616C7.2375 5.14688 8.85536 6.40045 8.98125 6.49956C9.86518 6.26116 10.875 6.13527 12.0054 6.13527C13.1411 6.13527 14.1536 6.26652 15.0455 6.50759C15.3482 6.27723 16.8482 5.20045 18.2946 5.3317C18.3723 5.53795 18.9563 6.89331 18.442 8.49241C19.3098 9.47813 19.7518 10.7076 19.7518 12.0362C19.7518 14.7737 18.1714 17.0746 14.3946 17.7388C14.7181 18.057 14.975 18.4364 15.1502 18.8549C15.3254 19.2734 15.4155 19.7226 15.4152 20.1763V23.1897C15.4366 23.4308 15.4152 23.6692 15.817 23.6692C20.5607 22.0701 23.9759 17.5888 23.9759 12.3094C23.9759 5.68795 18.608 0.328126 11.9893 0.328126Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_79_243">
                      <rect width="24" height="24" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
                Code
              </a>
              <a
                href="#"
                aria-label="Live"
                className="flex items-center gap-1 p-2 rounded-sm outline-none grow-0 hover:cursor-pointer hover:text-external focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-dark-shade focus-visible:text-external"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.75 2.25L21 2.25C21.1989 2.25 21.3897 2.32902 21.5303 2.46967C21.671 2.61032 21.75 2.80109 21.75 3V8.25C21.75 8.66421 21.4142 9 21 9C20.5858 9 20.25 8.66421 20.25 8.25V4.81066L8.03033 17.0303C7.73744 17.3232 7.26256 17.3232 6.96967 17.0303C6.67678 16.7374 6.67678 16.2626 6.96967 15.9697L19.1893 3.75L15.75 3.75C15.3358 3.75 15 3.41421 15 3C15 2.58579 15.3358 2.25 15.75 2.25ZM5.25 6.75C4.42157 6.75 3.75 7.42157 3.75 8.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H15.75C16.5784 20.25 17.25 19.5784 17.25 18.75V10.5C17.25 10.0858 17.5858 9.75 18 9.75C18.4142 9.75 18.75 10.0858 18.75 10.5V18.75C18.75 20.4069 17.4069 21.75 15.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V8.25C2.25 6.59315 3.59315 5.25 5.25 5.25H13.5C13.9142 5.25 14.25 5.58579 14.25 6C14.25 6.41421 13.9142 6.75 13.5 6.75H5.25Z"
                    fill="currentColor"
                  />
                </svg>
                Live
              </a>

              <a
                href="#"
                aria-label="Project Detail"
                className="flex items-center justify-center gap-1 p-4 font-bold border rounded-lg outline-none grow -text-fluid-1 font-ui hover:border-brand hover:text-brand hover:cursor-pointer text-dark-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-dark-shade focus-visible:text-brand"
              >
                Project Detail
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.2202 3.96967C13.5131 3.67678 13.9879 3.67678 14.2808 3.96967L21.7808 11.4697C21.9215 11.6103 22.0005 11.8011 22.0005 12C22.0005 12.1989 21.9215 12.3897 21.7808 12.5303L14.2808 20.0303C13.9879 20.3232 13.5131 20.3232 13.2202 20.0303C12.9273 19.7374 12.9273 19.2626 13.2202 18.9697L19.4398 12.75H3.25049C2.83627 12.75 2.50049 12.4142 2.50049 12C2.50049 11.5858 2.83627 11.25 3.25049 11.25H19.4398L13.2202 5.03033C12.9273 4.73744 12.9273 4.26256 13.2202 3.96967Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      <hr className="w-1/2 mx-auto my-16 border-dark-shade"></hr>
    </section>
  );
};

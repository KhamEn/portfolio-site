import { ContactForm } from "./ContactForm";

async function showTooltip(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("tooltip");
  setTimeout(() => element.classList.remove("tooltip"), 1000);
}

export const Contact = () => {
  return (
    <section id="contact">
      <h2 className="my-fluid-m-lg text-center font-serif text-brand">
        Get In Touch.
      </h2>

      <div className="grid grid-cols-1 gap-component md:grid-cols-5">
        <div className="md:col-span-2">
          <p>You can reach me through:</p>
          <address className="mt-fluid-2xs rounded-md border p-component not-italic shadow-plane-bl shadow-light-shade">
            <ul className="flex flex-col gap-component">
              <li>
                <a
                  href="mailto:khamen28@gmail.com"
                  className="rounded-xl text-brand outline-none hover:cursor-pointer  hover:underline focus-visible:underline "
                >
                  khamen28@gmail.com
                </a>
                <span
                  className="tooltip-open tooltip-success font-ui"
                  data-tip="Copied"
                  id="email-tooltip"
                >
                  <button
                    title="Copy email address"
                    onClick={() => {
                      navigator.clipboard.writeText("khamen28@gmail.com");
                      showTooltip("email-tooltip");
                    }}
                    className="rounded-xl p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                      />
                    </svg>
                  </button>
                </span>
              </li>
              <li>
                <a
                  href="tel:+7866205871"
                  className="rounded-xl text-brand outline-none hover:cursor-pointer hover:underline focus-visible:underline"
                >
                  (786) 620-5871
                </a>
                <span
                  className="tooltip-open tooltip-success font-ui"
                  data-tip="Copied"
                  id="phone-tooltip"
                >
                  <button
                    title="Copy phone number"
                    onClick={() => {
                      navigator.clipboard.writeText("7866205871");
                      showTooltip("phone-tooltip");
                    }}
                    className="rounded-xl p-1 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                      />
                    </svg>
                  </button>
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/khamen"
                  target="_blank"
                  className="rounded-xl text-brand outline-none hover:cursor-pointer  hover:underline focus-visible:underline"
                >
                  linkedin.com/khamen
                </a>

                <span
                  className="tooltip-open tooltip-success font-ui"
                  data-tip="Copied"
                  id="linkedin-tooltip"
                >
                  <button
                    title="Copy linkedin address"
                    onClick={() => {
                      navigator.clipboard.writeText("linkedin.com/khamen");
                      showTooltip("linkedin-tooltip");
                    }}
                    className="rounded-xl p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                      />
                    </svg>
                  </button>
                </span>
              </li>
            </ul>
          </address>
        </div>

        <div className="md:col-span-3">
          <p className="my-fluid-2xs-s inline">Or, message me from here:</p>
          <svg
            width="66"
            height="41"
            viewBox="0 0 66 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline text-dark-accent"
          >
            <g clipPath="url(#clip0_42_202)">
              <path
                d="M57.736 37.2891C59.9131 22.2622 51.4664 7.31931 37.1241 2.01772C30.2133 -0.536846 22.2213 -0.714638 15.262 1.76397C7.87174 4.39606 0.643658 10.7029 2.21773 19.3578C2.96327 23.4571 6.14581 26.6691 9.87355 28.2772C14.6139 30.3222 19.8144 29.8065 24.729 28.7216C27.8696 28.0282 26.5405 23.2068 23.3998 23.9002C19.8869 24.6757 16.1515 25.1885 12.6622 24.0269C10.2905 23.2374 7.98531 21.4747 7.26337 18.9953C5.40308 12.6062 12.1645 8.00652 17.326 6.33562C28.8369 2.60925 42.0872 6.98923 48.6468 17.2566C52.144 22.7305 53.8524 29.4869 52.9146 35.9599C52.7213 37.2944 53.2445 38.646 54.6607 39.0352C55.8356 39.358 57.5412 38.6337 57.736 37.2891L57.736 37.2891Z"
                fill="currentColor"
              />
              <path
                d="M60.4216 22.9511C57.2883 27.6758 54.155 32.4006 51.0217 37.1253L54.9482 36.6193C50.8939 32.9338 46.8397 29.2483 42.7855 25.5628C41.7867 24.6549 40.2367 24.5761 39.2499 25.5628C38.3284 26.4844 38.2471 28.1867 39.2499 29.0984C43.3042 32.7839 47.3584 36.4694 51.4126 40.1549C52.6509 41.2805 54.4225 41.031 55.3391 39.6489L64.7389 25.4747C65.4854 24.3491 64.9606 22.7084 63.8421 22.0542C62.6186 21.3386 61.1698 21.8228 60.4216 22.9511V22.9511Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_42_202">
                <rect
                  width="65.0872"
                  height="40.8635"
                  fill="white"
                  transform="matrix(-1 0 0 -1 65.0872 40.8635)"
                />
              </clipPath>
            </defs>
          </svg>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

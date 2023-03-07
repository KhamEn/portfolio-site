import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TextareaAutosize from "react-textarea-autosize";

async function showSuccessTooltip() {
  const element = document.getElementById("contact-form");
  element.classList.add("tooltip");
  setTimeout(() => element.classList.remove("tooltip"), 1000);
}

export const ContactForm = () => {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailureToast, setShowFailureToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zvkc53g",
        "contact_form",
        form.current,
        "vfrkhzCQJjnZ8x_pG"
      )
      .then(
        (result) => {
          setShowSuccessToast(true);
          document.getElementById("contact-form").reset();
          setTimeout(() => setShowSuccessToast(false), 4000);
        },
        (error) => {
          setErrorMessage(error.text);
          setShowFailureToast(true);
          setTimeout(() => setShowFailureToast(false), 4000);
        }
      );
  };

  return (
    <>
      {showSuccessToast && (
        <div className="toast font-ui -text-fluid-1">
          <div class="alert alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your message has been sent!</span>
            </div>
          </div>
        </div>
      )}
      {showFailureToast && (
        <div className="toast font-ui -text-fluid-1">
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! Your message was not sent. {errorMessage}</span>
            </div>
          </div>
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-2 rounded-md border border-light-accent p-component font-ui -text-fluid-1 text-light-accent shadow-3d-md-br shadow-light-accent "
        id="contact-form"
      >
        <label htmlFor="user_name" className="font-bold hover:cursor-pointer">
          Name
        </label>
        <input
          name="user_name"
          id="user_name"
          type="text"
          className="rounded-xl border border-light-accent bg-dark-shade p-fluid-2xs text-light-shade"
          maxLength={20}
          required
        />

        <label htmlFor="user_email" className="font-bold hover:cursor-pointer">
          Email
        </label>
        <input
          name="user_email"
          id="user_email"
          type="email"
          className="rounded-xl border border-light-accent bg-dark-shade p-fluid-2xs text-light-shade"
          required
        />

        <label
          htmlFor="message_subject"
          className="font-bold hover:cursor-pointer"
        >
          Subject
        </label>
        <input
          name="message_subject"
          id="message_subject"
          type="text"
          className="rounded-xl border border-light-accent bg-dark-shade p-fluid-2xs text-light-shade"
          required
        />

        <label
          htmlFor="message_body"
          className="font-bold hover:cursor-pointer"
        >
          Message
        </label>
        <TextareaAutosize
          name="message_body"
          id="message_body"
          className="rounded-xl border border-light-accent bg-dark-shade p-fluid-2xs text-light-shade"
          minRows={5}
          required
        />

        <button
          type="submit"
          value="Send"
          className="mt-fluid-m-lg flex grow items-center justify-center gap-1 rounded-xl border border-dark-accent p-4 font-ui -text-fluid-1 font-bold text-dark-accent outline-none hover:cursor-pointer hover:bg-dark-accent hover:text-dark-shade focus-visible:bg-dark-accent focus-visible:text-dark-shade"
        >
          SEND MESSAGE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </>
  );
};

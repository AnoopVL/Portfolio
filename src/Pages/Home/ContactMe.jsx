import React from "react";

export default function ContactMe() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();

    alert("Submitted !!");
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbwPpgMmCSgsoOSJisKthTVNNRDZqUOa1-YIbdHK6kUxwIGzI16ZW83tS4VrPgoZcFG1Lw/exec",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out anytime! I'm available for questions or
          discussions on anything.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={(e) => Submit(e)}>
        <div className="container">
          <label htmlFor="Fname" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="Fname"
              id="Fname"
              required
            />
          </label>
          <label htmlFor="Lname" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="Lname"
              id="Lname"
              required
            />
          </label>
          <label htmlFor="Email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="Email"
              className="contact--input text-md"
              name="Email"
              id="Email"
              required
            />
          </label>
          <label htmlFor="Pnum" className="contact--label">
            <span className="text-md">Phone-number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="Pnum"
              id="Pnum"
              required
            />
          </label>
        </div>

        <label htmlFor="Message" className="contact--label">
          <span className="text-md">Message</span>
          <input
            type="text"
            className="contact--input text-md"
            name="Message"
            id="Message"
            required
          />
          {/* <textarea
            className="contact--input text-md"
            id="Message"
            rows="8"
            placeholder="Type your Message..."
          /> */}
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}

import React from "react";

const Contact = () => {
  return (
    <section className="contact-section flex  p align-center" id="contact">
      <div className="flex justify-center">
        <div className="flex column  gap text-container">
          <h2>Become a partner</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            doloribus eveniet commodi soluta fugiat repellat ducimus nam
            provident? Placeat laborum perspiciatis eveniet ad at neque possimus
            omnis delectus sunt quibusdam.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-primary p border-radius flex column align-center justify-evenly contact-form">
          <h2>Contact us</h2>
          <form className="flex column gap w-full ">
            <input type="text" placeholder="email" className="input " />
            <input type="text" placeholder="station name" className="input" />
            <textarea placeholder="message" className="input"></textarea>
          </form>
          <button className="btn-style bg-secondary text-black">Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

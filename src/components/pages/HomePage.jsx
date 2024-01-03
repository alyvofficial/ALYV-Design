import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5tlzoio",
        "template_s5r4ny7",
        form.current,
        "CslIJ3VaAbCLLRgng"
      )
      .then(
        (result) => {
          console.log(result.text);

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main>
      <section className="section1">
        <div className="mainSectionBox">
          <h1>MAKING YOUR BRAND STANDOUT</h1>
          <div className="altText">
            <div className="customer">
              <h3 className="altTitle">150+</h3>
              <p className="altParagraph altP1">customers</p>
            </div>
            <div className="experience">
              <h3 className="altTitle">2</h3>
              <p className="altParagraph altP2">years of experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <img
          className="logo"
          src="../../../images/Logo.svg"
          alt="ALYV Design Logo"
        />
        <h2>What we offer</h2>
        <div className="listBox">
          <div className="lists">
            <h3 className="title">Web Development</h3>
            <ol>
              <li className="olList">Frontend Development</li>
              <li className="olList">Responsive Design</li>
              <li className="olList">E-commerce Solutions</li>
              <li className="olList">CMS</li>
              <li className="olList">API Integration</li>
              <li className="olList">Web Hosting Services</li>
            </ol>
            <Link to={"/services"}>
              <button className="listButton">Learn More</button>
            </Link>
          </div>
          <img src="../../../images/arrowIcon.svg" alt="Arrow Icon" />
          <div className="lists">
            <h3 className="title">Graphic Design</h3>
            <ol>
              <li className="olList">Logo Design</li>
              <li className="olList">Print Design</li>
              <li className="olList">Packaging Design</li>
              <li className="olList">Poster Design</li>
              <li className="olList">Brochure Design</li>
              <li className="olList">Social Media Graphics</li>
            </ol>
            <Link to={"/services"}>
              <button className="listButton">Learn More</button>
            </Link>
          </div>
          <img src="../../../images/arrowIcon.svg" alt="Arrow Icon" />
          <div className="lists">
            <h3 className="title">UI / UX DESIGN</h3>
            <ol>
              <li className="olList">User Research</li>
              <li className="olList">Information Architecture</li>
              <li className="olList">User Interface Design</li>
              <li className="olList">User Experience Testing</li>
              <li className="olList">Mobile App Design</li>
              <li className="olList">Responsive Design</li>
            </ol>
            <Link to={"/services"}>
              <button className="listButton">Learn More</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section3">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="nameSubject">
            <input type="text" id="name" name="from_name" placeholder="Name"  required/>
            <input type="text" id="subject" name="subject" placeholder="Subject" required/>
          </div>
          <input type="email" id="email" name="email_id" placeholder="Email"  required/>
          <textarea name="message" id="message" placeholder="Message"  required/>
          <input type="submit" id="sendButton" value="Send" />
        </form>
      </section>
      <footer>
        <p className="copyright">
          &copy; 2023 ALYV Design is Proudly Powered by Ali Aliyev
        </p>
      </footer>
    </main>
  );
};

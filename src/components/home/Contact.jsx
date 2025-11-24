import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faClock, 
  faHeart 
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { links } from "../../const/links.const";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate form fields dynamically
  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "email") {
      if (!emailRegex.test(value)) errorMsg = "Invalid email format.";
    } else if (name === "subject") {
      if (value.trim() === "") errorMsg = "Subject is required.";
    } else if (name === "message") {
      if (value.trim() === "") errorMsg = "Message cannot be empty.";
    }
    return errorMsg;
  };

  // Handle input changes and validate in real-time
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate and update errors live
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // Check if the form is valid before submission
  const isFormValid = () => {
    let validationErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) validationErrors[field] = error;
    });

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setLoading(true);
    
    try {
      console.log("Sender started !!!!!");
      console.log("FormData: ", formData)
      const Response = await fetch(`${links.server}/email/send-email`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      }).then(r => r.json());


      if(Response.success) {
        toast.success(Response.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }else {
        toast.error(Response.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });    
      }

      setFormData({ email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to send email. Try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section"  id="contact-section" data-aos="zoom-out-up">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><FontAwesomeIcon icon={faEnvelope} /> highercareers@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> 0777 343 414 / 0776 578 657</p>
          <p><FontAwesomeIcon icon={faLocationDot} /> V976+PR5, Amaani, Mkabala na Amani stadium, Dunga Kiembeni, Zanzibar</p>
          
          <div className="school-hours">
            <h4><FontAwesomeIcon icon={faClock} /> School Hours</h4>
            <p>Monday - Friday: 7:30 AM - 3:30 PM</p>
            <p>Saturday: 8:00 AM - 12:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <div className="col">
              <label htmlFor="Email">Email:</label>
              <input 
                type="email" 
                name="email" 
                placeholder="somebody@gmail.com" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                style={{ caretColor: "black" }}
              />
            </div>
            {errors.email && <p className="error" style={{color: "red"}}>{errors.email}</p>}
          </div>

          <div>
          <div className="col">
            <label htmlFor="Subject">Subject:</label>
            <input 
              type="text" 
              name="subject" 
              placeholder="Join Request" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              style={{ caretColor: "black" }}
            />
          </div>
          {errors.subject && <p className="error" style={{color: "red"}}>{errors.subject}</p>}
          </div>

          <div>
            <div className="col">
              <label htmlFor="Message">Message:</label>
              <textarea 
              name="message" 
              placeholder="How to join the school ?" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              style={{ caretColor: "black" }}
            />
            </div>
          {errors.message && <p className="error" style={{color: "red"}}>{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          <h4 className="form-cta"><i>Let&apos;s Start a Conversation!</i></h4>
          
          <p className="form-message">
            <FontAwesomeIcon icon={faHeart} className="fas"/> 
            <i> We value every message and typically respond within 24 hours. Your journey to excellence begins with a simple hello!</i>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;

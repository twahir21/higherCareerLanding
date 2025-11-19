import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faClock, 
  faHeart 
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      await axios.post("http://localhost:3000/api/sendEmail", {
        to: formData.email,
        subject: formData.subject,
        text: formData.message,
      });

//       await fetch('https://api.resend.com/emails', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${process.env.SHULE_PLUS_KEY} ?? ""`,
//         },
//         body: JSON.stringify({
//           from: formData.email,
//           to: process.env.RECEIVER_EMAIL ?? "sample@gmail.com",
//           subject: 'hello world',
//           html: `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Email Template</title>
//     <style>
//         /* Reset styles */
//         body, html {
//             margin: 0;
//             padding: 0;
//             font-family: Arial, sans-serif;
//             line-height: 1.6;
//             color: #333333;
//             background-color: #f6f6f6;
//         }
        
//         /* Container */
//         .email-container {
//             max-width: 600px;
//             margin: 0 auto;
//             background-color: #ffffff;
//             border: 1px solid #e0e0e0;
//             border-radius: 8px;
//             overflow: hidden;
//         }
        
//         /* Header */
//         .email-header {
//             background-color: #4a90e2;
//             color: #ffffff;
//             padding: 20px;
//             text-align: center;
//         }
        
//         .email-header h1 {
//             margin: 0;
//             font-size: 24px;
//             font-weight: bold;
//         }
        
//         /* Content */
//         .email-content {
//             padding: 30px;
//         }
        
//         .subject {
//             font-size: 18px;
//             font-weight: bold;
//             color: #2c3e50;
//             margin-bottom: 20px;
//             padding-bottom: 10px;
//             border-bottom: 2px solid #f0f0f0;
//         }
        
//         .message {
//             font-size: 16px;
//             line-height: 1.6;
//             color: #555555;
//         }
        
//         /* Footer */
//         .email-footer {
//             background-color: #f8f9fa;
//             padding: 20px;
//             text-align: center;
//             font-size: 14px;
//             color: #666666;
//             border-top: 1px solid #e0e0e0;
//         }
        
//         /* Responsive */
//         @media only screen and (max-width: 600px) {
//             .email-container {
//                 margin: 10px;
//                 border-radius: 0;
//             }
            
//             .email-content {
//                 padding: 20px;
//             }
//         }
//     </style>
// </head>
// <body>
//     <div class="email-container">

//         <div class="email-header">
//             <h1>Message Notification</h1>
//         </div>
        

//         <div class="email-content">
//             <div class="subject">
//                 {{subject}}
//             </div>
            
//             <div class="message">
//                 {{message}}
//             </div>
//         </div>
        

//         <div class="email-footer">
//             <p>This is an automated message. Please do not reply to this email.</p>
//             <p>&copy; 2025 Your Company. All rights reserved.</p>
//         </div>
//     </div>
// </body>
// </html>         
//         `,
//         }),
//       });

      toast.success("✅ Your email was sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({ email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      toast.error("❌ Failed to send email. Try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Error sending email:", error);
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
          <label htmlFor="Email">Email:</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ caretColor: "black" }}
          />
          {errors.email && <p className="error" style={{color: "red"}}>{errors.email}</p>}

          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
            style={{ caretColor: "black" }}
          />
          {errors.subject && <p className="error" style={{color: "red"}}>{errors.subject}</p>}

          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            style={{ caretColor: "black" }}
          />
          {errors.message && <p className="error" style={{color: "red"}}>{errors.message}</p>}

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

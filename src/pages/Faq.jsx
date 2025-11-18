import "../styles/Faq.css";
import useFaq from "../hooks/useFaq";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Faq = () => {

    useFaq();

  return (
    <div>

    <div className="faq-container">
        
        <div className="title-faq">
            <h2>❓ Frequently Asked Questions</h2>
            <p>Find answers to common questions about the HigherCareer system, or <Link to="/#contact-section">contact our support</Link></p>
        </div>


        <main className="main-content">
            <section className="faq-section">
                <div className="faq-item" data-expanded="false">
                    <div className="faq-question">
                        <h3>1. What curriculum does the school follow, and what are the class sizes?</h3>
                        <span className="toggle-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        {/* <p>To add a new student, go to the &#34;Manage Students&#34; section, click on &#34;Add Student,&#34; and fill out the required details.</p> */}
                        <p>We follow the National Curriculum (BMZ). Our focus is on holistic development and academic excellence. To ensure personalized attention, our average class size is 20 students, supported by a teacher-to-student ratio of 1:15.</p>
                    </div>
                </div>

                <div className="faq-item" data-expanded="false">
                    <div className="faq-question">
                        <h3>2. What is the fee structure, and are there any additional costs?</h3>
                        <span className="toggle-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>Our annual fee for the 2026/27 is 505,000/= to 720,000/=. This includes tuition fees, registration and initial fees for primary and nursery. Additional costs may apply for optional programs such as trips, or specialized sports equipment. Please view our Fees schedule for <a href="/nursery-fees">Nursery</a> and <a href="/primary-fees">Primary</a></p>
                    </div>
                </div>

                <div className="faq-item" data-expanded="false">
                    <div className="faq-question">
                        <h3>3. What extracurricular activities and support programs are offered?</h3>
                        <span className="toggle-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>We offer a wide range of activities focusing on talent development, including Competitive Debate, Visual Arts, and Football. We also provide robust student support services, including counseling, academic tutoring, and a dedicated knowlege of islamic education and Arabic learning</p>
                    </div>
                </div>

                <div className="faq-item" data-expanded="false">
                    <div className="faq-question">
                        <h3>4. What are the school&#39;s hours, and do you offer before/after-school care</h3>
                        <span className="toggle-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>The school day runs from 8:00 AM to 3:30 PM. Yes, we provide Before-School Care starting at 7:30 AM</p>
                    </div>
                </div>

                <h4>Still can&#39;t find your answer?</h4>
                <p className="happy">We are happy to help</p>
                
                    
                <Link to="/#contact-section" className="faq-link">
                <button>
                <FontAwesomeIcon icon={faMessage} className="faq-icon"/>
                Chat with us
                </button>
                </Link>
            </section>
        </main>
    </div>
    </div>
  )
}

export default Faq
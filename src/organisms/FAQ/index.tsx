import React from "react";
import SingleFAQ from "../../atom/FAQQuestions";
import './FAQ.scss'
const faqList = [
  {
    question: "Can I work on a project I started before the hackathon?",
    desc: "lorememem",
  },
  { question: "What happens if I need help during the hackathon?", desc: "" },
  {
    question: `What happens if I don't have an idea for a project?
    `,
    desc: "",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    desc: "",
  },
  {
    question: "What happens after the hackathon ends",
    desc: "",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    desc: "",
  },
];
const FAQ = () => {
  return (
    <div className="FAQ-wrapper">
      <div className="FAQ">
        <h1>
          Frequently Ask <br />
          <span className="linear">Question</span>
        </h1>
        <p className="we-got">
          We got answers to the questions that you might want to ask about
          <strong> getlinked Hackathon 1.0</strong>
        </p>
        <div className="questions-answer">
          {faqList.map((faq) => (
            <SingleFAQ question={faq.question} answer={faq.desc} />
          ))}
        </div>
        <img src="/public/images/star pu.svg" alt="" className="star star-pu"/>
        
      </div>
      <div className="cwok-container">
        <img src="/images/cwok_casual_21 1.png" alt="" />

        {/* <img src="/public/images/sata gra.svg" alt="" /> */}
        <img src="/public/images/sata gra.svg" alt="" className="star star-sata1" />
        <img src="/public/images/sata gra.svg" alt=""  className="star star-sata2"/>
        <img src="/public/images/star.svg" alt="" className='star white-star'/>
        <img src="/images/questionmark.png" alt=""  className="question-mark1"/>
        <img src="/images//questionmark.png" alt=""  className="question-mark2"/>
        <img src="/images/questionmark.png" alt="" className="question-mark3" />
      </div>
      <img src="/images/star-gray.svg" alt="" className="star-gray" />
    </div>
  );
};

export default FAQ;

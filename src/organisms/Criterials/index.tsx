import React from "react";
import Button from "../../atom/Button";
import "./Criterials.scss";

const criterialList = [
  {
    title: "Innovation and Creativity",
    description: `Evaluate the uniqueness and creativity of the
        solution. Consider whether it addresses a real-world problem in a novel 
        way or introduces innovative features.`,
  },
  {
    title: "Functionality:",
    description: `Assess how well the solution works. Does it perform its 
        intended functions effectively and without major issues? Judges would
        consider the completeness and robustness of the solution.`,
  },
  {
    title: "Impact and Relevance:",
    description: `Determine the potential impact of the solution 
        in the real world. Does it address a significant problem, and is it relevant 
        to the target audience? Judges would assess the potential social, 
        economic, or environmental benefits.`,
  },
  {
    title: "Technical Complexity:",
    description: `Evaluate the technical sophistication of the solution. 
        Judges would consider the complexity of the code, the use of advanced 
        technologies or algorithms, and the scalability of the solution.`,
  },
  {
    title: "Adherence to Hackathon Rules: ",
    description: `Judges will Ensure that the team adhered 
        to the rules and guidelines of the hackathon, including deadlines, use of 
        specific technologies or APIs, and any other competition-specific requirements.`,
  },
];

const Criterials = () => {
  return (
     <div className="criterials-wrapper">
      <div className="criterial-img">
        <img src="/images/boy-girl.png" alt="" />
        <img src="/images/star (1).svg" alt="" className="star star-gray" />
        <img src="/images/star pu.svg" alt="" className="star star-pu absolute"/>
        <img src="/images/star.svg" alt="" className='star white-star absolute'/>
      </div>
      <div className="instructions">
        <h1>
          Judging Criteria <br/>
          <span>Key attributes</span>
        </h1>
        {criterialList.map((criteria) => (
          <p>
            {" "}
            <strong>{criteria.title}: </strong>
            {criteria.description}
          </p>
        ))}
        <div className="w-[10.75rem] mt-[1.75rem]">
            <Button title={"Read More"}/>
        </div>
      </div>
    </div>
  );
};

export default Criterials;

/* eslint-disable react/no-unescaped-entities */

const Accordion = () => {
    return (
       <div>
        <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What is sustainable fashion?
  </div>
  <div className="collapse-content"> 
    <p>Sustainable fashion promotes eco-friendly practices, reducing harm to the environment in clothing production.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  How do fashion trends influence consumer choices?
  </div>
  <div className="collapse-content"> 
    <p>Fashion trends inspire consumers to adopt new styles, shaping their clothing preferences.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  Why is the fashion industry criticized for labor conditions?
  </div>
  <div className="collapse-content"> 
    <p>The fashion industry faces criticism due to poor labor conditions and low wages in some production facilities.</p>
  </div>
</div>
       </div>
    );
};

export default Accordion;
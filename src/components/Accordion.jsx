import { ChevronRight } from "@untitled-ui/icons-react"
import { useState, useRef } from "react"

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const [active, setActive] = useState(null);

  const content = useRef(null);

//   const handleClick = (index) => {
//     setActiveIndex(index === activeIndex ? -1 : index)
//   }

  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
    var panel = event.currentTarget.nextElementSibling;

    if (panel.style.maxHeight){
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  return (
    <div>
      {items.map((item, index) => {
        return (<div key={index}>
          <button onClick={handleClick} className={`p-5 w-full flex justify-between border-b border-b-[#E3E3E3] accordion-btn`}>
            {item.title}
            <ChevronRight className={`accordion-arrow-anim`}/>
          </button>
          <div ref={content} className={`accordion-detail`}>
            <div className="p-5">{item.content}</div>
          </div>
        </div>)
      })}
    </div>
  )
}

export default Accordion
import { ChevronRight } from "@untitled-ui/icons-react"
import { useState } from "react"

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }
  return (
    <div>
      {items.map((item, index) => 
        <div key={item.title}>
          <button onClick={() => handleClick(index)} className={`p-5 w-full flex justify-between ${index === index.length - 1 ? "" : "border-b border-b-[#E3E3E3]"}`}>
            {item.title}
            <ChevronRight className={`accordion-arrow-anim ${index === activeIndex ? "active" : ""}`}/>
          </button>
          {index === activeIndex && (
            <div className="p-5">{item.content}</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Accordion
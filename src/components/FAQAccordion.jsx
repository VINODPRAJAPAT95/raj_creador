import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQAccordion = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.q} className="rounded-xl border border-silver/70 bg-white/80 p-4">
          <button
            onClick={() => setActive(active === i ? -1 : i)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="font-medium">{item.q}</span>
            <ChevronDown size={16} className={active === i ? "rotate-180" : ""} />
          </button>
          {active === i && <p className="mt-3 text-sm text-beige/80">{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;

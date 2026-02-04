import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

function ClickOutsideDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
      <h1 className="font-bold text-xl mb-4">
        Close Dropdown On Outside Click
      </h1>

      <div className="relative mt-6 w-64" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="w-full flex items-center justify-center 
                     border rounded-md px-4 py-2 
                     bg-white hover:bg-gray-100 
                     cursor-pointer"
        >
          Select an option
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute mt-2 w-full rounded-md border bg-white z-10 shadow-lg">
            <div className="py-1">
              {["Option 1", "Option 2", "Option 3 ", "Option 4"].map((option, index) => (
                <button
                  key={index}
                  className="block w-full px-4 py-2 text-left text-sm 
                             hover:bg-gray-200 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClickOutsideDropdown;

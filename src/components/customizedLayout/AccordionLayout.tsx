"use client";
import { useState, useEffect, JSX, ReactNode } from "react";

/**
 * @typedef {Object} AccordionProps
 * @property {string} ParentListStyle - ParentListStyle
 * @property {string} ParentButtonStyle - ParentButtonStyle
 * @property {string} ParentButtonTitle - ParentButtonTitle
 * @property {string} [ParentButtonSvgStyle] - ParentButtonSvgStyle
 * @property {ReactNode} children - children
 */
interface AccordionProps {
  ParentListStyle: string;
  ParentButtonStyle: string;
  ParentButtonTitle: string;
  ParentButtonSvgStyle?: string;
  children: ReactNode;
}

/**
 * Accordion Component
 * @param {AccordionProps} props - props
 * @return {JSX.Element} Accordion Component
 */
export default function AccordionLayout({
  ParentListStyle,
  ParentButtonStyle,
  ParentButtonSvgStyle = "w-4 h-4",
  ParentButtonTitle,
  children,
}: AccordionProps): JSX.Element {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(false);
  }, []);

  return (
    <div className={ParentListStyle}>
      <button
        className={ParentButtonStyle}
        onClick={e => {
          e.preventDefault();
          setAccordionOpen(!accordionOpen);
        }}
        aria-expanded={accordionOpen}
        aria-controls="accordion-content"
      >
        <span>{ParentButtonTitle}</span>
        <svg
          viewBox="0 0 24 24"
          className={ParentButtonSvgStyle}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {accordionOpen ? (
              <path
                d="M6 15L12 9L18 15"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M6 9L12 15L18 9"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </g>
        </svg>
      </button>
      <div
        id="accordion-content"
        role="region"
        aria-labelledby="accordion-title"
        className={`grid transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

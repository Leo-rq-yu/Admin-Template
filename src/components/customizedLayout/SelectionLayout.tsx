import React from "react";

export interface SelectOption {
  value: string;
  label: string;
}
/**
 * @typedef {Object} SelectProps
 * @property {string} FormSectionStyle - form section style
 * @property {string} FormSelectionStyle - form selection style
 * @property {string} FormLabelStyle - form label style
 * @property {string} FormLabelContext - form label context
 * @property {SelectOption[]} options - options
 * @property {string} defaultValue - default value
 * @property {(value: string) => void} onChange - on change
 */
interface SelectProps {
  FormSectionStyle: string;
  FormSelectionStyle: string;
  FormLabelStyle: string;
  FormLabelContext: string;
  options: SelectOption[];
  defaultValue?: string;
  onChange: (value: string) => void;
}

/**
 * Custom select component
 * @param {SelectProps} props - props
 * @return {JSX.Element} - CustomSelect component
 */
export default function CustomSelect({
  FormSectionStyle,
  FormSelectionStyle,
  FormLabelStyle,
  FormLabelContext,
  options,
  defaultValue,
  onChange,
}: SelectProps) {
  return (
    <div className={FormSectionStyle}>
      <select
        defaultValue={defaultValue}
        onChange={e => onChange(e.target.value)}
        className={FormSelectionStyle}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
      <label className={FormLabelStyle}>{FormLabelContext}</label>
    </div>
  );
}

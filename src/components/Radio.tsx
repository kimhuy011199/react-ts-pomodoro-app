import React from 'react';
import { RadioInterface } from '../core/interface';
import { motion } from 'framer-motion';

interface RadioProps {
  initialValue: string;
  label: string;
  name: string;
  radioList: RadioInterface[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = (props: RadioProps) => {
  const { radioList, onChange, name, label, initialValue } = props;
  const labelStyle = (value: string) =>
    name === 'font' ? { fontFamily: value } : { backgroundColor: value };

  return (
    <>
      <div className="form-control">
        <label className="form-label">{label}</label>
        <ul className="flex gap-3">
          {radioList.map((item) => (
            <li className="flex" key={item.value}>
              <motion.label
                whileTap={{ scale: 0.9 }}
                htmlFor={item.value}
                className={`h-10 w-10 flex justify-center items-center rounded-full bg-gray2 cursor-pointer font-semibold ${
                  name === 'font' &&
                  initialValue === item.value &&
                  'bg-black text-white'
                }`}
                style={labelStyle(item.style)}
              >
                {name === 'color' && item.value === initialValue && (
                  <div className="w-4 h-4 bg-white rounded-full" />
                )}
                <span className="text-sm">{item.label}</span>
              </motion.label>
              <input
                className="appearance-none"
                type="radio"
                name={name}
                value={item.value}
                id={item.value}
                onChange={onChange}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Radio;

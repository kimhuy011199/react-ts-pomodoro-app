import React, { useState } from 'react';
import Radio from './Radio';
import { ReactComponent as IconUp } from '../assets/icon-arrow-up.svg';
import { ReactComponent as IconDown } from '../assets/icon-arrow-down.svg';
import { useAppContext } from '../store/context';
import { POMO_STATE } from '../core/constants';

interface FormSettingsProps {
  closeModal: () => void;
}

const FormSettings = (props: FormSettingsProps) => {
  const { closeModal } = props;
  const { appState, setAppState, setPomoState } = useAppContext();
  const [minutes, setMinutes] = useState<number>(appState.minutes);
  const [font, setFont] = useState<string>(appState.font);
  const [color, setColor] = useState<string>(appState.color);
  const onChangeMinutes = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMinutes(+e.target.value);
  const increaseMinutes = () => setMinutes((prev) => prev + 1);
  const decreaseMinutes = () => minutes > 0 && setMinutes((prev) => prev - 1);
  const onChangeFont = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFont(e.target.value);
  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) =>
    setColor(e.target.value);
  const fontList = [
    { value: 'kumbh', label: 'Aa', style: 'Kumbh Sans' },
    { value: 'roboto', label: 'Aa', style: 'Roboto Slab' },
    { value: 'space', label: 'Aa', style: 'Space Mono' },
  ];
  const colorList = [
    { value: 'red', label: '', style: '#ff646c' },
    { value: 'cyan', label: '', style: '#01dede' },
    { value: 'pink', label: '', style: '#e77bfa' },
  ];
  const bgColor =
    appState.color === 'red'
      ? 'bg-red'
      : appState.color === 'cyan'
      ? 'bg-cyan'
      : 'bg-pink';

  const submitHandle = () => {
    setAppState({ minutes, font, color });
    setPomoState(POMO_STATE.INITIAL);
    closeModal();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="form-control">
        <label className="form-label">Minutes</label>
        <div className="relative">
          <input
            type="number"
            className="w-36 h-10 bg-gray2 rounded-lg appearance-none px-4 text-sm font-semibold focus:outline-none"
            min={1}
            max={99}
            value={minutes}
            onChange={onChangeMinutes}
          />
          <button
            onClick={increaseMinutes}
            className="absolute top-0 right-2 px-1.5 pt-2 pb-1 flex items-center"
          >
            <IconUp className="h-2" />
          </button>
          <button
            onClick={decreaseMinutes}
            className="absolute bottom-0 right-2 px-1.5 pt-1 pb-2 flex items-center"
          >
            <IconDown className="h-2" />
          </button>
        </div>
      </div>
      <Radio
        initialValue={font}
        label="Font"
        name="font"
        radioList={fontList}
        onChange={onChangeFont}
      />
      <Radio
        initialValue={color}
        label="Color"
        name="color"
        radioList={colorList}
        onChange={onChangeColor}
      />
      <button
        onClick={submitHandle}
        className={`${bgColor} absolute left-1/2 -translate-x-1/2 -bottom-6 px-10 md:px-8 font-medium md:py-2.5 py-3.5 text-white rounded-full`}
      >
        Apply
      </button>
    </div>
  );
};

export default FormSettings;

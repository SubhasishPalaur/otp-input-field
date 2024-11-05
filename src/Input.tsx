import { useEffect, useRef, useState } from "react";

interface InputFieldProps {
  fields: number;
}

export const InputField: React.FC<InputFieldProps> = ({ fields }) => {
  const [otp, setOtp] = useState<(HTMLInputElement | null  | '')[]>(
    new Array(Number(fields)).fill("")
  );

  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0]?.focus();
    }
  }, [fields]);
  const handleOnChange = (e: any, index: number) => {
    const newVal = e?.target?.value.slice(-1);
    if (!newVal) return;
    setOtp((prev) => prev.map((val, i) => (i === index ? newVal : val)));
    if (index < fields - 1 && !otp[index + 1]) {
      inputRef.current[index + 1]?.focus();
    }
  };
  const onBackSpace = (e: any, index: number) => {
    if (e.key == "Backspace") {
      setOtp((prev) => prev.map((val, i) => (i === index ? "" : val)));
      if (index == 0) return;
      inputRef.current[index - 1]?.focus();
      return;
    }
  };
  return (
    <div>
      {otp.map((val: any, index) => {
        return (
          <input
            key={index}
            type="number"
            style={styles}
            value={val}
            ref={(input) => (inputRef.current[index] = input)}
            onChange={(e) => {
              handleOnChange(e, index);
            }}
            onKeyDown={(e) => onBackSpace(e, index)}
          />
        );
      })}
    </div>
  );
};

const styles: object = {
  height: "40px",
  width: "40px",
  textAlign: "center",
  margin: "5px",
  fontSize: "1.2em",
};

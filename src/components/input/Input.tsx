import clsx from "clsx";
import { Field, FieldProps } from "formik";
import { FunctionComponent } from "react";

interface InputProps extends Partial<FieldProps> {
  errors: unknown;
  name: string;
  touched: unknown;
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  fieldClassName?: string;
  width?: string;
  as?: string;
  // handleChange?: (e: string | React.ChangeEvent<unknown>) => void;
  fieldChange?: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FunctionComponent<InputProps> = ({
  placeholder,
  type,
  className,
  width,
  errors,
  touched,
  name,
  fieldClassName,
  ...rest
}) => {
  const hasError = errors && touched;

  return (
    <div className={className}>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx(
          "bg-[#FFF3E5] border-[1px] rounded-[8px] h-[42px] px-[15px] text-[0.75rem] border-[#F77F00]  outline-0",
          width ?? " w-[100%]",
          hasError ? "border-[#f00000]" : "",
          fieldClassName
        )}
        {...rest}
      />
      {hasError ? (
        <div className="ml-[2px]">
          <p className="text-[12px] font-[400] text-[#f00000]">
            {String(errors || "Error")}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Input;

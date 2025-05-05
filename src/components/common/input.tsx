import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const baseClasses = `input input-bordered input-lg focus:outline-none placeholder:text-gray-400 bg-gray-100 text-sm text-black w-full validator shadow-sm border border-gray-300 rounded-lg ${error ? "input-error" : ""} ${className}`;

    return (
      <div className="form-control w-full space-y-1.5">
        {label && (
          <label className="label">
            <span className="label-text text-gray-600 font-semibold">{label}</span>
          </label>
        )}

        <input ref={ref} {...props} className={baseClasses} />

        <div className="label text-sm">
          {error && (
            <span className="label-text-alt text-error">{error}</span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input"; // Required when using forwardRef

export default Input;

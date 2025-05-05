import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline" | "link";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", isLoading = false, className = "", disabled, ...props }, ref) => {
    const variantClass = `btn-${variant}`;
    const baseClasses = `btn btn-lg rounded-lg w-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-sm ${variantClass}`;
    const finalDisabled = isLoading || disabled;

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${finalDisabled ? "btn-disabled cursor-not-allowed" : ""} ${className}`}
        disabled={finalDisabled}
        data-disabled={finalDisabled}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="text-sm">Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

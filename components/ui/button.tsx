import React from 'react';
import { cn } from '@/lib/utils';
type ButtonType = "default" | "outline" | "white" | "reverseOutline";

interface Props {
    className?: string;
    children: React.ReactNode;
    type?: ButtonType;
}

export const Button: React.FC<Props> = ({ className, children, type = "default" }) => {
    const variants = {
        default: {
            backgroundColor: "#141416",
            color: "white",
            border: "none",
        },
        outline: {
            backgroundColor: "transparent",
            color: "#141416",
            border: "2px solid #141416",
        },
        white: {
            backgroundColor: "white",
            color: "black",
            border: "none",
        },
        reverseOutline: {
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid white",
        },
    };

    return (
        <button
            style={variants[type]}
            className={cn(
                "font-medium h-[60px] px-[29px] rounded-2xl text-[15px] tracking-wide transition-colors duration-300 cursor-pointer",
                type === "default" && "bg-[#141416] text-white hover:bg-black",
                type === "outline" && "hover:bg-[#141416] hover:text-white",
                type === "white" && "bg-white text-black hover:bg-gray-100",
                type === "reverseOutline" && "hover:bg-white hover:text-black",
                className
            )}
        >
            {children}
        </button>
    );
};

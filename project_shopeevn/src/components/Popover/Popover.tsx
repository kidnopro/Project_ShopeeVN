import { useRef, useState } from "react";
import {
  FloatingPortal,
  useFloating,
  arrow,
  shift,
  offset,
} from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  renderPopover: React.ReactNode;
  className?: string;
}

export default function Popover({ children, className, renderPopover }: Props) {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef<HTMLElement>(null);
  const { x, y, reference, floating, strategy, middlewareData } = useFloating({
    middleware: [offset(7), shift(), arrow({ element: arrowRef })],
  });
  const showPopover = () => {
    setOpen(true);
  };
  const hidePopover = () => {
    setOpen(false);
  };

  return (
    <div
      className={className}
      ref={reference}
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
    >
      {children}

      <FloatingPortal>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={floating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: "max-content",
              }}
              initial={{ opacity: 0, transform: "scale(0)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              exit={{ opacity: 0, transform: "scale(0)" }}
              transition={{ duration: 0.2 }}
            >
              <span
                ref={arrowRef}
                className="border-x-transparent border-transparent border-b-white border-[11px] absolute translate-y-[-95%] z-10"
                style={{
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y,
                }}
              />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </div>
  );
}

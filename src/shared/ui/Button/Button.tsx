import { type ButtonHTMLAttributes, type FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  ERROR = "error",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  round?: boolean;
  background?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, background, round, ...otherProps } =
    props;

  return (
    <button
      className={classNames(styles.Button, { [styles.round]: round }, [
        className,
        styles[theme],
        styles[background],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

import * as React from 'react';
import { CSSModule } from './utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  /**
   * Sets the background color with contrasting text color
   * @see https://getbootstrap.com/docs/5.2/helpers/color-background/
   */
  color?: string;
  /**
   * Sets the background color only (Alternatively, set background & text color with `color`)
   * @see https://getbootstrap.com/docs/5.2/utilities/background/
   */
  bgColor?: string;
  /**
   * Sets the text color only (Alternatively, set background & text color with `color`)
   * @see https://getbootstrap.com/docs/5.2/utilities/colors/
   */
  textColor?: string;
  pill?: boolean;
  tag?: React.ElementType;
  innerRef?: React.Ref<HTMLElement>;
  cssModule?: CSSModule;
}

declare class Badge extends React.Component<BadgeProps> {}
export default Badge;

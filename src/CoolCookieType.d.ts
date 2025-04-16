import { FC } from "react";
declare module "coolcookie" {
  
  interface CoolCookieProps {
    message?: string;
    acceptText?: string;
    declineText?: string;
    className?: string;
    onAccept?: () => void;
    onDecline?: () => void;
  }
  const CoolCookie: FC<CoolCookieProps>;
}
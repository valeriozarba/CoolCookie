declare module "coolcookie" {
  import { FC } from "react";
  interface CoolCookieProps {
    message?: string;
    acceptText?: string;
    declineText?: string;
    className?: string;
    onAccept?: () => void;
    onDecline?: () => void;
  }
  const CoolCookie: FC<CoolCookieProps>;
  export default CoolCookie;
}

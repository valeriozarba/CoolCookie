import { useState, useEffect } from "react";

const CoolCookie = ({
  message = "Questo sito utilizza i cookie per migliorare l'esperienza utente.",
  acceptText = "Accetta",
  declineText = "Rifiuta",
  className = "", // Permette di personalizzare lo stile
  onAccept = () => {},
  onDecline = () => {},
}) => {
  const COOKIE_NAME = "cookie_consent";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_NAME);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_NAME, "accepted");
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_NAME, "declined");
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className={`coolcookie fixed bottom-0 left-0 w-full p-4 bg-gray-900 text-white flex justify-between items-center ${className}`}>
      <div className="coolcookie">
        <p className="text-sm">{message}</p>
        <div>
          <button onClick={handleAccept} className="bg-green-500 text-white px-4 py-2 rounded mr-2">{acceptText}</button>
          <button onClick={handleDecline} className="bg-red-500 text-white px-4 py-2 rounded">{declineText}</button>
        </div>
      </div>
    </div>
  );
};

export default CoolCookie;
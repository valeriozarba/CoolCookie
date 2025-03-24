# Cool Cookie Banner

Un semplice componente React per gestire la cookie policy dei siti web. Permette agli utenti di accettare o rifiutare i cookie, con opzioni di personalizzazione.

## Installazione

```sh
npm install react-cookie-policy
```

## Utilizzo

Importa e usa il componente nel tuo progetto:

```jsx
import CoolCookie from "coolcookie";

function App() {
  return (
    <div>
      <h1>Benvenuto nel sito</h1>
      <CookiePolicy
        message="Usiamo i cookie per migliorare la tua esperienza."
        acceptText="Accetta"
        declineText="Rifiuta"
        className="custom-cookie-banner"
        onAccept={() => console.log("Cookie accettati")}
        onDecline={() => console.log("Cookie rifiutati")}
      />
    </div>
  );
}

export default App;
```

## Proprietà Personalizzabili

| Prop         | Tipo     | Default | Descrizione |
|-------------|---------|---------|-------------|
| `message`   | string  | "Questo sito utilizza i cookie per migliorare l'esperienza utente." | Testo del messaggio della cookie policy |
| `acceptText` | string  | "Accetta" | Testo del pulsante di accettazione |
| `declineText` | string  | "Rifiuta" | Testo del pulsante di rifiuto |
| `className`  | string  | "" | Classe CSS personalizzata per lo stile |
| `onAccept`  | function | `() => {}` | Callback quando l'utente accetta i cookie |
| `onDecline`  | function | `() => {}` | Callback quando l'utente rifiuta i cookie |

## Stile Predefinito

Il componente ha uno stile base che può essere sovrascritto tramite la `className` personalizzata.

```css
.custom-cookie-banner {
  background: #222;
  color: white;
  padding: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
```

## Licenza

MIT License. Sentiti libero di contribuire! 🚀


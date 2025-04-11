# Vite & HeroUI Template

This is a template for creating applications using Vite 6 and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/sctg-development/vite-react-heroui-template)

## Star the project

**If you appreciate my work, please consider giving it a star! 🤩**

## Technologies Used

- [Vite 6](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [React 19](https://reactjs.org)
- [i18next](https://www.i18next.com)
- [ESLint 9](https://eslint.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## Internationalization

This template uses i18next for internationalization. The configuration and available languages are defined in the `src/i18n.ts` file.

### Adding a New Language

To add a new language to the application, follow these steps:

1. **Update the `availableLanguages` array:**
   - Open the `src/i18n.ts` file.
   - Add a new object to the `availableLanguages` array with the following properties:
     - `code`: The ISO 639-1 language code (e.g., "en-US").
     - `nativeName`: The native name of the language (e.g., "English").
     - `isRTL`: Whether the language is right-to-left (e.g., `false`).

2. **Create a Translation File:**
   - In the `src/locales/base` directory, create a new JSON file named with the language code (e.g., `en-US.json`).
   - Add the translations for the new language in this file.

3. **Update the Load Path:**
   - In the `src/i18n.ts` file, manually add a switch case to the `loadPath` function to handle the new JSON file for the added language.

### Language Switch Component

The `LanguageSwitch` component allows users to switch between the available languages. It is defined in the `src/components/language-switch.tsx` file.

- The component uses the i18n instance to change the language and update the document metadata.
- It automatically updates the document direction based on the language (left-to-right or right-to-left).
- The selected language is stored in `localStorage` to persist the user's preference.

### Example Usage

To use the `LanguageSwitch` component in your application, simply include it in your JSX:

```tsx
<LanguageSwitch availableLanguages={[{ code: "en-US", nativeName: "English", isRTL: false, isDefault: true },{ code: "fr-FR", nativeName: "Français", isRTL: false }]} />
```

or more simply using the `availableLanguages` array defined in the `src/i18n.ts` file:

```tsx
import { availableLanguages } from "@/i18n";
<LanguageSwitch availableLanguages={availableLanguages} />
```

This component will render a dropdown menu with the available languages, allowing users to switch languages easily.

### Lazy Loading

The default configuration uses the `i18next-http-backend` plugin for language lazy loading. This means that translations are loaded only when needed, improving the application's performance.

### Summary

- **Configuration:** `src/i18n.ts`
- **Translations:** `src/locales/base`
- **Language Switch:** `src/components/language-switch.tsx`

By following the steps above, you can easily add new languages and manage internationalization for your application.

## Cookie Consent

This template includes a cookie consent management system to comply with privacy regulations like GDPR. The system displays a modal dialog asking users for consent to use cookies and stores their preference in the browser's localStorage.

### Features

- Modern modal-based UI with blur backdrop
- Internationalized content for all supported languages
- Stores user preferences in localStorage
- Provides a context API for checking consent status throughout the application
- Supports both accepting and rejecting cookies

### Configuration

The cookie consent feature can be enabled or disabled through the site configuration:

1. **Enable/Disable Cookie Consent:**
   - Open the `src/config/site.ts` file
   - Set the `needCookieConsent` property to `true` or `false`:

```typescript
export const siteConfig = () => ({
  needCookieConsent: true, // Set to false if you don't need cookie consent
  // ...other configuration
});
```

### Implementation Details

- **Context Provider:** `src/contexts/cookie-consent-context.tsx` - Provides a React context to manage consent state
- **UI Component:** `src/components/cookie-consent.tsx` - Renders the consent modal using HeroUI components
- **Consent Status:** The consent status can be one of three values:
  - `pending`: Initial state, user hasn't made a decision yet
  - `accepted`: User has accepted cookies
  - `rejected`: User has rejected cookies

### Using Cookie Consent in Your Components

You can access the cookie consent status in any component using the `useCookieConsent` hook:

```tsx
import { useCookieConsent } from "@/contexts/cookie-consent-context";

const MyComponent = () => {
  const { cookieConsent, acceptCookies, rejectCookies, resetCookieConsent } = useCookieConsent();
  
  // Load analytics only if cookies are accepted
  useEffect(() => {
    if (cookieConsent === "accepted") {
      // Initialize analytics, tracking scripts, etc.
    }
  }, [cookieConsent]);
  
  // ...rest of your component
};
```

### Customization

- Modify the appearance of the consent modal in `src/components/cookie-consent.tsx`
- Add custom tracking or cookie management logic in the `acceptCookies` and `rejectCookies` functions in `src/contexts/cookie-consent-context.tsx`
- Update the cookie policy text in the language files (e.g., `src/locales/base/en-US.json`)

## Tailwind CSS 4

This template uses Tailwind CSS 4, which is a utility-first CSS framework. You can customize the styles by modifying the `tailwind.config.js` file.  
Currently HeroUI uses Tailwind CSS 3, but [@winchesHe](https://github.com/winchesHe)  create a port of HeroUI to Tailwind CSS 4, you can find it [here](https://github.com/heroui-inc/heroui/pull/4656), HeroUI packages are available at <https://github.com/heroui-inc/heroui/pull/4656#issuecomment-2651218074>.

## How to Use

To clone the project, run the following command:

```bash
git clone https://github.com/sctg-development/vite-react-heroui-template.git
```

### Manual chunk splitting

In the `vite.config.ts` file, all `@heroui` packages are manually split into a separate chunk. This is done to reduce the size of the main bundle. You can remove this configuration if you don't want to split the packages.

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/sctg-development/vite-react-heroui-template/blob/main/LICENSE).

import { useFetcher } from '@remix-run/react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { m } from 'vitest/dist/index-220c1d70';

enum Language {
  EN = 'en',
  FR = 'fr',
}

type LangContextType = [Language | null, Dispatch<SetStateAction<Language | null>>];

const LangContext = createContext<LangContextType | undefined>(undefined);

const languages: Array<Language> = Object.values(Language);

const getPreferredLanguage = () => ( navigator.language.startsWith(Language.EN) ? Language.EN : Language.FR);

function useLang() {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

function LangProvider({
  children,
  specifiedLang,
}: {
  children: ReactNode;
  specifiedLang: Language | null;
}) {
  const [lang, setLang] = useState<Language | null>(() => {
    // there's no way for us to know what the theme should be in this context
    // the client will have to figure it out before hydration.
    console.log("setting language")
    if (typeof window !== 'object') {
      console.log('no window object')
      return null;
    }

    if (specifiedLang) {
      if (languages.includes(specifiedLang)) {
        console.log('specifiedLanguage')
        return specifiedLang;
      } else {
        console.log('null')
        return null;
      }
    }

    return getPreferredLanguage();
  });

  useEffect(() => {
    const mediaQuery = navigator.language.startsWith(Language.EN);
    const handleChange = () => {
      setLang(mediaQuery ? Language.EN : Language.FR);
    };
    return () => {};
  }, []);

  const persistLanguage = useFetcher();

  // TODO: remove this when persistTheme is memoized properly
  const persistLangRef = useRef(persistLanguage);
  useEffect(() => {
    persistLangRef.current = persistLanguage;
  }, [persistLanguage]);

  const mountRun = useRef(false);

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!lang) {
      return;
    }

    persistLangRef.current.submit({ theme: lang }, { action: 'action/set-lang', method: 'post' });
  }, [lang]);

  return <LangContext.Provider value={[lang, setLang]}>{children}</LangContext.Provider>;
}

function isLang(value: unknown): value is Language {
  return typeof value === 'string' && languages.includes(value as Language);
}

export { isLang, Language, LangProvider, useLang };
import { render, screen } from '@testing-library/react';
import App from './App';
import { LanguageProvider } from './language/LanguageContext';
import {translations} from "./language/translations";

test('renders learn react link', () => {
  render(
      <LanguageProvider>
        <App />
      </LanguageProvider>
  );
  const linkElement = screen.getByText(translations['AR'].Hlkt);
  expect(linkElement).toBeInTheDocument();
});

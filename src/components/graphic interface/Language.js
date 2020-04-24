import React from 'react';
import PropTypes from 'prop-types';
 
// Translation Higher Order Component
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from 'react-switch-lang';
import en from '../../locales/en/en.json';
import es from '../../locales/es/es.json';
 
// Do this two lines only when setting up the application
setTranslations({ en, es });
setDefaultLanguage('en');
 
// If you want to remember selected language
setLanguageCookie();
 
class LanguageComponent extends React.Component {
  handleSetLanguage = (key) => () => {
    setLanguage(key);
  };
 
  render() {
    
    return (
      <div>
        <button type="button" onClick={this.handleSetLanguage('en')}>
          English
        </button>
        <button type="button" onClick={this.handleSetLanguage('es')}>
          Castellano
        </button>
      </div>
    )
  }
}
 
LanguageComponent.propTypes = {
  t: PropTypes.func.isRequired,
};
 
export default translate(LanguageComponent);
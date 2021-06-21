/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import loaderWait from '../utils/loader-wait';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

// components
import './components/app-bar';
import './components/skip-link';
import './components/hero-element';
import './components/copyright-footer';
import './components/404';

class App {
  constructor({
    button, drawer, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try { 
      this._content.innerHTML = await page.render(); 
      await page.afterRender(); 
      await loaderWait();
    } catch (error) {
      this._content.innerHTML = '<not-found></not-found>'
      console.error(error);
    }
  }
}

export default App;

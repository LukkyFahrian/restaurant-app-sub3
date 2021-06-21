/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
class NotFound extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="error-container__notfound">
            <h2 tabindex="0" class="error-message">404 not found :(</h2>
        </div>
        `;
    }
  }
  
  customElements.define('not-found', NotFound);
  
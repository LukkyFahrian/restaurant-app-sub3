/* eslint-disable linebreak-style */
class PreLoader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="loading">
        <div id="loader">
            <video autoplay loop muted playsinline>
              <source id="loading-image" src="./loader.webm" type="video/webm">
              <source id="loading-image" src="./loader.mp4" type="video/mp4">
            </video>
        </div>
    </div>
      `;
  }
}

customElements.define('pre-loader', PreLoader);

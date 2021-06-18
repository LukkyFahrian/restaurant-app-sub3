/* eslint-disable linebreak-style */
class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="heroElement" class="hero">
      <div class="hero__inner">
          <h2 tabindex="0" class="hero__title">Blog seputar dunia kuliner</h2>
          <p tabindex="0" class="hero__tagline">Kunjungi tempat kuliner favorite dan info seputar bidang kuliner hanya disini</p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);

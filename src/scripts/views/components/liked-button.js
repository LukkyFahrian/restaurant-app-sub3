/* eslint-disable linebreak-style */
class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
        `;
  }
}

customElements.get('liked-button') || customElements.define('liked-button', LikeButton);

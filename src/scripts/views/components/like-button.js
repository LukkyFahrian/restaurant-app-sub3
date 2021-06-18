/* eslint-disable linebreak-style */
class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
      `;
  }
}

customElements.get('like-button') || customElements.define('like-button', LikeButton);

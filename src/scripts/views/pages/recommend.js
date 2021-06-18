/* eslint-disable linebreak-style */
import RestaurantDbSource from '../../data/restaurantdb';

// components
import '../components/card-restaurant';
import '../components/hero-element';
import '../components/pre-loader';
import '../components/error-message';
import '../components/headline-element';
import { createSkeletonRestoTemplate } from '../templates/template-creator';

const Recommend = {
  async render() {
    return `
      <pre-loader></pre-loader>
      <hero-element></hero-element>
      <headline-element></headline-element>
      <div id="contentMain" class="content-rest">
          <h2 tabindex="0" class="content__title">Rekomendasi Kuliner</h2>
          <div id="skeleton" class="rest-list">
            ${createSkeletonRestoTemplate(10)}
          </div>
          <div id="resto" class="rest-list">
          </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#resto');
    const skeletonTemplate = document.querySelector('#skeleton');
    try {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 900) {
          skeletonTemplate.innerHTML = '';
          restaurantsContainer.style.display = 'grid';
        }
      });
      const restaurants = await RestaurantDbSource.recommendRestaurant();
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('card-restaurant');
        restaurantItem.restaurant = restaurant;
        restaurantsContainer.appendChild(restaurantItem);
      });

      // button headline clicked
      const hdBtn = document.querySelector('.headline__button');
      const hdDesc = document.querySelector('.headline__description');
      hdBtn.addEventListener('click', () => {
        hdDesc.classList.toggle('headline__display');

        if (hdBtn.innerHTML === 'Read More') {
          hdBtn.innerHTML = 'Close';
        } else {
          hdBtn.innerHTML = 'Read More';
        }
      });
    } catch (error) {
      const contentMain = document.querySelector('.content-rest');
      const errorMessage = document.createElement('error-message');
      contentMain.appendChild(errorMessage);
    }
  },
};

export default Recommend;

const createSkeletonRestoTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="rest-item__skeleton">
        <img tabindex="0" class="rest-item__thumbnail lazyload" 
          src="./images/placeholder.png"
          alt="Skeleton">
        <div class="rest-item__content">
          <p tabindex="0" class="skeleton"></p>
          <h3 class="skeleton-city">lorem</h3>
          <p tabindex="0" class=" skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
          <div class="btn-modal">
            <a href="a" class="skeleton">Details</a>
          </div>
        </div>
      </div>
  `;
  }
  return template;
};

export { createSkeletonRestoTemplate };

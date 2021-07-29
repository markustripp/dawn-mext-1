class DeliveryOptions extends HTMLElement {
  constructor() {
    super();
    this.fetchAvailability(this.dataset.variantId);
  }

  fetchAvailability(variantId) {
    const variantSectionUrl = `${this.dataset.baseUrl}variants/${variantId}/?section_id=delivery-options&zip_code='12345'`;

    fetch(variantSectionUrl)
      .then((response) => response.text())
      .then((text) => {
        const sectionInnerHTML = new DOMParser()
          .parseFromString(text, "text/html")
          .querySelector(".shopify-section");
        this.renderPreview(sectionInnerHTML);
        console.log(sectionInnerHTML);
      })
      .catch((e) => {
        this.renderError();
      });
  }

  renderError() {
    this.innerHTML = "";
    this.appendChild(this.errorHtml);
  }

  renderPreview(sectionInnerHTML) {
    this.innerHTML = sectionInnerHTML.querySelector(
      "pickup-availability-preview"
    ).outerHTML;
  }
}

customElements.define("delivery-options", DeliveryOptions);

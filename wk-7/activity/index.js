/**
 * Sample data generated from https://json-generator.com/
 * Paste the following into the input panel and hit generate:
   [
    '{{repeat(5, 7)}}',
    {
      _id: '{{objectId()}}',
      name: '{{lorem(3, "words")}}' ,
      description: '{{lorem(1, "paragraphs")}}',
      thumbnail: '{{random("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sIxz1mp0J11Bhh8hD3jyxoY2BAU3MoocMwbqlpQmEVUGXj0M03QW3vrA7Re12IOptjg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolyYzDCT-jovkDKhSuvM-JVWIWKq7xLwBYv_9HHMNxL15pr_0vBkd1sRfFx-YCyvRA4g&usqp=CAU")}}',
      index: '{{index()}}',
      unitPrice: '{{floating(1000, 4000, 2)}}',
      quantity: '{{integer(1,20)}}',
      unitOfMeasure: '{{random("Boxes", "Pieces", "Dozen")}}'
    }
  ]
 */
const products = [
  {
    _id: "62af27383da598e5da2af35b",
    name: "ullamco officia aute",
    description:
      "Nulla aliquip ut ut sunt mollit aute mollit magna labore culpa ad incididunt. Ea nisi elit eu do. Veniam minim velit et irure consectetur in ipsum do non adipisicing enim. Sit dolore sit veniam et aliquip qui voluptate incididunt adipisicing quis aliquip adipisicing culpa.\r\n",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sIxz1mp0J11Bhh8hD3jyxoY2BAU3MoocMwbqlpQmEVUGXj0M03QW3vrA7Re12IOptjg&usqp=CAU",
    index: 0,
    unitPrice: 2796.22,
    quantity: 1,
    unitOfMeasure: "Pieces",
  },
  {
    _id: "62af27385bea36d311e27f82",
    name: "dolore magna consequat",
    description:
      "Aute exercitation pariatur aliqua ipsum nulla dolor sunt cillum in non sunt. Ad irure consequat occaecat sint quis tempor dolore incididunt aliquip dolor ea. Ipsum tempor voluptate dolor amet ipsum velit sunt enim nulla magna. Nisi consectetur amet officia commodo cillum in do. Consequat proident mollit sint Lorem cillum sint laborum ipsum sunt qui exercitation non.\r\n",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sIxz1mp0J11Bhh8hD3jyxoY2BAU3MoocMwbqlpQmEVUGXj0M03QW3vrA7Re12IOptjg&usqp=CAU",
    index: 1,
    unitPrice: 1298.79,
    quantity: 13,
    unitOfMeasure: "Pieces",
  },
  {
    _id: "62af27383e9590dc4a43b532",
    name: "sint incididunt et",
    description:
      "Labore eiusmod veniam magna commodo do labore quis. Ea eu sunt commodo eu elit ullamco cupidatat cillum id anim commodo ex. Est sint magna aute culpa magna pariatur cupidatat enim. In sit commodo officia exercitation.\r\n",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sIxz1mp0J11Bhh8hD3jyxoY2BAU3MoocMwbqlpQmEVUGXj0M03QW3vrA7Re12IOptjg&usqp=CAU",
    index: 2,
    unitPrice: 2277.52,
    quantity: 19,
    unitOfMeasure: "Pieces",
  },
  {
    _id: "62af27382d8140c9926a1417",
    name: "nulla ea anim",
    description:
      "Eu officia tempor esse do duis anim ullamco dolor adipisicing eu. Pariatur est amet laborum ea Lorem esse eu magna mollit. Sint fugiat officia fugiat adipisicing reprehenderit. Dolor duis magna deserunt amet qui veniam culpa proident sint. Aliquip incididunt ad eiusmod quis ex ut ut Lorem consequat excepteur. Et sit minim sit quis. Et et dolor voluptate nostrud.\r\n",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sIxz1mp0J11Bhh8hD3jyxoY2BAU3MoocMwbqlpQmEVUGXj0M03QW3vrA7Re12IOptjg&usqp=CAU",
    index: 3,
    unitPrice: 2709.29,
    quantity: 15,
    unitOfMeasure: "Pieces",
  },
  {
    _id: "62af27389b4d1c88df73c91c",
    name: "esse est dolore",
    description:
      "Ea culpa elit nostrud velit. Minim ea nisi est ut duis aliqua sint tempor dolore ad eiusmod aute mollit occaecat. Reprehenderit nulla id irure aliqua.\r\n",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolyYzDCT-jovkDKhSuvM-JVWIWKq7xLwBYv_9HHMNxL15pr_0vBkd1sRfFx-YCyvRA4g&usqp=CAU",
    index: 4,
    unitPrice: 1444.12,
    quantity: 6,
    unitOfMeasure: "Boxes",
  },
  {
    _id: "62af2738b0c1078cb038c8db",
    name: "voluptate deserunt proident",
    description:
      "Reprehenderit eiusmod reprehenderit ex voluptate sint aliquip mollit laborum duis eu eu ullamco ut irure. Officia sunt mollit sunt eiusmod nostrud anim ad. Exercitation et cupidatat ut ut pariatur ut voluptate ut.\r\n",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sIxz1mp0J11Bhh8hD3jyxoY2BAU3MoocMwbqlpQmEVUGXj0M03QW3vrA7Re12IOptjg&usqp=CAU",
    index: 5,
    unitPrice: 1546.91,
    quantity: 12,
    unitOfMeasure: "Pieces",
  },
];

let isDarkTheme = false;
const themeButton = document.getElementById("toggle-theme");

/**
 * We will have a main function that will be in charge of calling the rest of the functions.
 * In this function we will see an example of.
 * 1. How comments can be used as a way to communicate with other humans & your future self to describe business logic.
 * 2. Function Hoisting
 * 3. Closures
 */
function main() {
  /**
   * First lets check what the computer theme is and adapt our webpage to it.
   */
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  isDarkTheme = darkThemeMq.matches;
  setupThemeToggle();

  /**
   * We want to have toggleTheme function called when the user clicks
   */
  themeButton.addEventListener("click", toggleTheme);

  /**
   * Prepare our progress indicators
   */
  const progressSummaryOfOrder = setupProgressIndicator(
    "progress-summary-of-order"
  );
  showProgressIndicator(progressSummaryOfOrder);

  const progressPaymentDetails = setupProgressIndicator(
    "progress-payment-details"
  );
  showProgressIndicator(progressPaymentDetails);

  /**
   * Set timout outlives the life of the main function. This is an example of a closure.
   * This is because after the main function has been removed from the call stack, setTimeout()
   * remains and gets called after ther specified number of milliseconds (in this case 3000ms).
   */
  setTimeout(() => {
    /**
     * An example of hoisting. Notice that we call a function that has been
     * declared after the function has been called.
     */
    displayList();
    hideProgressIndicator(progressSummaryOfOrder);
    calculateTotalPrice(progressPaymentDetails);
  }, 3_000);
}

// let's begin the work! 🚀
main();

/**
 * When we fake a delay, lets display a progress indicator.
 */
function setupProgressIndicator(id) {
  const productProgress = document.getElementById(id);
  productProgress.indeterminate = true;
  return productProgress;
}

/**
 * Show progress indicator
 * @param {*} progress The progress element that we will be showning.
 */
function showProgressIndicator(progress) {
  progress.style.visibility = "visible";
}

/**
 * Hide progress indicator
 * @param {*} progress The progress element that we will be hidden
 */
function hideProgressIndicator(progress) {
  progress.style.visibility = "hidden";
}

function setupThemeToggle() {
  if (isDarkTheme) {
    themeButton.innerHTML = "Light theme";
  } else {
    themeButton.innerHTML = "Dark theme";
  }
}

function displayList() {
  const list = document.getElementById("list");
  // Using a forEach function to loop through the list of products
  products.forEach((product) => {
    list.innerHTML += `
    <div class="product-item">
      <div class="product-image">
        <img
          src="${product.thumbnail}"
          alt="Product Image"/>
      </div>
      <div class="product-details">
        <p>${product.name}</p>
        <p class="product-description">
          ${product.description}
        </p>
        <small class="product-price"> ${product.quantity} ${
      product.unitOfMeasure
    } · Ksh. ${formatCurrencies(product.unitPrice)}</small>
      </div>
    </div>
  `;
  });
}

function calculateTotalPrice(progressIndicator) {
  let subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const grandtotal = subtotal + tax;

  document.getElementById("subtotal").innerHTML = `Ksh. ${formatCurrencies(
    subtotal
  )}`;
  document.getElementById("tax").innerHTML = `Ksh. ${formatCurrencies(tax)}`;

  document.getElementById(
    "payment-button"
  ).innerHTML = `Pay Ksh. ${formatCurrencies(grandtotal)}`;
  hideProgressIndicator(progressIndicator);
}

function calculateSubtotal() {
  let subtotal = 0;
  products.forEach(function (product) {
    const { unitPrice, quantity } = product;
    subtotal += Number(unitPrice) * Number(quantity);
  });
  return subtotal;
}

function calculateTax(subtotal) {
  if (subtotal <= 0) return 0;
  return subtotal * 0.2;
}

function formatCurrencies(amount) {
  const formatter = Intl.NumberFormat("en-US");
  return formatter.format(amount.toFixed(0));
}

function toggleTheme() {
  let newTheme;
  if (isDarkTheme) {
    newTheme = "light";
    isDarkTheme = false;
  } else {
    newTheme = "dark";
    isDarkTheme = true;
  }
  document.documentElement.setAttribute("data-theme", newTheme);
  setupThemeToggle();
}

// class ProductCard extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' });
//     }

//     connectedCallback() {
//         this.render();
//     }

//     render() {
//         this.shadowRoot.innerHTML = `
//             <style>
//                 /* Add your CSS styles here */
//             </style>
//             <div class="card">
//                 <figure class="fig__Card">
//                     <div class="img__Card">
//                         <img src="${this.getAttribute('imgSrc')}" alt="">
//                     </div>
//                     <figcaption class="text__card">
//                         <h5 class="name__card">${this.getAttribute('name')}</h5>
//                         <div>
//                             <span class="price__card">${this.getAttribute('price')}</span>
//                             <span class="bnt__card">Agregar</span>
//                         </div>
//                     </figcaption>
//                 </figure>
//             </div>
//         `;
//     }
// }

// customElements.define('product-card', ProductCard);

// import { LitElement, html, css } from 'lit';

// class CampusShop extends LitElement {
//   static styles = css`
//     /* Aquí está tu CSS */
//     :root{
//       --color-primario:#ff702a;
//       --color-secundario: #fff;   
//       --color-ternario: #1e1d2b;
//       --color-cuarto:  #000000;
//       --color-quinto: #ffefe8; 
//       --color-sexto:#2c2b47;
//     }

//     @font-face{
//       font-family: 'Poppins', sans-serif;
//       src: url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
//     }

//     /* Resto del CSS aquí... */
//   `;

//   render() {
//     return html`
//       <!-- Aquí está tu HTML -->
//       <div class="contppal">
//         <section class="section__1">
//           <div class="header"> 
//             <i class='bx bxs-store'></i>
//             <h1 class="s1__title">CampusShop</h1>
//           </div>
//           <!-- Resto del HTML aquí... -->
//       `;
//   }
// }

// customElements.define('campus-shop', CampusShop);


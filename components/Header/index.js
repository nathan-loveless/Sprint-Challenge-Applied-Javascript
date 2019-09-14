// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() 
{
    const compHeader = document.createElement('div');
    const compSpan = document.createElement('span');
    const compH1 = document.createElement('h1');
    const compSpan2 = document.createElement('span');

    compHeader.appendChild(compSpan);
    compHeader.appendChild(compH1);
    compHeader.appendChild(compSpan2);

    compHeader.classList.add('header');
    compSpan.classList.add('date');
    compSpan2.classList.add('temp');

    compSpan.textContent = 'MARCH 28, 2019';
    compSpan2.innerHTML = '98&#176;';

    const headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(compHeader);
}

Header();

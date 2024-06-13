document.getElementById('menu').addEventListener('click', function(event) {
      var dropdown = document.getElementById('dropdown');
      dropdown.classList.toggle('open');
      event.stopPropagation(); // Prevent the click from propagating to the document
    });

    document.addEventListener('click', function(event) {
      var dropdown = document.getElementById('dropdown');
      var isClickInside = dropdown.contains(event.target) || event.target.id === 'menu';
      if (!isClickInside) {
        dropdown.classList.remove('open');
      }
    });
    
    let name;
    if(localStorage.getItem("name") != null){
      name = localStorage.getItem("name");
      let collect = document.getElementById('collect');
      collect.innerHTML = `Welcome ${name}!`;
    }
    
  let names = ["Home","Search","Cart","Delivery","Settings"];  
let itemNames = document.getElementById("itemNames");



names.forEach((element,index) => {
  itemNames.innerHTML += `${(index > 0 ? "&nbsp;&nbsp;&nbsp;&nbsp;" : '')} ${element}`;
});


let cat = document.getElementById("cat");
  let cat2 = document.getElementById("cat2");
  let work = document.getElementById("work");
function pop() {
  
  
  function slideIn() {
    cat.style.display = "block";
    cat.classList.add('slide-in');
  }

  
  function slideOut() {
    cat.classList.remove('slide-in');
    cat.classList.add('slide-out');
    setTimeout(() => {
      cat.style.display = "none";
      cat.classList.remove('slide-out');
    }, 1000); 
  }


  work.addEventListener('click', function (event) {
    slideIn();
    event.stopPropagation();
  });


  document.addEventListener('click', function (event) {
    var isClickInside = cat.contains(event.target) || event.target.id === 'cat';
      if (!isClickInside) {
        slideOut();
      }
    
  });
}

let category = ["1. 👠Shoes","  2. 👕 T-Shirts","3. 👖Trousers"," 4. 🥾 Boots","5. 🧦Stockings","6. 💍 Jewelry","7. 👗Dress"];
  
  category.forEach((element,index) => {
    
    cat2.innerHTML += `${(index > 0 ? "<br><br>":'')}${element}` ;
  });
  



let dis = document.getElementById("Amount");
let num = document.getElementById('num');
let clear1 = document.getElementById('clear1');
let clear2 = document.getElementById('clear2');
let clear3 = document.getElementById('clear3');
let clear4 = document.getElementById('clear4');
let clear5 = document.getElementById('clear5');
let clear6 = document.getElementById('clear6');
let clear7 = document.getElementById('clear7');
let clear8 = document.getElementById('clear8');

let name1 = document.getElementById("f");
let name2 = document.getElementById("g");
let name3 = document.getElementById("h");
let name4 = document.getElementById("i");
let name5 = document.getElementById("j");
let name6 = document.getElementById("k");
let name7 = document.getElementById("l");
let name8 = document.getElementById("m");

let img0 = document.getElementById("img0");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");


let price0 = document.getElementById("price0");
let price1 = document.getElementById("price1");
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");
let price4 = document.getElementById("price4");
let price5 = document.getElementById("price5");
let price6 = document.getElementById("price6");
let price7 = document.getElementById("price7");


let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");
let info4 = document.getElementById("info4");
let info5 = document.getElementById("info5");
let info6 = document.getElementById("info6");
let info7 = document.getElementById("info7");
let info8 = document.getElementById("info8");


let naira = "₦";
let fileResources = [
  {
  name:"Ruby rings", imageSrc: "lily.jpg", price: `N${4000}`
  },
  {
    name:"secondTest",imageSrc:"jean.jpeg",price: `N${50000}`
  },
  {
    name:"Ice",imageSrc:"jewel.jpg",price: `N${5000000}`
  },
  {
    name:"water",imageSrc:"boot.jpg",price: `N${1000}`
  },
  {
    name:"waterLime",imageSrc:"hood.jpg",price: `N${600}`
  },
  {
    name:"waterCake",imageSrc:"boot.jpg",price: `N${8000}`
  },
  {
    name:"waterDrink",imageSrc:"hood.jpg",price: `N${8800}`
  },
  {
    name:"waterFish",imageSrc:"boot.jpg",price: `N${1000}`
  }
  
]


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

  let element1 = fileResources[0];
  let element2 = fileResources[1];
  let element3 = fileResources[2];
  let element4 = fileResources[3];
  let element5 = fileResources[4];
  let element6 = fileResources[5];
  let element7 = fileResources[6];
  let element8 = fileResources[7];
  
  let counter = 0;
  
window.onload = function (){
  shuffle(fileResources);
  
  element1 = fileResources[0];
  element2 = fileResources[1];
  element3 = fileResources[2];
  element4 = fileResources[3];
  element5 = fileResources[4];
  element6 = fileResources[5];
  element7 = fileResources[6];
  element8 = fileResources[7];

  name1.innerHTML = element1.name;
  name2.innerHTML = element2.name;
  name3.innerHTML = element3.name;
  name4.innerHTML = element4.name;
  name5.innerHTML = element5.name;
  name6.innerHTML = element6.name;
  name7.innerHTML = element7.name;
  name8.innerHTML = element8.name;
  
  img0.src = element1.imageSrc;
  img1.src = element2.imageSrc;
  img2.src = element3.imageSrc;
  img3.src = element4.imageSrc;
  img4.src = element5.imageSrc;
  img5.src = element6.imageSrc;
  img6.src = element7.imageSrc;
  img7.src = element8.imageSrc;
  
  price0.innerHTML = element1.price;
  price1.innerHTML = element2.price;
  price2.innerHTML = element3.price;
  price3.innerHTML = element4.price;
  price4.innerHTML = element5.price;
  price5.innerHTML = element6.price;
  price6.innerHTML = element7.price;
  price7.innerHTML = element8.price;
  
  
}

let cart2 = document.getElementById('cart');

let cart3 = document.getElementById('Amount');

  function handleToast(){
    if(counter === 0){
      iziToast.warning({
        title: 'Pick',
        message: 'Please Select an item',
        timeout: 2000,
    })
   } else{
      cart();
    }
  }
    
    
cart2.addEventListener('click',handleToast);
cart3.addEventListener('click',handleToast);
  
  
let valid1 = false;
let valid2 = false;
let valid3 = false;
let valid4 = false;
let valid5 = false;
let valid6 = false;
let valid7 = false;
let valid8 = false;


let tracker1 = 0;
let tracker2 = 0;
let tracker3 = 0;
let tracker4 = 0;
let tracker5 = 0;
let tracker6 = 0;
let tracker7 = 0;
let tracker8 = 0;

 function iterator(obj){
  for(const key in obj){
    if(obj.hasOwnProperty(key)){
      localStorage.setItem(key,obj[key]);
    }
  }
}

function run() {
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear1.style.display = 'inline';
    
    if(!valid1){
    counter++;
    valid1 = true;
    }
    num.innerHTML = counter;
    
    
    
    
    const data1 = {
      productName : element1.name,
      productImageSrc : element1.imageSrc,
      productPrice: element1.price
    };
    
    iterator(data1);
    
    tracker1 = 1;
    localStorage.setItem("tracker1",tracker1);
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
}

function run2() {
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear2.style.display = 'inline';
    
    if (!valid2) {
      counter++;
      valid2 = true;
    }
    num.innerHTML = counter;
    
    
    const data2 = {
      productName1: element2.name,
      productImageSrc1: element2.imageSrc,
      productPrice1: element2.price
    };
    
    iterator(data2);
    
    tracker2 = 1;
    localStorage.setItem("tracker2",tracker2);
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}

function run3() {
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear3.style.display = 'inline';
    
    if (!valid3) {
      counter++;
      valid3 = true;
    }
    num.innerHTML = counter;
    
    const data3 = {
      productName2: element3.name,
      productImageSrc2: element3.imageSrc,
      productPrice2: element3.price
    };
    
    iterator(data3);
    tracker3 = 1;
    localStorage.setItem("tracker3", tracker3);
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}

function run4() {
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear4.style.display = 'inline';
    
    if (!valid4) {
      counter++;
      valid4 = true;
    }
    num.innerHTML = counter;
    
    const data4 = {
      productName3: element4.name,
      productImageSrc3: element4.imageSrc,
      productPrice3: element4.price
    };
    
    iterator(data4);
    
    tracker4 = 1;
    localStorage.setItem("tracker4", tracker4);
    
    
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}
function run5() {
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear5.style.display = 'inline';
    
    if (!valid5) {
      counter++;
      valid5 = true;
    }
    num.innerHTML = counter;
    
    const data5 = {
      productName4: element5.name,
      productImageSrc4: element5.imageSrc,
      productPrice4: element5.price
    };
    
    iterator(data5);
    
    tracker5 = 1;
    localStorage.setItem("tracker5", tracker5);
    
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}
function run6() {
  dis.style.display = "block";
  dis.classList.add('slideIn');
  clear6.style.display = 'inline';
  
  if (!valid6) {
    counter++;
    valid6 = true;
  }
  num.innerHTML = counter;
  
  const data6 = {
      productName5: element6.name,
      productImageSrc5: element6.imageSrc,
      productPrice5: element6.price
    };
    
    iterator(data6);
    
    tracker6 = 1;
    localStorage.setItem("tracker6", tracker6);
    
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}
function run7() {
  dis.style.display = "block";
  dis.classList.add('slideIn');
  clear7.style.display = 'inline';
  
  if (!valid7) {
    counter++;
    valid7 = true;
  }
  num.innerHTML = counter;
  
  const data7 = {
      productName6: element7.name,
      productImageSrc6: element7.imageSrc,
      productPrice6: element7.price
    };
    
    iterator(data7);
    tracker7 = 1;
    localStorage.setItem("tracker7", tracker7);
    
      if (localStorage.getItem('cleared') != null) {
        localStorage.removeItem('cleared');
      }
    
}
function run8() {
  dis.style.display = "block";
  dis.classList.add('slideIn');
  clear8.style.display = 'inline';
  
  if (!valid8) {
    counter++;
    valid8 = true;
  }
  num.innerHTML = counter;
  
  const data8 = {
      productName7: element8.name,
      productImageSrc7: element8.imageSrc,
      productPrice7: element8.price
    };
    
    iterator(data8);
    tracker8 = 1;
    localStorage.setItem("tracker8", tracker8);
    if(localStorage.getItem('cleared') != null){
      localStorage.removeItem('cleared');
    }
    
}

function clearCart1() {
  counter--;
  valid1 = false;
  clear1.style.display = 'none';
  num.innerHTML = counter;
  localStorage.removeItem("tracker1");
  h
  
}
function clearCart2() {
  counter--;
  valid2 = false;
  clear2.style.display = 'none';
  num.innerHTML = counter;
  localStorage.removeItem("tracker2");
  
}
function clearCart3() {
counter--;
valid3 = false;
clear3.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker3");
}
function clearCart4(){
counter--;
valid4 = false;
clear4.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker4");

}
function clearCart5() {
counter--;
valid5 = false;
clear5.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker5");

}
function clearCart6() {
counter--;
valid6 = false;
clear6.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker6");

}
function clearCart7() {
counter--;
valid7 = false;
clear7.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker7");

}
function clearCart8() {
counter--;
valid8 = false;
clear8.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker8");

}
function cart(){
  window.location.href = "index4.html";
}

let shipping = document.getElementById('ship');
let toastTrack = 0;


  document.getElementById('ship').addEventListener('click', () => {
  const totalDuration = 10000; // 10 seconds

  // Show the iziToast with the loader
  iziToast.success({
    title: 'Connecting to server...',
    message: 'Kindly check your mail for your invoice-reciept. You will be required to attach it for delivery',
    timeout: totalDuration, // Keep the toast visible for the entire duration
    progressBar: true, // Disable the default progress bar
    position: 'topRight',
    overlay: true,
    overlayClose: false,
    icon: 'info',
    
  });

  // Redirect after the duration
  setTimeout(() => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeef8AZwm5mA-cUYpWjJ6f39PGXixGILoF4_9oPiDG7Ud46tg/viewform?usp=sf_link";
  }, totalDuration);
});
// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var items = document.querySelectorAll('.item1');

  items.forEach(function(item) {
    if (isInViewport(item)) {
      item.classList.add('visible');
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
      item.classList.remove('visible');
    }
  });
}


// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

// Show the button when the user reaches the bottom of the page
window.addEventListener('', function() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Function to smoothly scroll back to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
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


let category = ["1. 👠Shoes","  2. 👕 T-Shirts","3. 👖Trousers"," 4. 🥾 Boots","5. 🧦Stockings","6. 💍 Jewelry","7. 👗Dress"];
  
  



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











//main resources
let naira = "₦";
let fileResources = [
  {
  name:"Ruby rings", imageSrc: "lily.jpg", price: `N${4000}.00`
  },
  {
    name:"secondTest",imageSrc:"jean.jpeg",price: `N${50000}.00`
  },
  {
    name:"Ice",imageSrc:"jewel.jpg",price: `N${5000000}.00`
  },
  {
    name:"water",imageSrc:"boot.jpg",price: `N${1000}.00`
  },
  {
    name:"waterLime",imageSrc:"hood.jpg",price: `N${600}.00`
  },
  {
    name:"waterCake",imageSrc:"boot.jpg",price: `N${8000}.00`
  },
  {
    name:"waterDrink",imageSrc:"hood.jpg",price: `N${8800}.00`
  },
  {
    name:"waterFish",imageSrc:"boot.jpg",price: `N${1000}.00`
  }
  
]



//firstResourses
let fileResources1 = [
  {//edit
    name: "Shoe Vans",
    imageSrc: "realShoes/shoevans.JPG",
    price: `N${10000}.00`,
    description: "Brand: Vans, Size: 41-46, (Unboxed), Very comfortable and easy to wear"
  },
  {//edit
    name: "Louis Vuitton Sneakers",
    imageSrc: "realShoes/shoevuit.jpg",
    price: `N${24000}.00`,
    description: "Size 42-46"
  },
  {
    name: "Shoe Airforce A",
    imageSrc: "realShoes/shoeairforce 1 A.JPG",
    price: `N${15000}.00 (unboxed), N${16000}.00 (boxed)`,
    description: "Brand: Nike Airforce, Size: 38-43"
  },
  {
    name: "Shoe Airforce 1B",
    imageSrc: "realShoes/shoe airforce 1 B.JPG",
    price: `N${13500}.00 (unboxed), N${15000}.00 (boxed)`,
    description: "Brand: Airforce 1, Size: 38-42"
  },
  {
    name: "Shoe Jordan A",
    imageSrc: "realShoes/shoejordanA.JPG",
    price: `N${15000}.00 (unboxed), N${16000}.00 (boxed)`,
    description: "Brand: Jordan, Size: 38-43"
  },
  {
    name: "Shoe Retro",
    imageSrc: "realShoes/shoeretro.jpg",
    price: `N${15000}.00`,
    description: "Brand: Adidas Retro, Size: 43-46, (Unboxed)"
  },
  {//edit
    name: "Shoe New Balance",
    imageSrc: "realShoes/shoenewbal.jpg",
    price: `N${25000}.00`,
    description: "Brand: New Balance Sneakers, Size: 41-45, (Fully boxed)"
  },
  {//edit
    name: "Fashion shoes",
    imageSrc: "realShoes/shoefash.jpg",
    price: `N${20000}.00`,
    description: "Brand: Fashion shoes, Size: 40-45"
  }
  ]
  
  
  
  //secondFile
 let fileResources2 = [
  {
    name: "Shoe Ogiy",
    imageSrc: "realShoes/shoeogiy.JPG",
    price: `N${17500}.00`,
    description: "Brand: Ogiy, Size: 40-45, (Fully boxed)"
  },
  {
    name: "Shoe Naked Wolfe",
    imageSrc: "realShoes/shoe nak wolfe.JPG",
    price: `N${23000}.00`,
    description: "Brand: Naked Wolfe, Size: 38-42, (Unboxed)"
  },
  {
    name: "Slides Pinging Crocs",
    imageSrc: "slides/slidespcrocs.jpg",
    price: `N${17000}.00`,
    description: "Brand: Pinging Crocs, Size: 49-46"
  },
  {
    name: "Shoe Adidas",
    imageSrc: "realShoes/shoeaddi.JPG",
    price: `N${20000}.00`,
    description: "Brand: Adidas, Size: 42-46, (Unboxed)"
  },
  {
    name: "Shoe Supreme Airforce",
    imageSrc: "realShoes/shoesup1.JPG",
    price: `N${23000}.00`,
    description: "Brand: Supreme Airforce, Size: 38-45, (Unboxed)"
  },
  {
    name: "Shoe BL",
    imageSrc: "realShoes/shoebl.JPG",
    price: `N${13000}.00`,
    description: "New in, Size: 38-42, (Unboxed)"
  },
  {
    name: "Shoe Timberland Sneakers",
    imageSrc: "realShoes/shoetim.jpg",
    price: `N${21000}.00`,
    description: "Brand: Timberland Sneakers, Size: 40-46"
  },
  {
    name: "Shoe Clarks (Corporate Shoe)",
    imageSrc: "realShoes/shoecope.JPG",
    price: `N${44000}.00`,
    description: "Brand: Clarks (Corporate Shoe), Size: 40-46, (Fully boxed)"
  }
  ];
  
  
  //fileResouce3
  let fileResources3 = [
  {
    name: "Shoe Givenchy",
    imageSrc: "realShoes/shoegiveA.JPG",
    price: `N${25000}.00`,
    description: "Brand: Givenchy, Size: 40-45"
  },
  {
    name: "Shoe Timberland Loafers",
    imageSrc: "realShoes/shoeloaf.jpg",
    price: `N${24000}.00`,
    description: "Brand: Timberland Loafers, Size: 40-46"
  },
  {
    name: "Shoe Wallabees (Suede)",
    imageSrc: "realShoes/shoesued.jpg",
    price: `N${18000}.00`,
    description: "Brand: Wallabees (Suede), Size: 40-46"
  },
  {
    name: "Shoe Wallabees (Navy Blue)",
    imageSrc: "realShoes/shoewall.jpg",
    price: `N${18000}.00`,
    description: "Brand: Wallabees (Navy Blue), Size: 40-46"
  },
  {
    name: "Shoe Football Boots",
    imageSrc: "realShoes/shoefoot.jpg",
    price: `N${14000}.00`,
    description: "Football Boots, Size: 40-45"
  },
  {
    name: "Slides Celine (Carton Pam's)",
    imageSrc: "slides/slidesceli.JPG",
    price: `N${25000}.00`,
    description: "Brand: Celine (Carton Pam's), Size: 40-45"
  },
  {
    name: "Slides Balmian (Carton Pam's)",
    imageSrc: "slides/slidesbalman.JPG",
    price: `N${25000}.00`,
    description: "Brand: Balman (Carton Pam's), Size: 40-45"
  },
  {//edit
    name: "Hikers Crocs",
    imageSrc: "slides/slideshcrocs.jpg",
    price: `N${19000}.00`,
    description: "Size: 41-45 Unboxed"
  }
  ];
  
  
  //fileresourses4
  let fileResources4 = [
  {
    name: "Slides Givenchy (Carton Pam's)",
    imageSrc: "slides/slidesgive.JPG",
    price: `N${25000}.00`,
    description: "Brand: Givenchy (Carton Pam's), Size: 40-45"
  },
  {
    name: "Slides Stock Pam's",
    imageSrc: "slides/slidespams.jpg",
    price: `N${8000}.00`,
    description: "Stock Pam's, Size: 40-45"
  },
  {
    name: "Slides Crocs",
    imageSrc: "slides/slidescrocs.jpg",
    price: `N${15000}.00`,
    description: "Brand: Crocs, Size: 40-45 (6-11)"
  },
  {
    name: "Slides Literide Crocs",
    imageSrc: "slides/slidesride.jpg",
    price: `N${16500}.00`,
    description: "Brand: Literide Crocs, Size: 40-45 (6-11)"
  },
  {
    name: "Slides Tommy Hilfiger Slippers",
    imageSrc: "slides/slidestom.jpg",
    price: `N${5000}.00`,
    description: "Brand: Tommy Hilfiger Slippers, Size: 41-45"
  },
  {
    name: "Slide Nike Belt",
    imageSrc: "slides/slidesnike.jpg",
    price: `N${7500}.00`,
    description: "Brand: Nike Belt, Size: 40-45"
  },
  {//edit
    name: "Troser Jeans Short",
    imageSrc: "realTrousers/troserjeanshor.JPG",
    price: `N${15000}.00`,
    description: "Quality Jeans Shorts"
  },
  {//edit
    name: "Shirt Jean Jacket",
    imageSrc: "realShirt/shirtjeanjac.jpg",
    price: `N${21000}.00`,
    description: "Premium Jean Jacket"
  }
  ]
  
  
  //fileResourse5
  let fileResources5 = [
  {
    name: "Match Fit Jean",
    imageSrc: "marchingFits/matchfitjean.JPG",
    price: `N${32000}.00`,
    description: "Quality Jean Matching Fit (Short Troser)"
  },
  {//edit
    name: "Match fit Jean",
    imageSrc: "marchingFits/matchfitlong.jpg",
    price: `N${32000}.00`,
    description: "Quality Matching fit(long trouser)"
  },
  {
    name: "Troser Jean",
    imageSrc: "realTrousers/troserjeans.jpg",
    price: `N${22000}.00`,
    description: "Premium Baggy Jeans"
  },
  {
    name: "Shirt Checker",
    imageSrc: "marchingFits/shirtcheck.JPG",
    price: `N${10000}.00`,
    description: "Quality Checker Shirts"
  },
  {
    name: "Shirt Tees",
    imageSrc: "realShirt/shirttees.jpg",
    price: `N${17000}.00`,
    description: "Quality Top Notch Tees"
  },
  {
    name: "Shirt Hood",
    imageSrc: "realShirt/shirthoody.jpg",
    price: `N${18000}.00`,
    description: "Quality Hoody"
  },
  {
    name: "Shoe Givenchy",
    imageSrc: "realShoes/shoevenchy.JPG",
    price: `N${36000}.00`,
    description: "Brand: Givenchy, Size: 40-46"
  },
  {
    name: "Match Fit Short",
    imageSrc: "marchingFits/matchpfitshor.JPG",
    price: `N${25000}.00`,
    description: "Brand: Balenciaga, Quality Matching Fit"
  }
  ]
  
  
  //fileResouce6
  let fileResources6 = [
  {//edit
    name: "Airforce1",
    imageSrc: "realShoes/shoe1.jpg",
    price: `N${14000}.00`,
    description: "14000.00(Unboxed) 15000.00(boxed)"
  },
  {
    name: "Shoe x Sor",
    imageSrc: "realShoes/shoedor.JPG",
    price: `N${18000}.00`,
    description: "Quality Shoe x Sor, (Unboxed)"
  },
  {
    name: "Shoe Dr. Martin's",
    imageSrc: "realShoes/shoeDrmart.JPG",
    price: `N${45000}.00`,
    description: "Brand: Dr. Martin's, Size: 40-46"
  },
  {
    name: "Shoe Louis Vuitton Bigsole",
    imageSrc: "realShoes/shoelv.JPG",
    price: `N${35000}.00`,
    description: "Brand: Louis Vuitton Bigsole, Size: 40-46"
  },
  {
    name: "Shoe Nike",
    imageSrc: "realShoes/shoenike.JPG",
    price: `N${9000}.00`,
    description: "Brand: Nike, Size: 41-46"
  },
  {
    name: "Shirt Tees",
    imageSrc: "realShirt/shirtte.jpg",
    price: `N${12000}.00`,
    description: "Quality Round Neck Tees"
  },
  {
    name: "Shirt Jean Jacket",
    imageSrc: "realShirt/shirtjac.jpg",
    price: `N${22000}.00`,
    description: "Quality Jean Jacket"
  },
  {
    name: "Troser Shorts",
    imageSrc: "realTrousers/trosershorts.jpg",
    price: `N${12000}.00`,
    description: "Quality Shorts"
  }
  
  ];
  
  
  //fileResouces7
  let fileResources7 = [
  {
    name: "Shoe Timberland",
    imageSrc: "realShoes/shoetimber.JPG",
    price: `N${48000}.00`,
    description: "Brand: Timberland, Grade A Timberland Boots, Size: 40-45"
  },
  {
    name: "Shoe Nike SB",
    imageSrc: "realShoes/shoenikeB.JPG",
    price: `N${24000}.00`,
    description: "Brand: Nike SB, Size: 40-45"
  },
  {
    name: "Shoe Adidas Gazelle",
    imageSrc: "realShoes/shoegaze.JPG",
    price: `N${22000}.00`,
    description: "Brand: Adidas Gazelle, Size: 40-47, (Boxed)"
  },
  {
    name: "Shoe Jordan 4",
    imageSrc: "realShoes/shoedan4.JPG",
    price: `N${24000}.00`,
    description: "Brand: Jordan 4, Size: 40-46, (Boxed)"
  },
  {
    name: "Shoe Reebok",
    imageSrc: "realShoes/shoeree.JPG",
    price: `N${17000}.00`,
    description: "Brand: Reebok, Size: 42-46"
  },
  {
    name: "Shoe NY",
    imageSrc: "realShoes/shoeny.JPG",
    price: `N${23000}.00`,
    description: "Brand: NY, Size: 40-45, (Unboxed)"
  },
  {
    name: "Shoe Nike Zoom",
    imageSrc: "realShoes/shoezoom.JPG",
    price: `N${18000}.00`,
    description: "Brand: Nike Zoom, Size: 40-45"
  },
  {
    name: "Shoe Airforce 1",
    imageSrc: "realShoes/shoeforce.JPG",
    price: `N${18000}.00`,
    description: "Brand: Airforce 1, Size: 41-47"
  }
  
  ]
  
  
  //fileResource8
  let fileResources8 = [
  {
    name: "Shoe Fashion Kicks",
    imageSrc: "realShoes/shoekicks.JPG",
    price: `N${22000}.00`,
    description: "Fashion Kicks, Size: 40-45, (Fully boxed)"
  },
  {
    name: "Shoe Fendi Roma Big Sole",
    imageSrc: "realShoes/shoefendi.JPG",
    price: `N${37000}.00`,
    description: "Brand: Fendi Roma Big Sole, Size: 40-45"
  },
  {
    name: "Shoe Balenciaga Sandals",
    imageSrc: "realShoes/shoebala.jpg",
    price: `N${63000}.00`,
    description: "Brand: Balenciaga Sandals, Size: 40-45, (Fully boxed)"
  },
  {
    name: "Shoe Jordan High Dunk",
    imageSrc: "realShoes/shoedunk.jpg",
    price: `N${15000}.00`,
    description: "Brand: Jordan High Dunk, Size: 38-42"
  },
  {
    name: "Shirt Balenciaga",
    imageSrc: "realShirt/shirtciaga2.jpg",
    price: `N${19000}.00`,
    description: "Balenciaga Shirt"
  },
  {
    name: "Troser Premium Baggy Jeans",
    imageSrc: "realTrousers/troserpre.jpg",
    price: `N${25000}.00`,
    description: "Premium Baggy Jeans, Quality or Nothing 🔥"
  },
  {
    name: "Shirt Quality",
    imageSrc: "realShirt/shirtess.jpg",
    price: `N${18000}.00`,
    description: "Quality Shirts"
  },
  {
    name: "Shirt Sweater Vest",
    imageSrc: "realShirt/shirtves.jpg",
    price: `N${21000}.00`,
    description: "Quality Sweater Vest"
  }
];



function fileResources11(){
  element1 = fileResources1[0];
  element2 = fileResources1[1];
  element3 = fileResources1[2];
  element4 = fileResources1[3];
  element5 = fileResources1[4];
  element6 = fileResources1[5];
  element7 = fileResources1[6];
  element8 = fileResources1[7];
  
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
  
  
  info1.innerHTML = element1.description;
  info2.innerHTML = element2.description;
  info3.innerHTML = element3.description;
  info4.innerHTML = element4.description;
  info5.innerHTML = element5.description;
  info6.innerHTML = element6.description;
  info7.innerHTML = element7.description;
  info8.innerHTML = element8.description;
}

function fileResources22() {
element1 = fileResources2[0];
element2 = fileResources2[1];
element3 = fileResources2[2];
element4 = fileResources2[3];
element5 = fileResources2[4];
element6 = fileResources2[5];
element7 = fileResources2[6];
element8 = fileResources2[7];

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


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources33() {
element1 = fileResources3[0];
element2 = fileResources3[1];
element3 = fileResources3[2];
element4 = fileResources3[3];
element5 = fileResources3[4];
element6 = fileResources3[5];
element7 = fileResources3[6];
element8 = fileResources3[7];

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


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources44() {
element1 = fileResources4[0];
element2 = fileResources4[1];
element3 = fileResources4[2];
element4 = fileResources4[3];
element5 = fileResources4[4];
element6 = fileResources4[5];
element7 = fileResources4[6];
element8 = fileResources4[7];

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


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources55() {
element1 = fileResources5[0];
element2 = fileResources5[1];
element3 = fileResources5[2];
element4 = fileResources5[3];
element5 = fileResources5[4];
element6 = fileResources5[5];
element7 = fileResources5[6];
element8 = fileResources5[7];

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


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources66() {
element1 = fileResources6[0];
element2 = fileResources6[1];
element3 = fileResources6[2];
element4 = fileResources6[3];
element5 = fileResources6[4];
element6 = fileResources6[5];
element7 = fileResources6[6];
element8 = fileResources6[7];

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


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources77() {
element1 = fileResources7[0];
element2 = fileResources7[1];
element3 = fileResources7[2];
element4 = fileResources7[3];
element5 = fileResources7[4];
element6 = fileResources7[5];
element7 = fileResources7[6];
element8 = fileResources7[7];

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


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}

function fileResources88() {
element1 = fileResources8[0];
element2 = fileResources8[1];
element3 = fileResources8[2];
element4 = fileResources8[3];
element5 = fileResources8[4];
element6 = fileResources8[5];
element7 = fileResources8[6];
element8 = fileResources8[7];

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


info1.innerHTML = element1.description;
info2.innerHTML = element2.description;
info3.innerHTML = element3.description;
info4.innerHTML = element4.description;
info5.innerHTML = element5.description;
info6.innerHTML = element6.description;
info7.innerHTML = element7.description;
info8.innerHTML = element8.description;
}


























//shoes
let shoes = [
  {
    name:"BootTest",imageSrc:"boot.jpg",price:`N${10000}.00`
  },
  {
    name:"BootTest",imageSrc:"boot.jpg",price:`N${10000}.00`
  },
  {
    name:"BootTest",imageSrc:"boot.jpg",price:`N${10000}.00`
  },
  {
    name:"BootTest",imageSrc:"boot.jpg",price:`N${10000}.00`
  },
  {
    name:"BootTest",imageSrc:"boot.jpg",price:`N${10000}.00`
  },
  {
    name:"BootTest",imageSrc:"boot.jpg",price:`N${10000}.00`
  },
  {
    name:"BootTest",imageSrc:"boot.jpg",price:`N${10000}.00`
  },
  {
    name:"BootTest",imageSrc:"boot.jpg",price:`N${10000}.00`
  },
  
  
  ]
  
  
  //shirts
  
  
  
  
  
  //marching fits
  
  
  
  //trousers


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let imageCount = 0;
let changer = fileResources1[0];
let changer2 = fileResources1[3];
let changer3 = fileResources1[5];


let newList1 = ["realShoes/shoenewbal2.jpg","realShoes/shoenewbal1.jpg","/realShoes/shoenewbal.jpg"];
let newList2 = ["realShirt/shirtjeanjack4.jpg","realShirt/shirtjeanjac3.jpg","realShirt/shirtjeanjac2.jpg","realShirt/shirtjeanjac1.jpg"];
let newList3 = [""]
let newList4 = [""]
let newList5 = [""]

let list2 = ["realShoes/shoecope1.JPG", "realShoes/shoecope2.JPG", "realShoes/shoecope3.JPG", "realShoes/shoecope.JPG"];

let list3 = ["realShoes/shoetimber1.JPG", "realShoes/shoetimber2.JPG", "realShoes/shoetimber3.JPG", "realShoes/shoetimber.JPG"];
let list4 = ["realShoes/shoewall1.jpg", "realShoes/shoewall2.jpg", "realShoes/shoewall.jpg"];
let list5 = ["realShoes/shoezoom1.JPG", "realShoes/shoezoom2.JPG", "realShoes/shoezoom.JPG"];
let list6 = ["realShoes/shoevenchy1.JPG", "realShoes/shoevenchy.JPG"];
let list7 = ["realShoes/shoesued1.jpg", "realShoes/shoesued.jpg"];
let list8 = ["realShoes/shoeretro2.jpg", "realShoes/shoeretro.jpg", "realShoes/shoeretro.jpg"];
let list9 = ["realShoes/shoeree2.JPG", "realShoes/shoeree1.JPG", "realShoes/shoeree.JPG"];
let list10 = ["realShoes/shoeogiy3.jpg", "realShoes/shoeogiy2.jpg", "realShoes/shoeogiy1.JPG", "realShoes/shoeogiy.JPG"];
let list11 = ["realShoes/shoenikeB2.JPG", "realShoes/shoenikeB1.JPG", "realShoes/shoenikeB.JPG"];
let list12 = ["realShoes/shoelv5.JPG", "realShoes/shoelv4.JPG", "realShoes/shoelv3.JPG", "realShoes/shoelv.JPG"];
let list13 = ["realShoes/shoeloaf2.jpg", "realShoes/shoeloaf1.jpg", "realShoes/shoeloaf.jpg"];
let list14 = ["realShoes/shoekicks2.JPG", "realShoes/shoekicks1.JPG", "realShoes/shoekicks.JPG"];
let list15 = ["realShoes/shoegaze1.JPG", "realShoes/shoegaze.JPG"];
let list16 = ["realShoes/shoeforce1.png", "realShoes/shoeforce.JPG"];
let list17 = ["realShoes/shoefoot6.jpg", "realShoes/shoefoot5.jpg", "realShoes/shoefoot4.jpg", "realShoes/shoefoot.jpg"];
let list18 = ["realShoes/shoedunk3.JPG", "realShoes/shoedunk 1.jpg", "realShoes/shoedunk.jpg"];
let list19 = ["realShoes/shoeDrmart1.JPG", "realShoes/shoeDrmart.JPG"];
let list20 = ["realShoes/shoecope4.JPG", "realShoes/shoecope3.JPG", "realShoes/shoecope2.JPG", "realShoes/shoecope1.JPG", "realShoes/shoecope.JPG"];
let list21 = ["realShoes/shoebala2.jpg", "realShoes/shoebala1.jpg", "realShoes/shoebala.jpg"];
let list22 = ["realShoes/shoeaddi2.JPG", "realShoes/shoeaddi1.JPG", "realShoes/shoeaddi.JPG"];
let list23 = ["realShoes/shoeA.JPG", "realShoes/shoeA1.JPG"];
let list244 = ["realShoes/shoe nak wolfe 1.JPG", "realShoes/shoe nak wolfe.JPG"];
//shirts
let list24 = ["realShirt/shirthoody10.jpg", "realShirt/shirthoody4.jpg", "realShirt/shirthoody7.jpg", "realShirt/shirthoody6.jpg"];
let list25 = ["realShirt/shirtte11.jpg", "realShirt/shirtte10.jpg", "realShirt/shirtte9.jpg", "realShirt/shirtte.jpg"];
let list26 = ["realShirt/shirttees8.jpg", "realShirt/shirttees7.jpg", "realShirt/shirttees6.jpg", "realShirt/shirttees.jpg"];
let list27 = ["realShirt/shirtves6.jpg", "realShirt/shirtves1.jpg", "realShirt/shirtves4.jpg", "realShirt/shirtves.jpg"];
let list28 = ["realShirt/shirtjac3.jpg", "realShirt/shirtjac2.jpg", "realShirt/shirtjac1.jpg", "realShirt/shirtjac.jpg"];

let list29 = ["realShirt/shirtess4.jpg", "realShirt/shirtess3.jpg", "realShirt/shirtess2.jpg", "realShirt/shirtess.jpg"];
let list30 = ["realShirt/shirtciaga2.jpg", "realShirt/shirtciaga1.jpg", "realShirt/shirtciaga.jpg"];
//trousers
let list31 = ["realTrousers/trosershorts4.jpg", "realTrousers/trosershort3.jpg", "realTrousers/trosershorts2.jpg", "realTrousers/trosershorts1.jpg"];
let list32 = ["realTrousers/troserpre6.jpg", "realTrousers/troserpre5.jpg", "realTrousers/troserpre4.jpg", "realTrousers/troserpre.jpg"];
let list33 = ["realTrousers/troserjeans9.jpg", "realTrousers/troserjeans8.jpg", "realTrousers/troserjeans7.jpg", "realTrousers/troserjeans.jpg"];
let list34 = ["marchingFits/matchfitshorA7.JPG", "marchingFits/matchfitshorA6.JPG", "marchingFits/matchfitshorA5.JPG", "marchingFits/matchfitshorA4.JPG"];
let list35 = ["marchingFits/matchfitshor5.JPG", "marchingFits/matchfitshor4.JPG", "marchingFits/matchfitshor3.JPG", "marchingFits/matchfitshor.JPG"];
//slides
let list36 = ["slides/slidescrocs2.jpg", "slides/slidescrocs1.jpg", "slides/slidescrocs.jpg"];
let list37 = ["slides/slidesnike3.jpg", "slides/slidesnike2.jpg", "slides/slidesnike.jpg"];
let list38 = ["slides/slidespams8.jpg", "slides/slidespams7.jpg", "slides/slidespams6.jpg", "slides/slidespams.jpg"];
let list39 = ["slides/slidespcrocs3.jpg", "slides/slidespcrocs2.jpg", "slides/slidespcrocs1.jpg", "slides/slidespcrocs.jpg"];
let list40 = ["slides/slidesride2.jpg", "slides/slidesride1.jpg", "slides/slidesride.jpg"];
let list41 = ["slides/slidestom3.jpg", "slides/slidestom2.jpg", "slides/slidestom1.jpg", "slides/slidestom.jpg"];


function swapImageSource(){
  imageCount++;
  let start = setInterval(() => {
    switch(imageCount){
      case 1:
       img0.src = changer.imageSrc = "fits/fit1.jpg";
        imageCount++;
         break;
      case 2:
       img0.src = changer.imageSrc = "fits/fit2.jpg";
        imageCount++;
         break;
      case 3:
        img0.src = changer.imageSrc = "fits/fit3.jpg";
        imageCount = 1;
        break;
    }
    console.log(imageCount);
  },3000);
}

function swapImageSource2(){
  let index = 0;
  setInterval(() => {
    index++;
    
    switch(index){
      case 1:
        img5.src = list8[0];
        break;
      case 2:
        img5.src = list8[1];
        break;
      case 3:
        img5.src = list8[2];
        index = 0;
        break;
    }
    
  },4000);
}
function swapImageSource3() {
  let index = 0;
  setInterval(() => {
    index++;
    switch (index) {
    case 1:
      img0.src = list10[0];
      img1.src = list244[0];
      img2.src = list39[0];
      img3.src = list22[0];
      img7.src = list2[0];
      break;
    case 2:
      img0.src = list10[1];
      img1.src = list244[1];
      img2.src = list39[1];
      img3.src = list22[1];
      img7.src = list2[1];
      
      break;
    case 3:
      img0.src = list10[2];
      img2.src = list39[2];
      img3.src = list22[2];
      img7.src = list2[2];
      break;
    case 4:
      img0.src = list10[3];
      img2.src = list39[3];
      img7.src = list2[3];
      
      index = 0;
      break;
  }
  
  }, 4000);

}
function swapImageSource4() {
  let index = 0;
  setInterval(() => {
    index++;
    switch(index){
      case 1:
        img1.src = list13[0]
        img2.src = list7[0]
        img3.src = list4[0];
        img4.src = list17[0]
        break;
      case 2:
        img1.src = list13[1]
        img2.src = list7[1]
        img3.src = list4[1];
        img4.src = list17[1];
        break;
      case 3:
        img1.src = list13[2]
        img3.src = list4[2];
        img4.src = list17[2]
        break;
      case 4:  
        img4.src = list17[3]
        break;
        index = 0;
    }
  
  
  }, 4000);

}
function swapImageSource5() {
  let index = 0;
  setInterval(() => {
    index++;
    switch(index){
      case 1:
        img1.src = list38[0]
        img2.src = list36[0]
        img3.src = list40[0]
        img4.src = list41[0]
        img5.src = list37[0]
        break;
      case 2:
           img1.src = list38[1]
          img2.src = list36[1]
          img3.src = list40[1]
          img4.src = list41[1]
          img5.src = list37[1]
        break;
      case 3:
          img1.src = list38[2]
          img2.src = list36[2]
          img3.src = list40[2]
          img4.src = list41[2]
          img5.src = list37[2]
        
        break;
      case 4:
           img1.src = list38[3]
          img4.src = list41[3];
      
        
        index = 0;
        break;
        
    }
  
  }, 4000);

}function swapImageSource6() {
  let index = 0;
  setInterval(() => {
    index++;
    switch(index){
      case 1:
        img2.src = list33[0]
        img4.src = list26[0]
        img5.src = list24[0]
        img6.src = list6[0]
        img7.src = list34[0]
        break;
      case 2:
        img2.src = list33[1]
        img4.src = list26[1]
        img5.src = list24[1]
        img6.src = list6[1]
        img7.src = list34[1]
        break;
      case 3:
          img2.src = list33[2]
          img4.src = list26[2]
          img5.src = list24[2]
          img7.src = list34[2]
        
        break;
      case 4:
        
          img2.src = list33[3]
          img4.src = list26[3]
        img5.src = list24[3]
          img7.src = list34[3]
        
        index = 0;
        break;
        
    }
  
  }, 4000);

}
function swapImageSource7() {
  let index = 0;
  setInterval(() => {
    index++;
     switch(index){
       case 1:
        // img0.src = list24[0]
         img3.src = list12[0]
         img4.src = list11[0]
         img5.src = list25[0]
         img6.src = list28[0]
         img7.src = list31[0]
         break;
       case 2:
          //img0.src = list24[1]
            img3.src = list12[1]
            img4.src = list11[1]
            img5.src = list25[1]
            img6.src = list28[1]
            img7.src = list31[1]
         break;
        case 3:
         // img0.src = list24[2]
            img3.src = list12[2]
            img4.src = list11[2]
            img5.src = list25[2]
            img6.src = list28[2]
            img7.src = list31[2]
          
          break;
        case 4:
          //img0.src = list24[3]
            img3.src = list12[3]
            img5.src = list25[3]
            img6.src = list28[3]
            img7.src = list31[3]
          
          index = 0;
          break;
          
     }
  
  }, 4000);

}
function swapImageSource8() {
  let index = 0;
  setInterval(() => {
    index++;
      switch(index){
      case 1:
        img0.src = list3[0]
        img1.src = list11[0]
        img2.src = list15[0]
        
        img4.src = list9[0]
        img6.src = list5[0]
        img7.src = list16[0]
        break;
      case 2:
        img0.src = list3[1]
        img1.src = list11[1]
          img2.src = list15[1]
         
          img4.src = list9[1]
          img6.src = list5[1]
          img7.src = list16[1]
        break;
      case 3:
        img0.src = list3[2]
        img1.src = list11[2]
        
          
          img4.src = list9[2]
          img6.src = list5[2]
          
        break;
      case 4:
        img0.src = list3[3]
        
        index = 0;
        break;
        
     }
  
  }, 4000);

}

function swapImageSource9() {
  let index = 0;
  setInterval(() => {
    index++;
      switch(index){
        case 1:
          img0.src = list14[0]
          img2.src = list21[0]
          img3.src = list18[0]
          img4.src = list30[0]
          img5.src = list32[0]
          img6.src = list29[0]
          img7.src = list27[0]
          break;
        case 2:
          img0.src = list14[1]
            img2.src = list21[1]
            img3.src = list18[1]
            img4.src = list30[1]
            img5.src = list32[1]
            img6.src = list29[1]
            img7.src = list27[1]
          break;
        case 3:
          img0.src = list14[2]
            img2.src = list21[2]
            img3.src = list18[2]
            img4.src = list30[2]
            img5.src = list32[2]
            img6.src = list29[2]
            img7.src = list27[2]
          break;
        case 4:
            img5.src = list32[3]
            img6.src = list29[3]
            img7.src = list27[3]
          index = 0;
          break;
          
      }

  }, 4000);

}

  let element1 = fileResources1[0];
  let element2 = fileResources1[1];
  let element3 = fileResources1[2];
  let element4 = fileResources1[3];
  let element5 = fileResources1[4];
  let element6 = fileResources1[5];
  let element7 = fileResources1[6];
  let element8 = fileResources1[7];
  
  let counter = 0;
  let retuner = document.getElementById('returner');
  
  
  //categories
 
  
  function checkLocalStorage() {
    const targetKey = 'boots';
    const targetValue = '1';
    
    setInterval(() => {
      
  if(localStorage.getItem(targetKey) != null){
        
  element1 = shoes[0];
  element2 = shoes[1];
  element3 = shoes[2];
  element4 = shoes[3];
  element5 = shoes[4];
  element6 = shoes[5];
  element7 = shoes[6];
  element8 = shoes[7];

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
  
   shuffle(shoes);
   localStorage.removeItem(targetKey);
   returner.style.display = 'block';   
      }else{
        
        
      }
      
    },1000);
  
    
  }
  
  //search
  function getSearchResult(){
    let land = setInterval(() => {
      if(localStorage.getItem('searchResults') != null){
        let search = localStorage.getItem('searchResults');
        let convertBack = JSON.parse(search);
        element1 = convertBack;
        name1.innerHTML = element1.name;
        img0.src = element1.imageSrc;
        price0.innerHTML = element1.price;
        console.log(element1.name);
        localStorage.removeItem('searchResults');
        clearInterval(land);
        
      }else{
        
      }
      
    },1000);
  }
  
  
  let currentP;
  let backTract;
  let clicker = false;
  //back button
  returner.addEventListener('click', () => {
   //shuffle(fileResources1);
   if (localStorage.getItem('currentPage') != null) {
     currentP = localStorage.getItem('currentPage');
   
   }
   backTract = parseInt(currentP,10);
   backTract--;
   if(backTract == 1){
      page = 1;
      localStorage.removeItem('currentPage');
      localStorage.setItem('currentPage',page);
      window.location.href = "index2.html";
   }else if(backTract == 2){
       page = 2;
       localStorage.removeItem('currentPage');
       localStorage.setItem('currentPage', page);
       window.location.href = "index2.html";
   }else if(backTract == 3){
       page = 3;
       localStorage.removeItem('currentPage');
       localStorage.setItem('currentPage', page);
       window.location.href = "index2.html";
   }else if(backTract == 4){
        page = 4;
        localStorage.removeItem('currentPage');
        localStorage.setItem('currentPage', page);
        window.location.href = "index2.html";
   }else if(backTract == 5){
     page = 5;
     localStorage.removeItem('currentPage');
     localStorage.setItem('currentPage', page);
     window.location.href = "index2.html";
   }else if(backTract == 6){
     page = 6;
     localStorage.removeItem('currentPage');
     localStorage.setItem('currentPage', page);
     window.location.href = "index2.html";
   }else if(backTract == 7){
     page = 7;
     localStorage.removeItem('currentPage');
     localStorage.setItem('currentPage', page);
     window.location.href = "index2.html";
   }else if(backTract == 0){
     page = 0;
     localStorage.removeItem('currentPage');
     localStorage.setItem('currentPage', page);
     window.location.href = "index2.html";
   }
   console.log(backTract);
  returner.style.display = 'none';
  
   
  });
  
  
  //starting
  let page = 0;
  let check2;
window.onload = function (){
  
   
  
  
  if(localStorage.getItem('count') != null){
    dis.style.display = "block";
    dis.classList.add('slideIn');
    let pack = localStorage.getItem('count');
    let pack2 = parseInt(pack,10);
    num.innerHTML = pack2;
    counter = pack2;
    console.log(pack2);
  }
  
  document.querySelector('.holder').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.holder').style.display = 'none';
  },2000);
 
 if(localStorage.getItem('selectedColor') != null){
   let colored = localStorage.getItem('selectedColor');
   document.body.style.backgroundColor = colored;
 }
  getSearchResult();
  checkLocalStorage();
  
  
  //main
  if(page == 0){
    //swapImageSource2();
    fileResources11();
    //localStorage.setItem('first',page);
    page = 1;
  }else{
    
  }

if(localStorage.getItem('currentPage') != null){
  check2 = localStorage.getItem('currentPage');
  
  }
  
  if(check2 == 1){
    //localStorage.removeItem('first');
    //shuffle(fileResources2);
    swapImageSource3();
    fileResources22();
    localStorage.setItem('count',counter);
    returner.style.display = 'block';
    page = 2;
    
  }else if(check2 == 2){
     //shuffle(fileResources3);
     swapImageSource4();
    fileResources33();
    localStorage.setItem('count',counter);
    retuner.style.display = 'block';
    page = 3;
    
  }else if(check2 == 3){
     //shuffle(fileResources4);
     swapImageSource5();
    fileResources44();
    localStorage.setItem('count',counter);
    returner.style.display = 'block';
    page = 4;
    
  }else if(check2 == 4){
    // shuffle(fileResources5);
     swapImageSource6();
     fileResources55();
     localStorage.setItem('count',counter);
     returner.style.display = 'block';
     page = 5;
     
  }else if(check2 == 5){
    // shuffle(fileResources6);
     swapImageSource7();
     fileResources66();
     localStorage.setItem('count',counter);
     returner.style.display = 'block';
     page = 6;
     
  }else if(check2 == 6){
    // shuffle(fileResources7);
     swapImageSource8();
     fileResources77();
     localStorage.setItem('count',counter);
     returner.style.display = 'block';
     page = 7;
     
  }else if(check2 == 7){
    // shuffle(fileResources8);
     swapImageSource9();
     fileResources88();
     localStorage.setItem('count',counter);
     returner.style.display = 'block';
     page = 0;
  }
    
}

let check;
let next = document.getElementById('next');
next.addEventListener('click', () => {
  localStorage.removeItem('currentPage');
  localStorage.setItem('currentPage',page);
  window.location.href = "index2.html";
});


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

let value1;
let value2;
let value3;
let value4;
let value5;
let value6;
let value7;
let value8;

function run(event) {
  
   value1 = event.target;
   value1.disabled = true; 
   
   
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear1.style.display = 'inline';
    
    if(!valid1){
    counter++;
    localStorage.setItem('count',counter);
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

function run2(event) {
  
  value2 = event.target;
   value2.disabled = true; 
  
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear2.style.display = 'inline';
    
    if (!valid2) {
      counter++;
      localStorage.setItem('count',counter);
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

function run3(event) {
  
  value3 = event.target;
  value3.disabled = true;
  
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear3.style.display = 'inline';
    
    if (!valid3) {
      counter++;
      localStorage.setItem('count',counter);
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

function run4(event) {
  
  value4 = event.target;
  value4.disabled = true;
  
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear4.style.display = 'inline';
    
    if (!valid4) {
      counter++;
      localStorage.setItem('count',counter);
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
function run5(event) {
  
  value5 = event.target;
  value5.disabled = true;
  
    dis.style.display = "block";
    dis.classList.add('slideIn');
    clear5.style.display = 'inline';
    
    if (!valid5) {
      counter++;
      localStorage.setItem('count',counter);
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
function run6(event) {
  
  value6 = event.target;
  value6.disabled = true;
  
  dis.style.display = "block";
  dis.classList.add('slideIn');
  clear6.style.display = 'inline';
  
  if (!valid6) {
    counter++;
    localStorage.setItem('count',counter);
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
function run7(event) {
  
  value7 = event.target;
  value7.disabled = true;
  
  dis.style.display = "block";
  dis.classList.add('slideIn');
  clear7.style.display = 'inline';
  
  if (!valid7) {
    counter++;
    localStorage.setItem('count',counter);
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
function run8(event) {
  
  value8 = event.target;
  value8.disabled = true;
  
  dis.style.display = "block";
  dis.classList.add('slideIn');
  clear8.style.display = 'inline';
  
  if (!valid8) {
    counter++;
    localStorage.setItem('count',counter);
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
  
  if(value1){
  value1.disabled = false;
  }
  
  counter--;
  valid1 = false;
  clear1.style.display = 'none';
  num.innerHTML = counter;
  localStorage.removeItem("tracker1");
  h
  
}
function clearCart2() {
  
  if(value2){
  value2.disabled = false;
  }
  
  
  value2.enabled = true;
  counter--;
  valid2 = false;
  clear2.style.display = 'none';
  num.innerHTML = counter;
  localStorage.removeItem("tracker2");
  
}
function clearCart3() {
  
  if (value3) {
    value3.disabled = false;
  }
  
  value3.enabled = true;
counter--;
valid3 = false;
clear3.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker3");
}

function clearCart4(){
  
  if (value4) {
    value4.disabled = false;
  }
  
  value4.enabled = true;
counter--;
valid4 = false;
clear4.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker4");

}

function clearCart5() {
  
  if (value5) {
    value5.disabled = false;
  }
  
  value5.enabled = true;
counter--;
valid5 = false;
clear5.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker5");

}

function clearCart6() {
  
  if (value6) {
    value6.disabled = false;
  }
  
  value6.enabled = true;
counter--;
valid6 = false;
clear6.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker6");

}


function clearCart7() {
  
  if (value7) {
    value7.disabled = false;
  }
  
  value7.enabled = true;
counter--;
valid7 = false;
clear7.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker7");

}



function clearCart8() {
  
  if (value8) {
    value8.disabled = false;
  }
  
  value8.enabled = true;
counter--;
valid8 = false;
clear8.style.display = 'none';
num.innerHTML = counter;
localStorage.removeItem("tracker8");

}
function cart(){
  localStorage.setItem('count',counter);
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
function home(){
  window.location.href = "index.html";
}


function search(){
  window.location.href = "search.html";
}

function settings(){
  document.getElementById('pop').style.display = 'block';
}


const colorForm = document.getElementById('colorForm');
const pop = document.getElementById('pop');

colorForm.addEventListener('change', function() {
  const selectedColor = document.querySelector('input[name="color"]:checked').value;
  document.body.style.backgroundColor = selectedColor;
  localStorage.setItem('selectedColor',selectedColor);
});

const backer = document.getElementById('backer');
backer.addEventListener('click', function() {
// Go back or perform another action
pop.style.display = "none";
});

function coming (){
  iziToast.success({
    title:'Coming soon'
  });
}

let details1 = document.querySelector('.details1');
let details2 = document.querySelector('.details2');
let details3 = document.querySelector('.details3');
let details4 = document.querySelector('.details4');
let details5 = document.querySelector('.details5');
let details6 = document.querySelector('.details6');
let details7 = document.querySelector('.details7');
let details8 = document.querySelector('.details8');

let track1 = 1;
let track2 = 2;
let track3 = 3;
let track4 = 4;
let track5 = 5;
let track6 = 6;
let track7 = 7;
let track8 = 8;



details1.addEventListener('click', () => {
  
  localStorage.setItem('imageTracker',track1);
})
details2.addEventListener('click', () => {
  localStorage.setItem('imageTracker',track2);
})
details3.addEventListener('click', () => {
localStorage.setItem('imageTracker',track3);
})
details4.addEventListener('click', () => {
localStorage.setItem('imageTracker',track4);
})
details5.addEventListener('click', () => {
localStorage.setItem('imageTracker',track5);
})
details6.addEventListener('click', () => {
localStorage.setItem('imageTracker',track6);
})
details7.addEventListener('click', () => {
localStorage.setItem('imageTracker',track7);
})
details8.addEventListener('click', () => {
localStorage.setItem('imageTracker',track8);
})
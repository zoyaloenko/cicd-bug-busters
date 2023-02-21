import "./styles/main.scss";
// Create form
const form = document.createElement("form");
const input = document.createElement("input");
const input2 = document.createElement("input");

input.setAttribute("type", "text");
input.setAttribute("id", "iid");
input2.setAttribute("type", "submit");
input2.setAttribute("value", "Submit");

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "It works!";

// Append heading node to the DOM
const app = document.querySelector("#root");
app?.append(form);
form.appendChild(input);
form.appendChild(input2);

const getImage = () => {




  input2.addEventListener("submit", () => {
   
  });
form.addEventListener("submit", (event)=>{
  event.preventDefault()
  
  fetch(
    `https://api.unsplash.com/search/photos?client_id=u5bAUNTIlopz0D5NOD-mPjOdb-p7SXjvkS_xO76UEvE&query=${input.value}`
  ).then(response => response.json())
  .then(response => {
    


response.results.forEach(item  => {
  const imageEl = document.createElement("img")
  imageEl.setAttribute('src',`${item.urls.small}`)

app?.appendChild(imageEl);
});
  })
})





  // .then(result => console.log(1, result));
  // .then(response => console.log(2, typeof(response)))
};

// function getImage() {
//   return new Promise((resolve, reject) => {
//     fetch(
//       `https://api.unsplash.com/search/photos?client_id=u5bAUNTIlopz0D5NOD-mPjOdb-p7SXjvkS_xO76UEvE&query=cats`
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((response) => {
//         let data = response.results;
//         resolve(data);
        
//       });
//   });
// }



const watchForm = () => {
  input2.addEventListener("submit", () => {
    getImage();
  });
}; 

watchForm();
getImage();

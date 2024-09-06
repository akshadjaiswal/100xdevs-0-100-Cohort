// let globalId = 1;

//     function markAsDone(todoId) {
//       const parent = document.getElementById(todoId);
//       parent.children[2].innerHTML = "Done!"
//     }

function createChild(title, description, id) {
    const child = document.createElement("div");
    const firstGrandParent = document.createElement("div");
    firstGrandParent.innerHTML = title;
    const secondGrandParent = document.createElement("div");
    secondGrandParent.innerHTML = description;
    const thirdGrandParent = document.createElement("button");
    thirdGrandParent.innerHTML = "Mark as done";
    thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(firstGrandParent);
    child.appendChild(secondGrandParent);
    child.appendChild(thirdGrandParent);
    child.setAttribute("id", id);
    return child;
}
//State will always be anarray
//every element of state will be have an title, description and id 

function updateDomAccToState(state) {
    const parent = document.getElementById("container")
    parent.innerHTML = ""
    for (let i = 0; i < state.length; i++) {
        const child = createChild(state[i].title, state[i].description, state[i].id)
        parent.appendChild(child)
    }
}
updateDomAccToState([
    {
        title: "Akshad Gym",
        description: "At the 5:30",
        id: "1",
    },
    {
        title: " Akshad Music",
        description: "Guitar class ",
        id: "2",
    },
])

// function addTodo() {
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;
//   const parent = document.getElementById("todos");

//   parent.appendChild(createChild(title, description, globalId++));
// }
//Ugly Approach
//   const originalContainer = document.getElementById("container").innerHTML;
//   document.getElementById("container").innerHTML =
//     originalContainer +
//     `
//           <br />
//          <div>
//           <div>${title}</div>
//           <div>${description}</div>
//           <br />
//           <button>Mark as done</button>
//         </div>

//   `;

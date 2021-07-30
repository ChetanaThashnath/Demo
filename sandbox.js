const list = document.querySelector(`ul`);

const addProject = (recipe) => {
    let html =` 
        <li>
            <div>${recipe.title}</div>
        </li>


    `;

    list.innerHTML += html
}


db.collection(`recipe`).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        addrecipe(doc.data());
    });

}).catch(err => {
    console.log(err);
});

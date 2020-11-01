


// uzywamy strony https://jsonplaceholder.typicode.com/


//mozemy np wskazac konkretne dane :
//https://jsonplaceholder.typicode.com/users/2



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
        console.log(response);
        return response.json();

    })

  .then(post => {
       console.log(post)


//funkcja Fetch
       
    let article = document.getElementById(`display-data`);

    const heading = document.createElement(`h2`);

// tutaj post.title poniewaz jest to objekt typu z title 

    heading.innerText = post.title;

    article.appendChild(heading);




    const content = document.createElement(`p`);
    content.innerText = post.title;

    article.appendChild(content);

    

    });










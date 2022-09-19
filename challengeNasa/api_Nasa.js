function data(date) {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=UO4HRfcngdXaDq1oCSd8LxZBHjsea6A6NTuKNMcO&date=${date}`)
      .then((res) => res.json())
      .then((dados) => {
        console.log(dados);
  
        const div = document.querySelector("#root");
  
        div.innerHTML = `
          <h1>${dados.title}</h1>
          <p>${dados.explanation}</p>
          <img style='width:100%' src='${dados.hdurl}' alt="${dados.title}" />
          <p>${dados.date}</p>
          <p>${dados.copyright}</p>
        `;

      
      });
  }

  

  
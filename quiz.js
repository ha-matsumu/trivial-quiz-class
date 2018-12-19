class Quiz {
    constructor(_url) {
      this.data = fetch(_url)
        .then(response => {
          return response.json();
        })
        .then(response => {
          return response.results;
        })
        .then(data => {
          return data;
        });
    }  
  }
  
  const quiz = new Quiz("https://opentdb.com/api.php?amount=10");
  console.log("クイズデータ : ", quiz.data);
  
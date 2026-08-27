 let calc=localStorage.getItem('calc')|| '';
    display();
    function Update(value){
      calc+=value;
      display();
      localStorage.setItem('calc',calc);
    }
    function display(){
      document.querySelector('.js-result').innerHTML=calc;
    }

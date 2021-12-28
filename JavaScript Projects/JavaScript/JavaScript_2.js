function validateForm() {
    let x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
      alert("First and last name must be filled out");
      return false;
    }
  }

 
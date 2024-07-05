const changePhone1 = () => {
  const phone1 = document.getElementById("phone1").value;
  if (phone1.length === 3) {
    document.getElementById("phone2").focus();
  }
};

const changePhone2 = () => {
  const phone2 = document.getElementById("phone2").value;
  if (phone2.length === 4) {
    document.getElementById("phone3").focus();
  }
};

const changePhone3 = () => {
  const phone1 = document.getElementById("phone1").value;
  const phone2 = document.getElementById("phone2").value;
  const phone3 = document.getElementById("phone3").value;
  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    document.getElementById("token__button").removeAttribute("disabled");
  }
};

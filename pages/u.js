import LoginRegisterForm from "../components/LoginRegisterForm";

export default function Mepage() {
  return (
    <div>
      {LoginRegisterForm()}
    </div>
  )
}

function flip(params) {
  var x = document.getElementById("formContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var form = document.getElementById("form1");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //image upload
    var pic = document.getElementById("Image");
    pic.addEventListener("change", function (event) {
        var input = event.target;
        var file = input.files ? input.files[0] : null;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var img = document.getElementById("uploadedImage");
                img.src = e.target.result;
                img.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });
    // calling the html tags and its values
    var name = document.getElementById("name");
    var nameFull = name.value;
    //get radio button data
    var genderValue = document.querySelector('input[name="gender"]:checked');
    var genderV = genderValue.value;
    var country = document.getElementById("nationality");
    var nationality = country.value;
    var ph = document.getElementById("phone");
    var phone = ph.value;
    var mail = document.getElementById("email");
    var email = mail.value;
    var expe = document.getElementById("exp");
    var experience = expe.value;
    var ms = document.getElementById("master");
    var master = ms.value;
    var gradu = document.getElementById("graduation");
    var graduation = gradu.value;
    var hSC = document.getElementById("hsc");
    var hsc = hSC.value;
    var sSC = document.getElementById("ssc");
    var ssc = sSC.value;
    var other = document.getElementById("others");
    var others = other.value;
    var atri = document.getElementById("attri");
    var attributes = atri.value;
    var skill = document.getElementById("skills");
    var skills = skill.value;
    // make final result
    var resultfinal = "\n      <div id=\"img\">".concat(pic, "</div>\n      <h1 id=\"main-heading\" > Dynamic Resume </h1>\n      <hr>\n      <h1> Personal Information </h1>\n\n      <b>Name :   ").concat(nameFull, " </b>\n    <br />\n  \n    <b>Gender :  ").concat(genderV, " </b>   \n    \n    <br /> \n    <b>Nationality:").concat(nationality, " </b>\n    <br />\n\n     <b>Phone no : ").concat(phone, " </b>\n      <br />\n      <b>E-mail :  ").concat(email, " </b>\n      <br />\n      <hr>\n\n      <h1> Experience </h1>\n      <b> ").concat(experience, " </b>\n\n      <hr>\n\n      <h1> Academic Education </h1>\n      <b> Master :   ").concat(master, " </b>\n      <br />\n      <b> Graduation :  ").concat(graduation, " </b>\n      <br />\n      <b>H.S.C:  ").concat(hsc, " </b>\n      <br />\n      <b>S.S.C : ").concat(ssc, " </b>\n      <br />\n      <b>Others: ").concat(others, " </b>\n\n      <hr>\n\n      <h1> Attributes </h1>\n      <b> ").concat(attributes, " </b>\n      \n      <hr>\n\n      <h1> Skills </h1>\n      \n      <b> ").concat(skills, " </b> ");
    var result = document.getElementById("output");
    result.innerHTML = resultfinal;
    if (result.innerHTML == resultfinal) {
        console.log(result);
    }
    else {
        console.log("re-try again");
    }
});

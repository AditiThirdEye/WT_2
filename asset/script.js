class data {
    constructor(name ,email, gender, ag_1, ag_2, about) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.ag_1 = ag_1;
        this.ag_2 = ag_2;
        this.about = about;
    }
}

function fillIt() {
    var tab = document.getElementById('regData');
    var table = document.getElementById('regData').getElementsByTagName('tbody')[0];
    var retrievedData = localStorage.getItem("FormData");
    var arr = JSON.parse(retrievedData);
    var sh = document.getElementById('memberS');

        if (arr.length==0) {
                sh.style.visibility = "visible";
                tab.style.visibility = "hidden";
        } else {
            sh.style.visibility = "hidden";
            tab.style.visibility = "visible";

            for(i=0; i< arr.length; i++) {
                var row = table.insertRow();
                var c1 = row.insertCell(0);
                var c2 = row.insertCell(1);
                var c3 = row.insertCell(2);
                var c4 = row.insertCell(3);
                c1.innerHTML = arr[i].name;
                c2.innerHTML = arr[i].email;
                c3.innerHTML = arr[i].gender;
                c4.innerHTML = arr[i].about;
            }
        }
};

var arr = [];

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$(document).on('submit', '.regForm', function(e) {
    e.preventDefault();

    var name= document.getElementById('name');
    var email= document.getElementById('email');
    var gender= document.getElementById('gender');
    var ag_1 = document.getElementById('age_1');
    var ag_2 = document.getElementById('age_2');
    var about = document.getElementById('about');
    var terms = document.getElementById('terms');


    if (mailformat.test(email.value)==false || name.value.length <=3 || (ag_1.checked || ag_2.checked) == false || about.value.length <=2 || terms.checked==false ) {
        alert("Form was not properly Filled");
    }
    else {
        t = new data(name.value, email.value, gender.value, ag_1.checked, ag_2.checked, about.value);
        arr.push(t);
        localStorage.setItem("FormData", JSON.stringify(arr));
        var show = document.getElementById('showon');
        show.style.visibility = "visible";
        fillIt();
    }
});

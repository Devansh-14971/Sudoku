//var myDiv = document.getElementById("#myId");
//myDiv.setAttribute("style", "border-color:#FFFFFF;");
//<script type="text/javascript" src="{{url_for('static', filename='index.js')}}"></script>
//{% for i in "123456789" %}
{/* <div id="Line-{{i}}">
{% for j in "123456789" %}
    {% with Id = i+'-'+j %}
    <button id="{{Id}}">0</button>
    {% endwith %}
{% endfor %}
<br>
</div>
{% endfor %} */}

const divEl = document.getElementById('main-obj')
const Clicker = document.getElementById('Clicker')
Clicker.addEventListener("click",Generate())

function Generate(){
    for(let i = 1;i<10;i++){
        for(let j = 1;j<10;j++){
            divEl.innerHTML += `<input id=${i+'-'+j}>`
        }
        divEl.innerHTML+=`<br>`
    }
}
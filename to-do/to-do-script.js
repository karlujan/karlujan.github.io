let a = document.getElementById("add-init");
        a.addEventListener('click', addItem);
        let n = document.getElementById("new-item");
        //let ni = n.value;
        //let nit = document.createTextNode(ni);

        let myNavEl = document.getElementById("myNav");
        let navOffset = myNavEl.offsetTop;
        window.onscroll = function() {navScroll()};

        function navScroll() {
            if (window.pageYOffset > navOffset) {
                myNavEl.classList.add("sticky");
            } else {
                myNavEl.classList.remove("sticky");
             }
        }

        let counter = 0;
        let itemPairs = {};
        function addItem(){
            if (n.value.length > 0) {
                let container = document.createElement("DIV");
                container.className = "container";

                let l = document.createElement("LABEL");
                l.className = "checkbox-container";

                let c = document.createElement("INPUT");
                c.setAttribute("type", "checkbox");
                c.addEventListener("click", isChecked);

                let s = document.createElement("SPAN");
                s.className = "checkmark-span";

                let i = document.createElement("P");
                i.innerHTML = n.value;

                let d = document.createElement("BUTTON");
                d.innerHTML = "Delete";
                d.className = "remove";

                l.appendChild(c);
                l.appendChild(s);

                container.appendChild(l);
                container.appendChild(i);
                container.appendChild(d);

                document.getElementById("list-container").appendChild(container);
                n.value = "";

                d.addEventListener('click', deleteItem);

                function deleteItem(){
                    d.parentElement.remove();
                }

                function isChecked () {
                    if (i.style.textDecoration != "line-through") {
                        i.style.textDecoration = "line-through";
                    } else if (i.style.textDecoration == "line-through"){
                        i.style.textDecoration = "none";
                    }
                }
                
        }
        else {
            alert("Please type in a task");
        }
        }
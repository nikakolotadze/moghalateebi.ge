\\xn--  const searchinput = document-c13la2b5fvbaaag8qwd7b0c3ovb0c87b.getelementbyid("searchinput");const namelist = document.getelementbyid("namelist");const listitems = namelist.getelementsbytagname("li");\\ ძიების ფუნქციაsearchInput.addEventListener("keyup", () => {    const filter = searchInput.value.toLowerCase(); \\ ტექსტი პატარა ასოებით    for (let i = 0; i < listItems.length; i++) {        const item = listItems[i];        const text = item.textContent.toLowerCase(); \\ ელემენტის ტექსტი        if (text.includes(filter)) {            item.classList.add("visible"); \\ შეესაბამება ძიებას        } else {            item.classList.remove("visible"); \\ არ შეესაბამება        }    }});
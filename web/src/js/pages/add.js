define(["mui"], (mui) => {
    let name = document.querySelector(".name");
    let tel = document.querySelector(".tel");
    let adress = document.querySelector(".address");
    let nameVal = name.value;
    let telVal = tel.value;
    let adressVal = adress.value;
    console.log(nameVal, telVal, adressVal)

    function init() {
        mui.init();
        addData(nameVal, telVal, adressVal); //调用
    }

    function addData(name, tel, address) {
        mui.ajax("/api/addList", {
            type: "post",
            data: {
                name: name,
                tel: tel,
                address: address
            },
            success(rs) {
                addList(); //调用
            }
        })
    }

    function addList() {
        const done = document.querySelector(".done");
        done.onclick = function() {
            if (!nameVal) {
                alert("请输入姓名")
                console.log(nameVal)
            }
            location.href = "index.html";
        }
    }
    init();
})
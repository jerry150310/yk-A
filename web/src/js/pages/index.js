define(["mui"], (mui) => {
    function init() {
        mui.init();
        getData(); //调用
        add(); //调用
    }
    //获取数据
    function getData() {
        mui.ajax("api/list", {
            success(rs) {
                render(rs.data); //调用
                addEvent(); //调用
            }
        })
    }
    //渲染
    function render(data) {
        const mainBox = document.querySelector(".main");
        mainBox.innerHTML = data.map(item => {
            return ` <div class="content">
            <div class="content-top">
                <span>${item.name}</span>
                <span>${item.tel}</span>
                <p>${item.address}</p>
            </div>
            <div class="content-bottom">
                <div>
                    <input type="radio">
                    <p>设为默认</p>
                </div>
                <div>
                    <button class="del mui-btn mui-btn-blue mui-btn-outlined" id='alertBtn'>删除</button>
                    <button class="updata">修改</button>
                </div>
            </div>
        </div>`
        }).join('');
    }
    //绑定点击事件
    function addEvent() {
        mui(".main").on("tap", ".del", del);
        mui(".main").on("tap", ".updata", updata);
    }
    //修改事件
    function updata() {
        location.href = "updata.html";
    }

    // function delData() {
    //     mui.ajax("api/delList", {
    //         success(rs) {
    //             console.log(rs)
    //         }
    //     })
    // }
    //删除事件
    function del() {
        const parent = this.parentNode.parentNode;
        const mask = document.querySelector(".mask");
        const yes = document.querySelector(".yes");
        const no = document.querySelector(".no");
        mask.style.display = "block";
        yes.onclick = function() {
            parent.parentNode.remove(parent);
            mask.style.display = "none";
            // delData(); //调用
        }
        no.onclick = function() {
            mask.style.display = "none";
        }
    }
    //新增
    function add() {
        const add = document.querySelector(".add");
        add.onclick = function() {
            location.href = "add.html";
        }
    }
    init();
})
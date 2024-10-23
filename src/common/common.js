
function xpath_one(xpath, parent) {
    let result = "";
    let nodes = document.evaluate(
        xpath,
        parent,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    );
    if (nodes.singleNodeValue) {
        result = nodes.singleNodeValue;
    }
    return result;
}


function get_account_name() {
    return xpath_one(
        '//span[@id="nav-link-accountList-nav-line-1"]/text()',
        document
    ).textContent;
}


/**
 * 设置地址任务
 *
 * @returns {Promise<void>}
 */
async function address_task() {
    let account_name = get_account_name();
    console.log("account_name:", account_name);
    let result = {
        "full_name": "Ashton Murrell",
        "phone_number": "(+1)8035499137",
        "address_line_1": "1115 Semoran Way",
        "address_line_2": "Apt 2",
        "city": "Columbia",
        "state": "South Carolina",
        "postal_code": "29229"
    };
    if (result.full_name) {
        await set_address(result);
    } else {
        alert("当前分配下单任务已经执行完");
    }
}

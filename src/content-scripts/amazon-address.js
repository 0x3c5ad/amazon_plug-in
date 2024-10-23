// 设置地址并保存地址
async function set_address(data) {
    // 收件人
    document.querySelector("#address-ui-widgets-enterAddressFullName").value = data.full_name;
    // 电话
    document.querySelector("#address-ui-widgets-enterAddressPhoneNumber").value = data.phone_number;
    // 地址
    document.querySelector("#address-ui-widgets-enterAddressLine1").value = data.address_line_1;
    // 地址2
    document.querySelector("#address-ui-widgets-enterAddressLine2").value = data.address_line_2 || '';
    // 城市
    document.querySelector("#address-ui-widgets-enterAddressCity").value = data.city;
    // 州
    var dropdown = document.querySelector("#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId");
    if (dropdown) {
        var targetValue = data.state;
        for (var i = 0; i < dropdown.options.length; i++) {
            if (dropdown.options[i].value === targetValue) {
                dropdown.selected = true;
                dropdown.selectedIndex = i;
                break;
            }
        }
    }
    // 邮编
    document.querySelector("#address-ui-widgets-enterAddressPostalCode").value = data.postal_code;
    // 设置为默认
    document.querySelector("#address-ui-widgets-use-as-my-default").checked = true;
    // 点击保存
    document.querySelector("#address-ui-widgets-form-submit-button > span > input").click();
}






const domain=location.href;

const createHiddenInput = (form, name, value) => {
  const hiddenField = document.createElement('input');
  hiddenField.type = 'hidden';
  hiddenField.name = name;
  hiddenField.value = value;
  form.appendChild(hiddenField);
};


const getMapHandler = () => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://logistics-stage.ecpay.com.tw/Express/map'; // 這是測試的網址，文件上會寫正式的是哪個網址
    createHiddenInput(form, 'MerchantID', '2000132');
    createHiddenInput(form, 'LogisticsType', 'CVS');
    createHiddenInput(form, 'LogisticsSubType', 'UNIMART');
    createHiddenInput(form, 'IsCollection', 'Y');
    createHiddenInput(form, 'ServerReplyURL', domain);
    document.body.appendChild(form);
    form.submit();
  };

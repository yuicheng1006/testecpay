
const domain = location.href;
console.log('domain', domain);

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
  form.enctype = 'application/x-www-form-urlencoded';
  form.action = 'https://logistics-stage.ecpay.com.tw/Express/map'; // 這是測試的網址，文件上會寫正式的是哪個網址
  createHiddenInput(form, 'MerchantID', '2000132');
  createHiddenInput(form, 'LogisticsType', 'CVS');
  createHiddenInput(form, 'LogisticsSubType', 'UNIMART');
  createHiddenInput(form, 'IsCollection', 'Y');
  createHiddenInput(form, 'ServerReplyURL', domain);
  document.body.appendChild(form);
  form.submit();
};

document.querySelector('button').addEventListener('click', getMapHandler);

// const btn = document.querySelector('button');

// const domain = location.href;
// console.log('domain', domain);

// btn.addEventListener('click', async () => {
//   const formData = new FormData();
//   formData.append('MerchantID', '2000132');
//   formData.append('LogisticsType', 'CVS');
//   formData.append('LogisticsSubType', 'UNIMART');
//   formData.append('IsCollection', 'Y');
//   formData.append('ServerReplyURL', domain);

//   try {
//     const res = await axios.post(
//       'https://logistics-stage.ecpay.com.tw/Express/map',
//       formData,
//       {
//         headers: {
//           Accept: 'text/html',
//           ContentType: 'application/x-www-form-urlencoded',
//         },
//       },
//     );
//     console.log('res', res);
//   } catch (error) {
//     console.log('error', error);
//   }
// });



  var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); 

  function setCookie(name, value)
  {
    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  }

   function storeValues(form)  
  {
    setCookie("field1", form.field1.value);
    setCookie("field2", form.field2.value);
    setCookie("field3", form.field3.value);
    setCookie("field4", form.field4.value);
    return true;
  }


  if(field1 = getCookie("field1")) document.myForm.field1.value = field1;
  if(field2 = getCookie("field2")) document.myForm.field2.value = field2;
  if(field3 = getCookie("field3")) document.myForm.field3.value = field3;
  if(field4 = getCookie("field4")) document.myForm.field4.value = field4;

    function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }
// JavaScript Document
<!--
function selecciona(tipo) {
	if (window.document.forms['busqueda'].elements['precio_inf'].disabled) {
		window.document.forms['busqueda'].elements['precio_inf'].disabled = false;
		window.document.forms['busqueda'].elements['precio_sup'].disabled = false;
	}
	window.document.forms['busqueda'].elements['precio_inf'].options.length = 0;
	if (tipo == "alquiler") {
    	window.document.forms['busqueda'].elements['precio_inf'].options[0] = new Option("$0", "1", false, false);
    	window.document.forms['busqueda'].elements['precio_inf'].options[1] = new Option("$3.000", "2", false, false);
  		window.document.forms['busqueda'].elements['precio_inf'].options[2] = new Option("$5.000", "3", false, false);
  		window.document.forms['busqueda'].elements['precio_inf'].options[3] = new Option("$7.500", "4", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[4] = new Option("$10.000", "5", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[5] = new Option("$15.000", "6", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[6] = new Option("$20.000", "7", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[1] = new Option("$3.000", "1", false, false);
    	window.document.forms['busqueda'].elements['precio_sup'].options[2] = new Option("$5.000", "2", false, false);
  		window.document.forms['busqueda'].elements['precio_sup'].options[3] = new Option("$7.500", "3", false, false);
  		window.document.forms['busqueda'].elements['precio_sup'].options[4] = new Option("$10.000", "4", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[5] = new Option("$15.000", "5", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[6] = new Option("$20.000", "6", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[7] = new Option("MAS de $20.000", "7", true, true);

		
	} else if (tipo == 'venta') {
		window.document.forms['busqueda'].elements['precio_inf'].options[0] = new Option("U$S0", "1", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[1] = new Option("U$S50.000", "2", false, false);
    	window.document.forms['busqueda'].elements['precio_inf'].options[2] = new Option("U$S75.000", "3", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[3] = new Option("U$S100.000", "4", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[4] = new Option("U$S125.000", "5", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[5] = new Option("U$S150.000", "6", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[6] = new Option("U$S200.000", "7", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[7] = new Option("U$S250.000", "8", false, false);
		window.document.forms['busqueda'].elements['precio_inf'].options[8] = new Option("U$S300.000", "9", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[1] = new Option("U$S50.000", "1", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[2] = new Option("U$S75.000", "2", false, false);
    	window.document.forms['busqueda'].elements['precio_sup'].options[3] = new Option("U$S100.000", "3", false, false);
  		window.document.forms['busqueda'].elements['precio_sup'].options[4] = new Option("U$S125.000", "4", false, false);
  		window.document.forms['busqueda'].elements['precio_sup'].options[5] = new Option("U$S150.000", "5", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[6] = new Option("U$S200.000", "6", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[7] = new Option("U$S250.000", "7", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[7] = new Option("U$S300.000", "8", false, false);
		window.document.forms['busqueda'].elements['precio_sup'].options[7] = new Option("MAS de U$S300.000", "9", true, true);
	}
}
function valida(tipo_busqueda) {
	if (tipo_busqueda == "avanzada") {
    	if ((window.document.forms['busqueda'].elements['precio_inf'].disabled) || (window.document.forms['busqueda'].elements['precio_inf'].length == 0)) {
    		alert("Debe Seleccionar un tipo de transacci�n");
    	} else if ((window.document.forms['busqueda'].elements['precio_inf'].value) > window.document.forms['busqueda'].elements['precio_sup'].value) {
				alert("El l�mite de precio inferior no puede ser mayor que el l�mite superior");
			} else {
				window.document.forms['busqueda'].elements['tipo_busqueda'].value = "avanzada";
    	 	window.document.forms['busqueda'].submit();
    	}
	}
	if (tipo_busqueda == "codigo") {
		 if (window.document.forms['busqueda1'].elements['codigo'].value == "") {
		 		alert("Debe ingresar el c�digo de la propiedad")
		 } else {
		 	 window.document.forms['busqueda1'].elements['tipo_busqueda'].value = "codigo";
			 window.document.forms['busqueda1'].submit();
		 }
	}
}

function MM_preloadImages() { //v3.0
 var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
 var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
 if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
 var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
 d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
 if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
 for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
 if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
 window.open(theURL,winName,features);
}
function MM_swapImgRestore() { //v3.0
 var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
 var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
 if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

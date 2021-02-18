
var i=0;
var j=0;
var filas=0;
var columnas=0;
	function func(){
		filas=parseFloat(document.getElementById("f").value);
		columnas=parseFloat(document.getElementById("c").value);
		document.write("<table border=1>");
		for (i=0; i<filas; i++){
			document.write("<tr>");
			for(j=0; j<columnas; j++){
				document.write("<td>&nbsp;</td>");
			}
			document.write("</tr>");
		}
		document.write("</table>");
	}
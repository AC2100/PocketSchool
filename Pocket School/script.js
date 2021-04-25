// // function f(){
// // }

// // function getReport(){
// //     var report = "a,b,c,d;1,2,3,4;";
// //     //console.log(report);
// //     var csvcontent="";
// //     while (report.indexOf(";")!=-1)
// //     {
// //         csvcontent=csvcontent+ report.substring(0,report.indexOf(";"))+"\n";
// //         report=report.substring(report.indexOf(";")+1);
// //     }

// //     console.log(csvcontent);
// //     var a = document.createElement('submitbutton');
// //     a.href     = 'data:attachment/csv,' + csvcontent;
// //     a.target   = '_blank';
// //     a.download = 'Accounts (1).csv';
// //     document.body.appendChild(a);
// //     console.log("ok");
// //     a.click();
// // }

// async function showPlots() {
				
// 				const resp = await fetch('/Accounts (1).csv')
// 					, data = await resp.text()
// 					, json = Papa.parse(data, {header: true})
// 				;
				
// 				createPieChart(json.data, 'color', 'Color')
// 				createBarChart(json.data, 'gender', 'Gender')
// 			}
			
// 			function createPieChart(rawdata, id, column) {
// 				var parsedData = rawdata
// 					.map(r => r[column])
// 					.reduce((o, c) => {
// 						o[c] = o[c] || 0;
// 						o[c]++;
// 						return o;
// 					}, {})
				
				
// 				var values = [];
// 				var labels = [];
// 				var total = 0;
// 				Object.keys(parsedData).forEach(label => {
// 					const value = parsedData[label];
// 					total += value;
// 					values.push(value);
// 					labels.push(label)
// 				})
				
// 				values = values.map(v => v/total*100)
// 				var data = [{
// 				  values: values,
// 				  labels: labels,
// 				  type: 'pie'
// 				}];
				
// 				var layout = {
// 				  height: 400,
// 				  width: 500
// 				};
				
// 				Plotly.newPlot(id, data, layout);
// 			}
			
// 			function createBarChart(rawdata, id, column) {
// 				var parsedData = rawdata
// 					.map(r => r[column])
// 					.reduce((o, c) => {
// 						o[c] = o[c] || 0;
// 						o[c]++;
// 						return o;
// 					}, {})
				
				
// 				var values = [];
// 				var labels = [];
// 				var total = 0;
// 				Object.keys(parsedData).forEach(label => {
// 					const value = parsedData[label];
// 					total += value;
// 					values.push(value);
// 					labels.push(label)
// 				})
				
// 				values = values.map(v => v/total*100);
// 				var data = [
// 				  {
// 				    x: labels,
// 				    y: values,
// 				    type: 'bar'
// 				  }
// 				];				
// 				Plotly.newPlot('gender', data);
// 			}

// 			showPlots();



function saveTextAsFile()
{
    var textToSave = "hi";
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "Accounts (1).csv";
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 
function loadFileAsText()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
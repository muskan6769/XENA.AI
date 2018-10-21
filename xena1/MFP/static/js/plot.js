trace1 = {
    x: ['1-Sep', '2-Sep', '3-Sep', '4-Sep', '5-Sep', '6-Sep', '7-Sep', '8-Sep', '9-Sep', '10-Sep', '11-Sep', '12-Sep', '13-Sep', '14-Sep', '15-Sep', '16-Sep', '17-Sep', '18-Sep', '19-Sep', '20-Sep', '21-Sep', '22-Sep', '23-Sep', '24-Sep', '25-Sep', '26-Sep', '27-Sep', '28-Sep', '29-Sep', '30-Sep', '31-Sep'], 
    y: [-15, -15, -17, -13, -9, -12, -19, -14, -9, -12, -12, -14, -12, -13, -12, -15, -15, -16, -16, -13, -14, -18, -12, -18, -12, -15, -15, -14, -14, -14, -13, -15, -21, -14, -13, -10, -18, -14, -17, -12, -20], 
    fill: 'tozeroy', 
    mode: 'lines+markers', 
    name: 'Negative Feedback', 
    type: 'scatter', 
    uid: '5dd732b0-d4b5-11e8-9d81-c83dd47dc729', 
    xsrc: 'muskan6769:2:f41e47', 
    ysrc: 'muskan6769:2:a49f57'
  };
  trace2 = {
    x: ['1-Sep', '2-Sep', '3-Sep', '4-Sep', '5-Sep', '6-Sep', '7-Sep', '8-Sep', '9-Sep', '10-Sep', '11-Sep', '12-Sep', '13-Sep', '14-Sep', '15-Sep', '16-Sep', '17-Sep', '18-Sep', '19-Sep', '20-Sep', '21-Sep', '22-Sep', '23-Sep', '24-Sep', '25-Sep', '26-Sep', '27-Sep', '28-Sep', '29-Sep', '30-Sep', '31-Sep'], 
    y: [10, 15, 14, 14, 10, 19, 13, 13, 17, 17, 19, 13, 15, 12, 12, 11, 18, 16, 13, 15, 14, 15, 16, 12, 14, 13, 16, 17, 14, 10, 14, 13, 9, 14, 16, 17, 11, 16, 10, 17, 12], 
    fill: 'tozeroy', 
    marker: {color: 'rgb(255, 20, 147)'}, 
    mode: 'lines+markers', 
    name: 'Positive Feedback', 
    type: 'scatter', 
    uid: '5dd732b1-d4b5-11e8-9d81-c83dd47dc729', 
    xsrc: 'muskan6769:2:f41e47', 
    ysrc: 'muskan6769:2:1539ed'
  };
  data = [trace1, trace2];
  layout = {
    autosize: true, 
    dragmode: 'pan', 
    font: {
      color: 'rgb(247, 243, 243)', 
      size: 13
    }, 
    legend: {font: {
        color: 'rgb(247, 245, 245)', 
        size: 12
      }}, 
    margin: {b: 100}, 
    paper_bgcolor: 'rgb(27, 42, 71)', 
    plot_bgcolor: 'rgb(27, 42, 71)', 
    title: 'Monthly Feedback', 
    titlefont: {color: 'rgb(253, 247, 247)'}, 
    xaxis: {
      autorange: false, 
      range: [-0.443213296399, 29.5567867036], 
      rangeslider: {
        autorange: true, 
        range: [0, 30], 
        visible: false
      }, 
      showgrid: false, 
      tickfont: {
        color: 'rgb(135, 131, 131)', 
        size: 12
      }, 
      title: 'Date', 
      type: 'category', 
      zerolinecolor: 'rgb(240, 233, 233)'
    }, 
    yaxis: {
      autorange: false, 
      range: [-21.8390804598, 21.8390804598], 
      showgrid: false, 
      tickfont: {color: 'rgb(181, 172, 172)'}, 
      title: 'Feedback', 
      type: 'linear'
    }
  };
  Plotly.plot('plotly-div', {
    data: data,
    layout: layout
  });
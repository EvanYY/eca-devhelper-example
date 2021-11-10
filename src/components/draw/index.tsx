import React, {useEffect} from 'react'
import {DataSource} from './mock'

import * as echarts from "echarts";
export const Draw = ()=> {
  const id= 'main';
  const option = {
    title: {
      text: "汉语文字 aaaa",
    },
  
    tooltip: {
      trigger: "item",
      // triggerOn: "click",
    },
    series: {
      type: "sankey",
      draggable: false,
      data: [] as any,
      links: [] as any,
      dataZoom: {
        type: "inside",
        start: 0,
        end: 200,
      },
      emphasis: {
        focus: "adjacency",
      },
      lineStyle: {
        color: "source",
        curveness: 0.5,
      },
    },
  };
  const response = (e:any)=> {
    
    console.log("🚀 ~ file: index.tsx ~ line 39 ~ reback ~ e", e)
  }
  useEffect(()=> {
    var myChart = echarts.init(document.getElementById('main') as any);
    option.series.data = DataSource.nodes
    option.series.links = DataSource.links
    myChart.on('click', response)
    myChart.setOption(option)
  })
  return <div id={id} style={{width:'100%', height:'300px'}}></div>
}
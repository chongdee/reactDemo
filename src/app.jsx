import React from "react";
// import Home from "./Home";
// import MyNav from "./MyNav";
// import StateCompt from './StateCompt'
// import LifeCycle from './LifeCycle'
// import SetStateDemo from './setStateDemo'
// import IfDemo from "./ifDemo";
// import KeyDemo from "./keyDemo";
// import FormDemo from "./FormDemo";
// import RefsAndDOM from "./RefsAndDOM";
// import RefsForm from "./RefsForm";
// import Parent from "./StatePromote/Parent";
// import Combination from "./Combination";
// import PropTypes from "./PropTypes ";
// import Fragment from "./Fragment";
// import MyContext from "./Context";
import Parent from "./ErrorBoundary/Parent";

// 用类的形式创建组件，Hook形式
class App extends React.Component {
  constructor(){
    super()
    this.state={
      title:'app组件state'
    }
  }

  handleTitle=(data)=>{
    this.setState({
      title:data
    })
  }

  render() {
    // 有多行标签时，用()标签可以换行

    // const nav1 = ["首页", "视频", "学习"];
    // const nav2 = ["web", "Java", "Node"];
    return (
      <div>
        {/*<h1>Hello React Component</h1>
        <h3>学习React,厉害</h3>
        <Home />
        <MyNav nav={nav1} title="路径导航" />
        <MyNav nav={nav2} title="学习导航" />
        */}
        {/* <StateCompt /> */}
        {/* <LifeCycle title={this.state.title} handleChanges={this.handleTitle} /> */}
        {/* <button onClick={this.handleTitle}>修改title</button> */}
        {/* <SetStateDemo /> */}
        {/* <Combination>
          <div>组合内容</div>
        </Combination> */}
        {/* <PropTypes /> */}
        {/* <Fragment/> */}
        {/* <MyContext /> */}
        <Parent/>
      </div>
    );
  }
}

export default App;

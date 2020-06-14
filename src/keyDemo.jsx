import React from "react";

export default class KeyDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      userinfo: [
        {
          name: "ardee",
          age: 18,
          gender: "男",
          hobbies: ["听音乐", "看电影", "跑步"],
        },
        {
          name: "foo",
          age: 19,
          gender: "男",
          hobbies: ["听音乐", "看电影", "跑步"],
        },
        {
          name: "lily",
          age: 20,
          gender: "女",
          hobbies: ["听音乐", "看电影", "跑步"],
        },
      ],
    };
  }

  handlePush = () => {
    this.setState({
      // 用push() 返回的是长度
      userinfo: this.state.userinfo.concat([{
        name: "pushBar",
        age: 20,
        gender: "女",
        hobbies: ["听音乐", "看电影", "跑步"],
      }]),
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.userinfo.map((firstEl, index) => {
            return (
              <li key={index}>
                <p>姓名：{firstEl.name}</p>
                <p>年龄：{firstEl.age}</p>
                <p>性别：{firstEl.gender}</p>
                <p>
                  兴趣：
                  {firstEl.hobbies.map((childEl, childIndex) => {
                    return <span key={childIndex}>{childEl + " "}</span>;
                  })}
                </p>
              </li>
            );
          })}
        </ul>
        <button onClick={this.handlePush}>添加数据</button>
      </div>
    );
  }
}

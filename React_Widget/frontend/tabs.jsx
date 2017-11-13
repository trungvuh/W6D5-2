import React from 'react';

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedFolder;
    let headers = this.props.folders.map((folder, index) => {
      let title = folder.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.chosenFolder.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>

    );
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selectedTab: num});
  }

  render() {
    let folder = this.props.folders[this.state.selectedTab];
    return (
      <div>
        <h1> Tabs </h1>
        <div className='tabs'>
          <Headers
            selectedFolder={this.state.selectedTab}
            chosenFolder={this.selectTab}
            folders={this.props.folders}>
          </Headers>
          <div className='tab-content'>
            <article>
              {folder.content}
            </article>
          </div>
        </div>
      </div>
    );
  }
}


export default Tabs;

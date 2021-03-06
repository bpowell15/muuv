import React from 'react';

class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
  }

  randomImage(){
    let num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (this.props.image) {
      return (
        <section className="background-image"></section>
      );
    } else {
      return (
      <section className={`background-image-${num}`}></section>
      );
    }
  }
  render () {
    return(

      this.randomImage()
    );
  }
}

export default BackgroundImage ;

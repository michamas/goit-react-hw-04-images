import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('mousedown', this.handleClose);
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClose);
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = event => {
    if (event.code === 'Escape' || 'click') {
      return this.props.onClose();
    }
  };

  render() {
    const { imageLarge } = this.props;
    return (
      <div className="Overlay" onClose={this.props.onClose}>
        <div className="Modal">
          <img src={imageLarge} alt="MagnifiedImage" />
        </div>
      </div>
    );
  }
}

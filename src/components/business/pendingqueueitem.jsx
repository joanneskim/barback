import React from "react";

class PendingQueueItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="QueueItem">
        <h5>Pending Queue Item</h5>
        <div className="OrderItem">
          {this.props.order.map(item =>
            <h6>This is an order item.</h6>
          )}
        </div>      
      </div>
    );
  }
}

export default PendingQueueItem;

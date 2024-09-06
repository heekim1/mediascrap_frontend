import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class ChannelTable extends Component {
  columns = [
    { path: "youtuber", label: "Youtuber" },
    { path: "subscribers", label: "Subscribers" },
    { path: "category.name", label: "Category" },
    { path: "views", label: "Views" },
    {
      key: "like",
      content: (channel) => (
        <Like
          liked={channel.liked}
          onClick={() => this.props.onLike(channel)}
        />
      ),
    },
    {
      key: "delete",
      content: (channel) => (
        <button
          onClick={() => this.props.onDelete(channel)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { channels, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={channels}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ChannelTable;

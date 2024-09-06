import React, { Component } from "react";
import { getChannels } from "../services/ChannelService";
import { getCategories } from "../services/ChannelService";
import ChannelsTable from "./channelsTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/pagenate";
import _ from "lodash";

class Channels extends Component {
  state = {
    channels: [],
    categories: [],
    currentPage: 1,
    pageSize: 2,
    selectedCategory: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const categories = [{ _id: 0, name: "All Categories" }, ...getCategories()];
    this.setState({ channels: getChannels(), categories });
  }

  handleDelete = (channel) => {
    const channels = this.state.channels.filter((c) => c._id !== channel._id);
    this.setState({ channels });
  };

  handleLike = (channel) => {
    const channels = [...this.state.channels];
    const index = channels.indexOf(channel);
    channels[index] = { ...channels[index] };
    channels[index].liked = !channels[index].liked;
    this.setState({ channels });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  handleSort = sortColumn => {

    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedCategory,
      channels: allChannels,
    } = this.state;

    const filtered =
      selectedCategory && selectedCategory._id !== 0
        ? allChannels.filter((m) => m.category._id === selectedCategory._id)
        : allChannels;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const channels = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: channels};
  }


  render() {
    const { length: count } = this.state.channels;
    const {
      pageSize,
      currentPage,
      sortColumn,
      channels: allChannels,
    } = this.state;

    if (count === 0) return <p>There are no channel in the database</p>;

    const { totalCount, data : channels } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.categories}
            selectedItem={this.state.selectedCategory}
            onItemSelect={this.handleCategorySelect}
          />
        </div>
        <div className="col">
          <p>Shown {totalCount} in the database</p>
          <ChannelsTable
            channels={channels}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />

          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Channels;

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withDrawer } from '../../lib/utils/withDarwer';
import GroupDrawer from './GrupDrawer';

class GroupsPage extends Component {
  static propTypes = {
    toggleDrawer: PropTypes.func.isRequired
  }

  render() {
    const { toggleDrawer } = this.props;

    return (
      <div>
        This is groups page and it can <button onClick={toggleDrawer}>open</button> Drawer
      </div>
    )
  }
}

export default withDrawer(GroupDrawer)(GroupsPage);

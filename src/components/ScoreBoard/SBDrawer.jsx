import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { animated, Trail } from 'react-spring'

import { Drawer, List, ListItem, Icon, Divider } from "@material-ui/core";
import { ToggableIconButton } from "lib/elements"
import classNames from 'classnames';
import { styles } from "./drawerStyles";

class GroupDrawer extends Component {
  static ptopTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  };

  state = {
    showAdditionalMenu: false
  }

  handleShowAdditionalMenu = () => {
    this.setState({ showAdditionalMenu: true });
  }

  handleHideAdditionalMenu = () => {
    this.setState({ showAdditionalMenu: false });
  }

  render() {
    const { open, classes } = this.props;
    const { showAdditionalMenu } = this.state;

    const menuItems = [
      {
        label: "Група",
        tooltip: "Група",
        icon: "group",
        action: console.log
      },
      {
        label: "Налаштування",
        tooltip: "Налаштування",
        icon: "settings",
        action: console.log
      },
      {
        label: "Видалити",
        tooltip: "Видалити",
        icon: "delete",
        action: console.log
      }
    ]

    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
        onMouseLeave={this.handleHideAdditionalMenu}
      >
        <List>
          <ToggableIconButton
            onClick={console.log}
            label="Таблиця Оцiнок"
            tooltip="Таблиця Оцiнок"
            icon="list_alt"
            open={open}
          />
          <ToggableIconButton
            onClick={console.log}
            label="Теми"
            tooltip="Теми"
            icon="books"
            open={open}
          />
          <ToggableIconButton
            onClick={console.log}
            label="Статистика"
            tooltip="Статистика"
            icon="assessment"
            open={open}
          />
          {open && <Divider/>}
          {!showAdditionalMenu && !open ?
            (<ListItem button onMouseEnter={this.handleShowAdditionalMenu}>
              <Icon>
                more_vert
              </Icon>
            </ListItem>)
            : (
              <Trail
                native
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                items={menuItems}
                config={{ tension: 200, friction: 20 }}
                keys={menuItems.map((_, i) => i)}
              >
                {
                  item => ({ opacity }) => (
                    <animated.div style={{ opacity: opacity.interpolate(o => o) }}>
                      <ToggableIconButton
                        onClick={item.action}
                        tooltip={item.tooltip}
                        label={item.label}
                        icon={item.icon}
                        open={open}
                      />
                    </animated.div>
                  )
                }
              </Trail>
            )
          }
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(GroupDrawer);

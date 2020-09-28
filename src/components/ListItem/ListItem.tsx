import React, {FC} from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from "@material-ui/core/IconButton";
import {IconType} from "react-icons";
import ListItemHeader from './ListItemHeader';
import ListItemActions, {ListItemAction} from "./ListItemActions";

interface ListItemProps {
    icon?: IconType
    heading: string;
    subtitle1: string;
    subtitle2: string;
    actions: ListItemAction[]
}

const ListItem: FC<ListItemProps> = ({icon: Icon, heading, subtitle1, subtitle2, actions}) => {
    return (
      {/* add the code here */}
    );
};

export default ListItem;
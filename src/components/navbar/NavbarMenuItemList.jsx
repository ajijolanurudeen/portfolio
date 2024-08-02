import React from 'react'

export default function NavbarMenuItemList(props) {
    const { menuItem } = props.data;
    return (
        <li>{menuItem}</li>
    )
}

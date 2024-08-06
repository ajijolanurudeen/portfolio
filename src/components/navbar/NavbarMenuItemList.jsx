import React from 'react'

export default function NavbarMenuItemList(props) {
    const { menuItem, id } = props.data;
    return (
        <a href={id} className='hover:scale-110 transition-all'><li>{menuItem}</li></a>
    )
}
